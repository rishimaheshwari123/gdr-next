"use client";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SingleBlog = () => {
  const [singleBlog, setSingleBlog] = useState(null);
  const { id } = useParams();

  const getSingleBlog = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/blog/get/${id}`
      );
      console.log(response);
      if (response?.data?.success) {
        setSingleBlog(response.data.blog);
      } else {
        throw new Error(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleBlog(id);
  }, [id]);

  const formatDescription = (desc) => {
    if (!desc) return "";
    const words = desc.split(" ");
    return words.reduce((acc, word, index) => {
      if ((index + 1) % 80 === 0) {
        return acc + word + "<br /><br />";
      }
      return acc + word + " ";
    }, "");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {singleBlog ? (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={singleBlog.image}
            alt={singleBlog.title}
            className="flex justify-center items-center  object-cover mx-auto"
          />
          <div className="p-6">
            <h6 className="text-3xl font-bold mb-2">{singleBlog.title}</h6>
            <br />
            <p dangerouslySetInnerHTML={{ __html: singleBlog?.desc }}></p>

            <br />
            <Link
              href="/news"
              className="bg-orange-500 px-8 w-fit py-4 rounded-md flex m-auto text-white text-xl"
            >
              Back To Blog
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No blog found</p>
      )}
    </div>
  );
};

export default SingleBlog;
