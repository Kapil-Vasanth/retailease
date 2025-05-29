import React, { useState } from "react";

const CreateProduct = ({ setInventory }) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      product_id: `PROD${Math.floor(Math.random() * 100000).toString().padStart(3, '0')}`,
      name,
      category,
      stock: 0,
      price: parseFloat(price),
    };

    setInventory((prev) => [...prev, newProduct]);

    // Clear form fields
    setName("");
    setBrand("");
    setPrice("");
    setCategory("");
    setWeight("");
    setDescription("");
  };

  return (
    <section className="bg-white dark:bg-gray-900 w-full">
      <div className="py-8 px-8 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new product
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Type product name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="w-full">
              <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Brand
              </label>
              <input
                type="text"
                id="brand"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Product brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>

            <div className="w-full">
              <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Price
              </label>
              <input
                type="number"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="$2999"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Category
              </label>
              <select
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select category</option>
                <option value="TV">TV/Monitors</option>
                <option value="PC">PC</option>
                <option value="GA">Gaming/Console</option>
                <option value="PH">Phones</option>
              </select>
            </div>

            <div>
              <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Item Weight (kg)
              </label>
              <input
                type="number"
                id="item-weight"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="12"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <textarea
                id="description"
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Your description here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
          >
            Add product
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateProduct;
