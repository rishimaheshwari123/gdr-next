"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import BlogPopup from "../../../app/admin/getBlog/EditComponetBlog";

const GetBlog = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [blog, setBlogs] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  // Open the modal with the selected blog ID (for editing)
  const openModal = (blogId) => {
    setSelectedBlogId(blogId);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlogId(null); // Reset selectedBlogId
  };

  const getAllBlogs = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/blog/getAll`);

      if (response?.data?.success) {
        setBlogs(response.data.blogs);
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/blog/delete/${id}`);
      setBlogs(blog.filter((event) => event._id !== id));
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

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">All Blogs</h2>
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
                Created At
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blog.length > 0 ? (
              blog.map((event, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={event.image}
                      alt=""
                      className="h-10 w-10 rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{event.title}</div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{event?.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {formatDate(event.createdAt)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={() => handleDelete(event._id)}
                        className="text-red-600 hover:text-red-800 transition-colors duration-200"
                      >
                        <FaTrashAlt size={23} />
                      </button>
                      <button
                        onClick={() => openModal(event._id)}
                        className="text-green-600 hover:text-green-800 transition-colors duration-200"
                      >
                        <FaEdit size={23} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-6 py-4 whitespace-nowrap" colSpan="5">
                  <p className="text-sm text-gray-500">No Blog available</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {isModalOpen && (
          <BlogPopup
            isOpen={isModalOpen}
            blogId={selectedBlogId}
            onClose={closeModal}
            getAllBlogs={getAllBlogs}
          />
        )}
      </div>
    </div>
  );
};

export default GetBlog;
