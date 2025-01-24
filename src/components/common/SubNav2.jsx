import React, { useState } from "react";
import logo from "../../assests/logos/gdrgruop.jpg";
import Modal from "../core/contact/Modal";

const SubNav2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleModal();
  };
  return (
    <div>
      <nav className=" hidden lg:flex lg:items-center lg:justify-between max-w-7xl mx-auto p-4 bg-white border-b">
        <div className="flex items-center ">
          <img src={logo} alt="Logo" className="h-12 w-24 mr-2" />
          <span className="font-bold text-lg text-blue-900">GDR Group</span>
        </div>

        <div className="flex items-center space-x-6">
          <button className="relative overflow-hidden bg-red-600 text-white py-2 px-5 text-xl rounded shadow-lg transition-all duration-300 ease-in-out before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-yellow-700 before:z-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:text-white">
            <span className="relative z-10" onClick={handleSubmit}>
             Enquiry 
            </span>
          </button>
        </div>
      </nav>
      <Modal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default SubNav2;
