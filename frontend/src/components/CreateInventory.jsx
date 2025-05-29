import React from "react";

const CreateInventory = () => {
  return (
    <section className="bg-white dark:bg-gray-900 w-full">
      <div className="py-8 px-8 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add New Inventory Item
        </h2>
        <form action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="sku"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                SKU
              </label>
              <input
                type="text"
                name="sku"
                id="sku"
                placeholder="Enter SKU"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="product_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                name="product_name"
                id="product_name"
                placeholder="Product Name"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Stock Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                placeholder="100"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="unit_price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Unit Price ($)
              </label>
              <input
                type="number"
                name="unit_price"
                id="unit_price"
                placeholder="19.99"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="reorder_level"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Reorder Threshold
              </label>
              <input
                type="number"
                name="reorder_level"
                id="reorder_level"
                placeholder="20"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Storage Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Aisle 4B"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700"
          >
            Add to Inventory
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateInventory;
