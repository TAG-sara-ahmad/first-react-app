import React, { useState } from "react";

function AddProductModal({ showPopup, dispatch, setShowPopup }) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Add New Product</h3>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: +e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Description"
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Image URL"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end gap-2 mt-5">
              <button
                className="px-4 py-2 rounded border border-gray-400 text-gray-600 hover:bg-gray-100 transition"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>

              <button
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                onClick={() => {
                  if (!newProduct.name || !newProduct.price) {
                    alert("Please enter name and price");
                    return;
                  }
                  dispatch({
                    type: "ADD",
                    payload: {
                      ...newProduct,
                      id: Date.now().toString(),
                      quantity: 1,
                    },
                  });
                  setShowPopup(false);
                  setNewProduct({
                    id: "",
                    name: "",
                    price: "",
                    description: "",
                    image: "",
                  });
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddProductModal;
