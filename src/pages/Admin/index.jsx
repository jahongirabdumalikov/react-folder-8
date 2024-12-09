import React, { useState } from 'react';
import { apiClient } from '../../API/axios';

const Admin = () => {
    const [productInfo, setproductInfo] = useState({
        description: "",
        image: "",
        inStock: "",
        name: "",
        price: "",
        reating: "",
    });

    const handIeSumbit = async (e) => {
        e.preventDefault();
        console.log(e);

        try {
            const res = await apiClient.post("/products", productInfo);
            console.log(res);
            setproductInfo({
                description: "",
                image: "",
                inStock: "",
                name: "",
                price: "",
                reating: "",
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-700">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Add New Product</h1>
                <form className="flex flex-col gap-4" onSubmit={handIeSumbit}>
                    <input
                        type="text"
                        value={productInfo.description}
                        placeholder="Description"
                        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                        onChange={(e) =>
                            setproductInfo((prev) => ({ ...prev, description: e.target.value }))
                        }
                    />
                    <input
                        type="text"
                        value={productInfo.image}
                        placeholder="Image URL"
                        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                        onChange={(e) =>
                            setproductInfo((prev) => ({ ...prev, image: e.target.value }))
                        }
                    />
                    <input
                        type="text"
                        value={productInfo.inStock}
                        placeholder="In Stock"
                        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                        onChange={(e) =>
                            setproductInfo((prev) => ({ ...prev, inStock: e.target.value }))
                        }
                    />
                    <input
                        type="text"
                        value={productInfo.name}
                        placeholder="Product Name"
                        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                        onChange={(e) =>
                            setproductInfo((prev) => ({ ...prev, name: e.target.value }))
                        }
                    />
                    <input
                        type="text"
                        value={productInfo.price}
                        placeholder="Price"
                        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                        onChange={(e) =>
                            setproductInfo((prev) => ({ ...prev, price: e.target.value }))
                        }
                    />
                    <input
                        type="text"
                        value={productInfo.reating}
                        placeholder="Rating"
                        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                        onChange={(e) =>
                            setproductInfo((prev) => ({ ...prev, reating: e.target.value }))
                        }
                    />
                    <button
                        type="submit"
                        className="p-3 text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-md hover:shadow-lg hover:from-purple-600 hover:to-indigo-700 focus:ring-4 focus:ring-purple-400 focus:outline-none transition-all"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Admin;
