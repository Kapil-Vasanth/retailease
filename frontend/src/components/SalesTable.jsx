import React, { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";


const SalesTable = ({ data, setData }) => {
  const handleSaveRow = ({ row, values, exitEditingMode }) => {
    const updatedData = [...data];
    updatedData[row.index] = values;
    setData(updatedData);
    exitEditingMode();
  };

  const columns = useMemo(() => [
    {
      accessorKey: "sale_id",
      header: "Sale ID",
      enableEditing: false,
    },
    {
      accessorKey: "date",
      header: "Date",
      muiTableBodyCellEditTextFieldProps: {
        type: "date",
      },
    },
    {
      accessorKey: "product",
      header: "Product",
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
      muiTableBodyCellEditTextFieldProps: {
        type: "number",
        min: 1,
      },
    },
    {
      accessorKey: "total_amount",
      header: "Total Amount ($)",
      Cell: ({ cell }) => `$${parseFloat(cell.getValue()).toFixed(2)}`,
      muiTableBodyCellEditTextFieldProps: {
        type: "number",
        step: 0.01,
        min: 0,
      },
    },
    {
      accessorKey: "customer",
      header: "Customer",
    },
    {
      accessorKey: "payment_method",
      header: "Payment Method",
    },
  ], []);

  const table = useMaterialReactTable({
    columns,
    data,
    enableEditing: true,
    editingMode: "row",
    onEditingRowSave: handleSaveRow,
  });

  return <MaterialReactTable table={table} />;
};

export default SalesTable;

