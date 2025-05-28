"use client";
import { useState } from "react";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Swal from "sweetalert2";
import { apiConnector } from "../services/apiConnector";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  User,
  Building,
  Send,
  Star,
  Trophy,
  Target,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const BecomeSeller = ({
  service,
  subject="DEALERSHIP OR SUB DELAERSHIP",
  mapUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3668.196516107796!2d77.27105677531803!3d23.16302667907558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA5JzQ2LjkiTiA3N8KwMTYnMjUuMSJF!5e0!3m2!1sen!2sin!4v1724832538455!5m2!1sen!2sin",
  stats = {
    projects: "1,000+",
    successScore: "99%",
    rating: "4.9/5.0",
  },
}) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: service,
    location: "",
    message: "",
    subject: subject,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Sending your request...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#fff",
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const res = await apiConnector(
        "POST",
        `${BASE_URL}/auth/getQuotes`,
        formData
      );
      console.log(res);
      Swal.fire({
        title: "Request Sent Successfully!",
        text: "We'll get back to you soon. Have a great day!",
        icon: "success",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        confirmButtonColor: "#10b981",
      });

      //   setFormData({
      //     name: "",
      //     email: "",
      //     mobile: "",
      //             location: "",
      //     message: ""
      //   })
    } catch (error) {
      console.error("ERROR MESSAGE - ", error);
      Swal.fire({
        title: "Request Failed",
        text:
          error.response?.data?.message ||
          "Something went wrong, please try again later",
        icon: "error",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const statsData = [
    {
      icon: Target,
      value: stats.projects,
      label: "Projects Completed",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Trophy,
      value: stats.successScore,
      label: "Success Rate",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Star,
      value: stats.rating,
      label: "Client Rating",
      color: "from-blue-400 to-purple-500",
    },
  ];

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 0.8, 1],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute -bottom-1/4 -left-1/4 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <motion.div variants={itemVariants} className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block mb-8"
          >
            <div className="relative w-80 h-48 mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://i.ytimg.com/vi/kBkIa6GxqzU/maxresdefault.jpg"
                alt="Company Overview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-4 right-4"
              >
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4"
          >
            Get Your Free Quote Today
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Transform your vision into reality with our expert services. Let's
            discuss your project requirements.
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Visit Our Location</h3>
                </div>
              </div>
              <div className="relative">
                <iframe
                  src={mapUrl}
                  className="w-full h-96 lg:h-[500px]"
                  title="Company Location"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-4 left-4 bg-red-500 text-white p-2 rounded-full shadow-lg"
                >
                  <MapPin className="w-4 h-4" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-red-500 to-pink-500 text-white text-center">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="inline-block mb-2"
                >
                  <Phone className="w-8 h-8" />
                </motion.div>
                <h2 className="text-2xl font-bold mb-2">
                  Request a Call Back!
                </h2>
                <h3 className="text-3xl font-bold mb-2">
                  {subject}
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </motion.div>

                  {/* Mobile Field */}
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="WhatsApp Mobile Number"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </motion.div>

                  {/* Location Field */}
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                    <input
                      type="text"
                      name="location"
                      placeholder="Your City"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </motion.div>
                </div>

                {/* Service Selection */}
                {/* <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative group"
                >
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                  >
                    <option value="">Select Service</option>
                    {services.map(service => (
                      <option key={service.id} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </motion.div> */}

                {/* Message Field */}
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative group"
                >
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <textarea
                    name="message"
                    placeholder="Please describe your requirements (minimum 20 characters)"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={20}
                    rows={4}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                  />
                </motion.div>

                {/* Captcha */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border-2 border-gray-200"
                >
                  <input
                    type="checkbox"
                    required
                    className="w-5 h-5 text-blue-500"
                  />
                  <span className="text-gray-700">I'm not a robot</span>
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        variants={itemVariants}
        className="max-w-7xl mx-auto px-4 pb-16"
      >
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`bg-gradient-to-br ${stat.color} text-white p-8 rounded-2xl shadow-xl text-center relative overflow-hidden group cursor-pointer`}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"
              />
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="inline-block mb-4"
              >
                <stat.icon className="w-12 h-12 mx-auto" />
              </motion.div>
              <motion.h3
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: index * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
                className="text-4xl font-bold mb-2"
              >
                {stat.value}
              </motion.h3>
              <p className="text-lg font-medium opacity-90">{stat.label}</p>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-white/30"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
              />
            </motion.div>
          ))}
        </div> */}
      </motion.div>
    </motion.div>
  );
};

export default BecomeSeller;
