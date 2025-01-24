"use client";
import React, { useState } from "react";

import { saveNews } from "../../../redux/newsSlice";
const AllNews = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = async (newsId) => {
    const updatedNews = allNews.filter((news) => news._id !== newsId);
    dispatch(saveNews(updatedNews));
    await deleteNews(newsId, token);
  };

  const handleEdit = (newsId) => {
    console.log("Edit news item with ID:", newsId);
  };

  const truncateText = (text, wordLimit = 10) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNews = allNews.filter(
    (news) =>
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (news.slug && news.slug.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedNews = [...filteredNews].sort(
    (a, b) => new Date(b.publish) - new Date(a.publish)
  );

  return (
    <div className="p-8  ">
      <h6 className="text-2xl font-bold mb-4">All News</h6>
      <input
        type="text"
        placeholder="Search news..."
        value={searchTerm}
        onChange={handleSearch}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <div className="overflow-x-auto max-h-[70vh]">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedNews.map((news, index) => (
              <tr key={news._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {news.images && news.images.length > 0 && (
                    <img
                      className="h-10 w-10 rounded-full"
                      src={news.images[0].url}
                      alt={news.title}
                    />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                  {truncateText(news.title)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllNews;
