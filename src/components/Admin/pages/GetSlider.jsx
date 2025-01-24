import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const GetSlider = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [slider, setSlider] = useState([]);

  const getAllBlogs = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/hero/getAll`);

      if (response?.data?.success) {
        setSlider(response.data.sliders);
      }
      console.log(response.data.sliders);
    } catch (error) {
      console.log(error);
      console.log("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/hero/delete/${id}`);
      setSlider(slider.filter((event) => event._id !== id));
      if (res?.data?.success) {
        toast.success(res?.data?.message);
      }
    } catch (error) {
      console.log("Error in deleting product in front end");
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h6 className="text-2xl font-semibold mb-4">All Blogs</h6>
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
                Description
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {slider.length > 0 ? (
              slider.map((event, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={event.image}
                      alt=""
                      className="h-10 w-10 rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{event.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{event.desc}</div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(event._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrashAlt size={23} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-6 py-4 whitespace-nowrap" colSpan="5">
                  <p className="text-sm text-gray-500">No Slider available</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetSlider;
