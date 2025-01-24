"use client";
import AddProduct from "@/components/Admin/pages/AddProduct";
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
      <AddProduct />
    </div>
  );
};

export default page;
