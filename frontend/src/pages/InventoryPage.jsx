import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import InventoryTable from '../components/InventoryTable';
import CreateProduct from '../components/CreateProduct';
import { useNavigate } from 'react-router-dom';

const initialInventory = [
  { product_id: "PROD001", name: "Wireless Mouse", category: "Accessories", stock: 50, price: 19.99 },
  { product_id: "PROD002", name: "Keyboard", category: "Accessories", stock: 35, price: 29.99 },
  { product_id: "PROD003", name: "Monitor", category: "Displays", stock: 20, price: 129.99 },
];

const InventoryPage = () => {
  const [inventory, setInventory] = useState(initialInventory);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/login');
  }, [navigate]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 -translate-x-full sm:block" aria-label="Sidebar">
        <Sidebar dashboard="Inventory" />
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-6 flex flex-wrap lg:flex-nowrap gap-4 lg:gap-8">
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl font-semibold mb-4">Inventory</h1>
            <InventoryTable inventory={inventory} setInventory={setInventory} />
          </div>
          <CreateProduct setInventory={setInventory} />
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
