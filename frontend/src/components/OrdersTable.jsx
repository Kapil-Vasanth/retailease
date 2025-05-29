import React, { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

const OrdersTable = ({ orders, setOrders }) => {
  const handleSaveRow = async ({ row, values, exitEditingMode }) => {
    const updated = [...orders];
    updated[row.index] = values;
    setOrders(updated);
    exitEditingMode();
  };

  const columns = useMemo(() => [
    {
      accessorKey: "order_id",
      header: "Order ID",
      enableEditing: false,
    },
    { accessorKey: "customer_name", header: "Customer Name" },
    { accessorKey: "product", header: "Product" },
    {
      accessorKey: "quantity",
      header: "Quantity",
      muiTableBodyCellEditTextFieldProps: { type: "number", min: 1 },
    },
    {
      accessorKey: "total_price",
      header: "Total Price ($)",
      muiTableBodyCellEditTextFieldProps: { type: "number", step: 0.01 },
      Cell: ({ cell }) => `$${parseFloat(cell.getValue()).toFixed(2)}`,
    },
    {
      accessorKey: "status",
      header: "Status",
      muiTableBodyCellEditTextFieldProps: {
        select: true,
        children: [
          <option key="Pending" value="Pending">Pending</option>,
          <option key="Shipped" value="Shipped">Shipped</option>,
          <option key="Delivered" value="Delivered">Delivered</option>,
          <option key="Cancelled" value="Cancelled">Cancelled</option>,
        ],
      },
    },
  ], [orders]);

  const table = useMaterialReactTable({
    columns,
    data: orders,
    enableEditing: true,
    editingMode: "row",
    onEditingRowSave: handleSaveRow,
  });

  return <MaterialReactTable table={table} />;
};

export default OrdersTable;
