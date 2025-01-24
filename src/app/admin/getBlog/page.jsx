"use client";
import GetBlog from "@/components/Admin/pages/GetBlogs";
import React, { useEffect, useState } from "react";

const page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div>
      <GetBlog />
    </div>
  );
};

export default page;
