import { useState } from "react";

const CreateOrder = ({ setOrders }) => {
    const [items, setItems] = useState([{ product: "", quantity: 1 }]);
  
    const [customer, setCustomer] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      items.forEach((item, index) => {
        if (!item.product || !item.quantity) return;
  
        const newOrder = {
          order_id: `ORD${Math.floor(Math.random() * 100000).toString().padStart(3, '0')}`,
          customer_name: customer || "Unknown",
          product: item.product,
          quantity: parseInt(item.quantity),
          total_price: parseFloat((item.quantity * 19.99).toFixed(2)), // Dummy price
          status: "Pending",
        };
  
        setOrders(prev => [...prev, newOrder]);
      });
  
      setItems([{ product: "", quantity: 1 }]);
      setCustomer("");
      setPaymentMethod("");
    };
  
    return (
      <form onSubmit={handleSubmit} className="w-full lg:w-1/2 bg-white p-4 lg:p-8 rounded shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Create Order</h2>
  
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-700">Customer</label>
          <input value={customer} onChange={e => setCustomer(e.target.value)} className="w-full p-2 rounded border" required />
        </div>
  
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-700">Items</label>
          {items.map((item, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                className="flex-1 p-2 rounded border"
                placeholder="Product"
                value={item.product}
                onChange={e => {
                  const updated = [...items];
                  updated[index].product = e.target.value;
                  setItems(updated);
                }}
                required
              />
              <input
                type="number"
                className="w-20 p-2 rounded border"
                value={item.quantity}
                min={1}
                onChange={e => {
                  const updated = [...items];
                  updated[index].quantity = e.target.value;
                  setItems(updated);
                }}
                required
              />
            </div>
          ))}
          <button type="button" onClick={() => setItems([...items, { product: "", quantity: 1 }])} className="text-blue-600 text-sm mt-1">
            + Add Item
          </button>
        </div>
  
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-700">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={e => setPaymentMethod(e.target.value)}
            className="w-full p-2 rounded border"
          >
            <option value="">Select method</option>
            <option>Credit Card</option>
            <option>PayPal</option>
            <option>Cash</option>
          </select>
        </div>
  
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit Order
        </button>
      </form>
    );
  };
  
  export default CreateOrder;
  