import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import PurchasesTable from '../components/PurchaseTable';
import CreatePurchase from '../components/CreatePurchase';

const PurchasePage = () => {
  const [purchases, setPurchases] = useState([
    {
      id: "PUR001",
      date: "2025-05-29",
      items: [
        { product: "Mouse", quantity: 2, unitPrice: 20 },
        { product: "Keyboard", quantity: 1, unitPrice: 60 },
      ],
    },
    {
      id: "PUR002",
      date: "2025-05-28",
      items: [{ product: "Monitor", quantity: 1, unitPrice: 130 }],
    },
  ]);

  useEffect(() => {
    const button = document.querySelector('[data-drawer-toggle="default-sidebar"]');
    const sidebar = document.getElementById('default-sidebar');

    if (button && sidebar) {
      const toggleSidebar = () => {
        sidebar.classList.toggle('-translate-x-full');
      };

      button.addEventListener('click', toggleSidebar);

      return () => {
        button.removeEventListener('click', toggleSidebar);
      };
    }
  }, []);

  return (
    <div className='bg-gray-50'>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <Sidebar dashboard={'Purchase'} />
      </aside>

      <div className="p-4 sm:ml-64 h-screen">
        <div className="p-6 flex flex-wrap lg:flex-nowrap 0 gap-4 lg:gap-8">
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl font-semibold">Purchase</h1>
            <div className="mt-6 w-full  gap-4">
              <PurchasesTable purchases={purchases} />
            </div>
          </div>
          <CreatePurchase purchases={purchases} setPurchases={setPurchases} />
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
