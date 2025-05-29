import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const formatItems = (items) =>
  items.map((item) => `${item.product} (x${item.quantity})`).join(", ");

const PurchasesTable = ({ purchases }) => {
  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "Purchase ID", size: 120 },
      { accessorKey: "date", header: "Date", size: 140 },
      {
        accessorKey: "items",
        header: "Items",
        size: 400,
        Cell: ({ cell }) => formatItems(cell.getValue()),
      },
      {
        header: "Total ($)",
        accessorFn: (row) =>
          row.items.reduce((sum, i) => sum + i.quantity * i.unitPrice, 0),
        Cell: ({ cell }) => `$${cell.getValue().toFixed(2)}`,
        size: 120,
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={purchases} />;
};

export default PurchasesTable;
