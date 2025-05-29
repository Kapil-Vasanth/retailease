import React, { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

const CustomerTable = ({ customers }) => {
  const columns = useMemo(
    () => [
      { accessorKey: "customer_id", header: "Customer ID", size: 120 },
      { accessorKey: "name", header: "Name", size: 180 },
      { accessorKey: "email", header: "Email", size: 220 },
      { accessorKey: "phone", header: "Phone", size: 160 },
      { accessorKey: "location", header: "Location", size: 180 },
      {
        accessorKey: "total_purchases",
        header: "Total Purchases ($)",
        size: 160,
        Cell: ({ cell }) => `$${parseFloat(cell.getValue()).toFixed(2)}`,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: customers,
  });

  return <MaterialReactTable table={table} />;
};

export default CustomerTable;
