import React, { useEffect, useState, useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

const data = [
  {
    name: "Wireless Mouse",
    sold_amount: 34,
    unit_price: 19.99,
    revenue: 679.66,
    rating: 4.5,
  },
  {
    name: "Mechanical Keyboard",
    sold_amount: 20,
    unit_price: 59.99,
    revenue: 1199.8,
    rating: 4.8,
  },
  {
    name: "HD Monitor",
    sold_amount: 10,
    unit_price: 129.99,
    revenue: 1299.9,
    rating: 4.2,
  },
  {
    name: "USB-C Hub",
    sold_amount: 50,
    unit_price: 25.0,
    revenue: 1250.0,
    rating: 4.4,
  },
  {
    name: "Webcam",
    sold_amount: 18,
    unit_price: 45.5,
    revenue: 819.0,
    rating: 4.1,
  },
];

const ProductTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Product Name",
        size: 200,
      },
      {
        accessorKey: "sold_amount",
        header: "Sold Amount",
        size: 120,
      },
      {
        accessorKey: "unit_price",
        header: "Unit Price ($)",
        size: 120,
        Cell: ({ cell }) => `$${parseFloat(cell.getValue()).toFixed(2)}`,
      },
      {
        accessorKey: "revenue",
        header: "Revenue ($)",
        size: 150,
        Cell: ({ cell }) => `$${parseFloat(cell.getValue()).toFixed(2)}`,
      },
      {
        accessorKey: "rating",
        header: "Rating",
        size: 100,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return <MaterialReactTable table={table}/>;
};

export default ProductTable;
