import React, { useState } from "react";

const CreatePurchase = ({ purchases, setPurchases }) => {
  const [items, setItems] = useState([{ product: "", quantity: 1, unitPrice: 0 }]);

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] =
      field === "quantity" || field === "unitPrice" ? Number(value) : value;
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    setItems([...items, { product: "", quantity: 1, unitPrice: 0 }]);
  };

  const handleRemoveItem = (index) => {
    if (items.length === 1) return;
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new purchase object with a unique id and today's date
    const newPurchase = {
      id: `PUR${(purchases.length + 1).toString().padStart(3, "0")}`,
      date: new Date().toISOString().split("T")[0], // YYYY-MM-DD
      items: items,
    };

    // Update purchases state
    setPurchases([...purchases, newPurchase]);

    // Reset form
    setItems([{ product: "", quantity: 1, unitPrice: 0 }]);
  };

  return (
    <section className="bg-white dark:bg-gray-900 w-full">
      <div className="py-8 px-8 mx-auto max-w-3xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Create Purchase
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end border-b pb-4"
              >
                <div className="col-span-1 sm:col-span-2">
                  <label
                    htmlFor={`product-${index}`}
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Name
                  </label>
                  <input
                    id={`product-${index}`}
                    type="text"
                    value={item.product}
                    onChange={(e) =>
                      handleItemChange(index, "product", e.target.value)
                    }
                    required
                    className="w-full p-2.5 rounded-lg bg-gray-50 border border-gray-300 text-sm text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor={`quantity-${index}`}
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Quantity
                  </label>
                  <input
                    id={`quantity-${index}`}
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleItemChange(index, "quantity", e.target.value)
                    }
                    min={1}
                    required
                    className="w-full p-2.5 rounded-lg bg-gray-50 border border-gray-300 text-sm text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor={`unitPrice-${index}`}
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Unit Price ($)
                  </label>
                  <input
                    id={`unitPrice-${index}`}
                    type="number"
                    value={item.unitPrice}
                    onChange={(e) =>
                      handleItemChange(index, "unitPrice", e.target.value)
                    }
                    min={0}
                    required
                    className="w-full p-2.5 rounded-lg bg-gray-50 border border-gray-300 text-sm text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div className="sm:col-span-4 text-right">
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(index)}
                    className="text-sm text-red-500 hover:underline"
                    aria-label={`Remove item ${index + 1}`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddItem}
              className="mt-2 text-blue-600 hover:underline text-sm"
            >
              + Add Another Item
            </button>
          </div>

          <button
            type="submit"
            className="mt-6 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
          >
            Save Purchase
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePurchase;
