"use client";
import AddBlog from "@/components/Admin/pages/AddBlog";
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
      <AddBlog />
    </div>
  );
};

export default page;
