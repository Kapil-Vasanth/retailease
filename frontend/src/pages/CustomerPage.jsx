import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import CustomerTable from '../components/CustomerTable';
import CreateCustomer from '../components/CreateCustomer';

const CustomerPage = () => {
  const [customers, setCustomers] = useState([
    {
      customer_id: "CUST001",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "+1-555-123-4567",
      location: "New York, USA",
      total_purchases: 980.45,
    },
    {
      customer_id: "CUST002",
      name: "Bob Smith",
      email: "bob.smith@example.com",
      phone: "+1-555-987-6543",
      location: "San Francisco, USA",
      total_purchases: 1249.99,
    },
    {
      customer_id: "CUST003",
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
      phone: "+1-555-456-7890",
      location: "Austin, USA",
      total_purchases: 673.20,
    },
    {
      customer_id: "CUST004",
      name: "Dana Lee",
      email: "dana.lee@example.com",
      phone: "+1-555-654-3210",
      location: "Chicago, USA",
      total_purchases: 234.50,
    },
    {
      customer_id: "CUST005",
      name: "Evan Green",
      email: "evan.green@example.com",
      phone: "+1-555-321-7654",
      location: "Seattle, USA",
      total_purchases: 1455.75,
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
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <Sidebar dashboard="Customers" />
      </aside>

      <div className="p-4 sm:ml-64 h-screen">
        <div className="p-6 flex flex-wrap lg:flex-nowrap gap-4 lg:gap-8">
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl font-semibold">Customers</h1>
            <div className="mt-6 w-full">
              <CustomerTable customers={customers} />
            </div>
          </div>
          <CreateCustomer setCustomers={setCustomers} />
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
