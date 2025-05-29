import React, { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

const InventoryTable = ({ inventory, setInventory }) => {
  const handleSaveRow = ({ row, values, exitEditingMode }) => {
    const updated = [...inventory];
    updated[row.index] = values;
    setInventory(updated);
    exitEditingMode();
  };

  const columns = useMemo(() => [
    {
      accessorKey: "product_id",
      header: "Product ID",
      enableEditing: false,
    },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "category", header: "Category" },
    {
      accessorKey: "stock",
      header: "Stock",
      muiTableBodyCellEditTextFieldProps: {
        type: "number",
        min: 0,
      },
    },
    {
      accessorKey: "price",
      header: "Price ($)",
      muiTableBodyCellEditTextFieldProps: {
        type: "number",
        step: 0.01,
      },
      Cell: ({ cell }) => `$${parseFloat(cell.getValue()).toFixed(2)}`,
    },
  ], [inventory]);

  const table = useMaterialReactTable({
    columns,
    data: inventory,
    enableEditing: true,
    editingMode: "row",
    onEditingRowSave: handleSaveRow,
  });

  return <MaterialReactTable table={table} />;
};

export default InventoryTable;
