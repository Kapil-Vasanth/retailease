import React, { useState } from "react";

const CreateCustomer = ({ setCustomers }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCustomer = {
      customer_id: `CUST${Date.now().toString().slice(-5)}`, // simple unique ID
      name: form.name,
      email: form.email,
      phone: form.phone,
      location: form.location,
      total_purchases: 0, // default to 0 since no input for it
    };

    setCustomers((prev) => [...prev, newCustomer]);

    // reset form
    setForm({
      name: "",
      email: "",
      phone: "",
      location: "",
    });
  };

  return (
    <section className="bg-white dark:bg-gray-900 w-full">
      <div className="py-8 px-8 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new customer
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Customer name"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1-555-123-4567"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="City, Country"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={form.location}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
          >
            Add Customer
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateCustomer;
