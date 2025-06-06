"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const BlogPopup = ({ isOpen, blogId, onClose, getAllBlogs }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const [editorHtml, setEditorHtml] = useState("");
  const maxWords = 3000; // Maximum allowed words
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    type: "",
    image: "",
  });

  const getSingleBlog = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/blog/get/${id}`
      );
      if (response?.data?.success) {
        console.log(response.data.blog);
        setFormData({
          title: response.data.blog.title,

          type: response.data.blog.type,
          image: response.data.blog.image,
        });
        setEditorHtml(response.data.blog.desc);
      } else {
        throw new Error(response?.data?.message);
      }
    } catch (error) {
      toast.error("Error in getting details about single blog");
    }
  };

  useEffect(() => {
    getSingleBlog(blogId);
  }, [isOpen, blogId]);

  // Fetch blog details if blogId is passed and the modal is open

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChangeDes = (html) => {
    const text = html.replace(/<[^>]*>?/gm, ""); // Strip HTML tags
    const wordCount = text.split(/\s+/).length;

    if (wordCount <= maxWords) {
      setEditorHtml(html);
    } else {
      alert(`You cannot exceed ${maxWords} words.`);
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      Swal.fire({
        title: "Loading",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
      });

      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("desc", editorHtml);
      formDataToSend.append("type", formData.type);
      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      const response = blogId
        ? await axios.put(`${BASE_URL}/blog/${blogId}`, formDataToSend, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        : await axios.post(`${BASE_URL}/blog/create`, formDataToSend, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

      Swal.close();

      if (response?.data?.success) {
        getAllBlogs();
        Swal.fire({
          title: `Blog ${blogId ? "updated" : "created"} successfully!`,
          text: `Have a nice day!`,
          icon: "success",
        });
        onClose(); // Close the popup after successful submission
      }
    } catch (error) {
      console.log(error);
      Swal.close();
      toast.error("Oops, something went wrong!");
    }
  };

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center`}
    >
      <div className="bg-white p-8 rounded-lg shadow-xl w-full md:w-3/4 lg:w-1/2 h-[95%] overflow-scroll py-6">
        <h6 className="text-blue-600 text-center text-2xl md:text-3xl border-b-2 border-blue-600 pb-2">
          {blogId ? "Edit Blog" : "Add Blog"}
        </h6>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg md:text-xl font-bold mb-2"
              htmlFor="title"
            >
              Title: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2 col-span-2">
            <label
              htmlFor="description"
              className="block text-gray-700 text-lg md:text-xl font-bold mb-2"
            >
              Description *
            </label>
            <ReactQuill
              theme="snow"
              value={editorHtml}
              onChange={handleChangeDes}
              modules={{
                toolbar: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [{ size: ["small", false, "large", "huge"] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                  ],
                  ["clean"],
                ],
              }}
              className="quill-editor bg-white"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg md:text-xl font-bold mb-2"
              htmlFor="image"
            >
              Image:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
              id="image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <div className="flex items-center justify-center md:justify-start">
            <button
              className="px-6 py-2 bg-black text-white rounded-md text-base md:text-lg hover:bg-gray-800 transition"
              type="submit"
            >
              {blogId ? "Update Blog" : "Create Blog"}
            </button>
          </div>
        </form>
        <button
          className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-md text-base hover:bg-gray-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BlogPopup;
