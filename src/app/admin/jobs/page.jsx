"use client";
import AddGallery from "@/components/Admin/pages/AddGallery";
import JobOpening from "@/components/Admin/pages/JobOpening";
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
      <JobOpening />
    </div>
  );
};

export default page;
