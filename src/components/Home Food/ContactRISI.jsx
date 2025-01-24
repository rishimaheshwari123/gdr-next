import React, { useEffect } from "react";
import Navbar from "./Navbar";
import SubNavr from "../common/SubNavbar";
import ContactForm from "./RISIContactForm";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Footer from "../common/Footer";
import Devision from "../common/Devision";
import { Helmet } from "react-helmet";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Contact - SRS Home Food </title>
        <meta
          name="description"
          content="GDR Group 72: A dynamic conglomerate specializing in Agriculture, Dairy, Farm Land, and Commercial Property with a mission to drive growth in rural communities through innovation and sustainability"
        />
      </Helmet>
      <SubNavr />
      <Navbar />
      <div className="relative flex justify-center items-center w-full min-h-[40vh] -mt-2 bg-gradient-to-r bg-black">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/016/798/942/small_2x/contact-us-concept-business-man-consulting-customers-who-contact-us-call-center-service-customer-consulting-service-email-hotline-business-contact-digital-online-business-digital-service-photo.jpg)`,
          }}
        />
        <div className="absolute bottom-2 z-50 text-[#fff5f5] font-semibold text-5xl bg-[#e2571a] p-1 rounded-2xl">
          Contact Us
        </div>
      </div>
      <div className=" w-11/12 mx-auto mt-[40px] ">
        {/* Addres */}
        <div className=" text-center flex lg:justify-between gap-3 lg:gap-0 flex-wrap items-center justify-center">
          <div className=" lg:w-[28%] w-[60%]">
            <h3 className=" text-[#33536B] lg:text-3xl font-sans text-xl">
              Address
            </h3>
            <p className=" text-[#7c7c7c] lg:text-xl text-sm">
              Ratibad Bhopal,
            </p>
          </div>
          <div className=" lg:w-[28%] w-[60%]">
            <h3 className=" text-[#33536B] lg:text-3xl font-sans text-xl">
              Call Us
            </h3>
            <p className=" text-[#7c7c7c] lg:text-xl text-sm">+919893730005</p>
          </div>
          <div className=" lg:w-[28%] w-[60%]">
            <h3 className=" text-[#33536B] lg:text-3xl font-sans text-xl">
              Mail Us
            </h3>
            <p className=" text-[#7c7c7c] lg:text-xl text-sm">
              <a href="mailto:thebharatexporter@gmail.com">
                ruchir@gdrgroup72.com
              </a>
            </p>
          </div>
        </div>

        {/* Form */}
        <div>
          <div className="flex flex-col md:flex-row items-center justify-center mx-auto  py-12 px-4">
            {/* Left Side (Message Section) */}
            <div className="lg:w-[35%] md:w-[35%] w-full md:mr-8 mb-8 md:mb-0 text-center md:text-left">
              <h6 className="text-3xl font-bold text-[#df794d] font-sans italic mb-4">
                Send A Message
              </h6>
              <p className="text-4xl text-gray-600 mb-4 ">
                We will be in touch shortly. .
              </p>
              <p className="text-gray-600 mb-4">
                Any queries? Feel free to reach out to us
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="#"
                  className="text-5A5A5A hover:text-33536B transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="w-8 h-8 mx-2" />
                </a>
                <a
                  href="#"
                  className="text-5A5A5A hover:text-33536B transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="w-8 h-8 mx-2" />
                </a>
                <a
                  href="#"
                  className="text-5A5A5A hover:text-33536B transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-8 h-8 mx-2" />
                </a>
              </div>
            </div>

            {/* Right Side (Contact Form Section) */}
            <div className="lg:w-[70%] md:w-[70%] w-full md:ml-8 bg-white shadow-md rounded-lg lg:px-6 lg:py-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Devision />
      <Footer />
    </div>
  );
}

export default ContactUs;
