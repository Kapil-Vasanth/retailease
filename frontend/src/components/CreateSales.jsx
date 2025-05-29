import React, { useState } from "react";

const CreateSales = ({ setSales }) => {
  const [form, setForm] = useState({
    date: "",
    product: "",
    quantity: "",
    amount: "",
    customer: "",
    payment_method: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSale = {
      sale_id: `S${Date.now().toString().slice(-5)}`, // simple unique ID
      date: form.date,
      product: form.product,
      quantity: parseInt(form.quantity),
      total_amount: parseFloat(form.amount),
      customer: form.customer,
      payment_method: form.payment_method,
    };

    setSales((prevSales) => [...prevSales, newSale]);

    // Reset form
    setForm({
      date: "",
      product: "",
      quantity: "",
      amount: "",
      customer: "",
      payment_method: "",
    });
  };

  return (
    <section className="bg-white dark:bg-gray-900 w-full">
      <div className="py-8 px-8 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Record a new sale
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="w-full">
              <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Sale Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={form.date}
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            <div className="w-full">
              <label htmlFor="product" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Product
              </label>
              <input
                type="text"
                name="product"
                id="product"
                value={form.product}
                onChange={handleChange}
                placeholder="Enter product name"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            <div className="w-full">
              <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                value={form.quantity}
                onChange={handleChange}
                placeholder="Enter quantity"
                min="1"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            <div className="w-full">
              <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Total Amount ($)
              </label>
              <input
                type="number"
                name="amount"
                id="amount"
                value={form.amount}
                onChange={handleChange}
                step="0.01"
                placeholder="Enter total amount"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="customer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Customer Name
              </label>
              <input
                type="text"
                name="customer"
                id="customer"
                value={form.customer}
                onChange={handleChange}
                placeholder="Enter customer name"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="payment_method" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Payment Method
              </label>
              <select
                id="payment_method"
                name="payment_method"
                value={form.payment_method}
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              >
                <option value="">Select payment method</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Cash">Cash</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            Add Sale
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateSales;
