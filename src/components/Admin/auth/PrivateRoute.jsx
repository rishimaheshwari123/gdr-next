"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function PrivateRoute({ children }) {
  const { token } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  if (!token) {
    return null; // Render nothing while redirecting
  }

  return children;
}

export default PrivateRoute;
