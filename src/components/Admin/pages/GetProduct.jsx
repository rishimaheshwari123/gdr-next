import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { getProducts, deleteProduct } from "../../../services/operation/admin"; // Import both functions

const GetProduct = () => {
  const [product, setProduct] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProduct(response);
      console.log(response);
    } catch (error) {
      console.log(error);
      console.error("Error fetching posts:", error);
    }
  };

  const handleDelete = async (id) => {
    const isDeleted = await deleteProduct(id);
    if (isDeleted) {
      setProduct(product.filter((item) => item._id !== id));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h6 className="text-2xl font-semibold mb-4">All Products</h6>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {product.length > 0 ? (
              product.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={item.images[0]?.url}
                      alt=""
                      className="h-10 w-10 rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{item.title}</div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrashAlt size={23} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-6 py-4 text-center" colSpan="4">
                  <p className="text-sm text-gray-500">No products available</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetProduct;
