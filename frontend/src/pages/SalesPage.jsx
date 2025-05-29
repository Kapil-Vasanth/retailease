import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import SalesTable from '../components/SalesTable';
import CreateSales from '../components/CreateSales';

const SalesPage = () => {
  const [sales, setSales] = useState([
    {
      sale_id: "S001",
      date: "2025-05-01",
      product: "Wireless Mouse",
      quantity: 3,
      total_amount: 59.97,
      customer: "Alice Johnson",
      payment_method: "Credit Card",
    },
    {
      sale_id: "S002",
      date: "2025-05-03",
      product: "Mechanical Keyboard",
      quantity: 1,
      total_amount: 59.99,
      customer: "Bob Smith",
      payment_method: "PayPal",
    },
    {
      sale_id: "S003",
      date: "2025-05-04",
      product: "HD Monitor",
      quantity: 2,
      total_amount: 259.98,
      customer: "Charlie Davis",
      payment_method: "Credit Card",
    },
    {
      sale_id: "S004",
      date: "2025-05-05",
      product: "USB-C Hub",
      quantity: 5,
      total_amount: 125.0,
      customer: "Dana Lee",
      payment_method: "Debit Card",
    },
    {
      sale_id: "S005",
      date: "2025-05-06",
      product: "Webcam",
      quantity: 1,
      total_amount: 45.5,
      customer: "Evan Green",
      payment_method: "Cash",
    },
  ]);

  useEffect(() => {
    const button = document.querySelector('[data-drawer-toggle="default-sidebar"]');
    const sidebar = document.getElementById('default-sidebar');

    if (button && sidebar) {
      const toggleSidebar = () => sidebar.classList.toggle('-translate-x-full');
      button.addEventListener('click', toggleSidebar);
      return () => button.removeEventListener('click', toggleSidebar);
    }
  }, []);

  return (
    <div className="bg-gray-50">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 4.75A.75.75..." />
        </svg>
      </button>

      <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <Sidebar dashboard={'Sales'} />
      </aside>

      <div className="p-4 sm:ml-64 h-screen">
        <div className="p-6 flex flex-wrap lg:flex-nowrap gap-4 lg:gap-8">
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl font-semibold">Sales</h1>
            <div className="mt-6 w-full">
              <SalesTable data={sales} setData={setSales} />
            </div>
          </div>
          <CreateSales setSales={setSales} />
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
