import { apiConnector } from "../apiConnector";
import { admin } from "../api";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const {
  CREATE_GALLERY,
  CREATE_PRODUCT,
  GET_ALL_PRODUCT,
  IMAGE_UPLOAD,
  DELETE_PRODUCT,
} = admin;

export const imageUpload = async (data, token) => {
  let result = [];
  const toastId = Swal.fire({
    title: "Loading...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    const formData = new FormData();
    for (let i = 0; i < data.length; i++) {
      formData.append("thumbnail", data[i]);
    }

    const response = await apiConnector("POST", IMAGE_UPLOAD, formData, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });

    if (!response?.data?.success) {
      throw new Error("Could Not Add Image Details");
    }

    Swal.fire({
      icon: "success",
      title: "Image Details Added Successfully",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });

    result = response?.data?.images;
  } catch (error) {
    console.log("CREATE IMAGE API ERROR............", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
    });
  } finally {
    Swal.close(toastId);
  }

  return result;
};

export const createGallery = async (data, token) => {
  let swalLoadingInstance;

  Swal.fire({
    title: "Loading...",
    allowOutsideClick: false,
    didOpen: () => {
      swalLoadingInstance = Swal.showLoading();
    },
  });

  try {
    const response = await apiConnector("POST", CREATE_GALLERY, data);

    console.log("CREATE gallery API RESPONSE............", response);

    if (!response?.data?.success) {
      throw new Error("Could Not Add Gallery Details");
    }

    Swal.fire({
      icon: "success",
      title: "Gallery Added Successfully",
    });
  } catch (error) {
    console.log("CREATE Gallery API ERROR............", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error?.response?.data?.message,
    });
  } finally {
    if (swalLoadingInstance) {
      Swal.close();
    }
  }
};
export const createProduct = async (data) => {
  let swalLoadingInstance;

  Swal.fire({
    title: "Loading...",
    allowOutsideClick: false,
    didOpen: () => {
      swalLoadingInstance = Swal.showLoading();
    },
  });

  try {
    const response = await apiConnector("POST", CREATE_PRODUCT, data);

    console.log("CREATE product  API RESPONSE............", response);

    if (!response?.data?.success) {
      throw new Error("Could Not Add Product Details");
    }

    Swal.fire({
      icon: "success",
      title: "Product  Added Successfully",
    });
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error?.response?.data?.message,
    });
  } finally {
    if (swalLoadingInstance) {
      Swal.close();
    }
  }
};

export const getProducts = async () => {
  const result = [];
  try {
    const response = await apiConnector("GET", GET_ALL_PRODUCT);
    if (!response?.data?.success) {
      throw new Error(response?.data?.message);
    }
    return response.data.products || result;
  } catch (error) {
    console.error(error);
    toast.error(error.message || "Something went wrong");
    return result;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await apiConnector("DELETE", `${DELETE_PRODUCT}/${id}`);
    if (!response?.data?.success) {
      throw new Error(response?.data?.message || "Failed to delete product");
    }
    toast.success(response.data.message);
    return true;
  } catch (error) {
    console.error("Error deleting product:", error);
    toast.error(error.message || "Failed to delete the product");
    return false;
  }
};
