"use client"
import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Swal from "sweetalert2"
import { apiConnector } from "../services/apiConnector"
import Image from "next/image"
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  User,
  Building,
  Send,
  Star,
  CheckCircle,
  Sparkles,
  Store,
  CreditCard,
  Calendar,
} from "lucide-react"

const BecomeSeller = ({
  service,
  subject = "DEALERSHIP OR SUB DEALERSHIP",
  mapUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3668.196516107796!2d77.27105677531803!3d23.16302667907558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA5JzQ2LjkiTiA3N8KwMTYnMjUuMSJF!5e0!3m2!1sen!2sin!4v1724832538455!5m2!1sen!2sin",
  stats = {
    projects: "1,000+",
    successScore: "99%",
    rating: "4.9/5.0",
  },
}) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Seller form data
  const [sellerFormData, setSellerFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    mobile: "",
    businessType: "",
    experience: "",
    location: "",
    description: "",
  })

  // Subject form data
  const [subjectFormData, setSubjectFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: service,
    location: "",
    message: "",
    subject: subject,
    budget: "",
    timeline: "",
  })

  const [isSubmittingSeller, setIsSubmittingSeller] = useState(false)
  const [isSubmittingSubject, setIsSubmittingSubject] = useState(false)

  const handleSellerChange = (e) => {
    const { name, value } = e.target
    setSellerFormData({ ...sellerFormData, [name]: value })
  }

  const handleSubjectChange = (e) => {
    const { name, value } = e.target
    setSubjectFormData({ ...subjectFormData, [name]: value })
  }

  const handleSellerSubmit = async (e) => {
    e.preventDefault()
    setIsSubmittingSeller(true)

    Swal.fire({
      title: "Registering as seller...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#fff",
      didOpen: () => {
        Swal.showLoading()
      },
    })

    try {
      const res = await apiConnector("POST", `${BASE_URL}/auth/registerSeller`, sellerFormData)
      console.log(res)
      Swal.fire({
        title: "Seller Registration Successful!",
        text: "Welcome to our seller network! We'll contact you soon.",
        icon: "success",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        confirmButtonColor: "#10b981",
      })
    } catch (error) {
      console.error("ERROR MESSAGE - ", error)
      Swal.fire({
        title: "Registration Failed",
        text: error.response?.data?.message || "Something went wrong, please try again later",
        icon: "error",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        confirmButtonColor: "#ef4444",
      })
    } finally {
      setIsSubmittingSeller(false)
    }
  }

  const handleSubjectSubmit = async (e) => {
    e.preventDefault()
    setIsSubmittingSubject(true)

    Swal.fire({
      title: "Sending your request...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#fff",
      didOpen: () => {
        Swal.showLoading()
      },
    })

    try {
      const res = await apiConnector("POST", `${BASE_URL}/auth/getQuotes`, subjectFormData)
      console.log(res)
      Swal.fire({
        title: "Request Sent Successfully!",
        text: "We'll get back to you soon. Have a great day!",
        icon: "success",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        confirmButtonColor: "#10b981",
      })
    } catch (error) {
      console.error("ERROR MESSAGE - ", error)
      Swal.fire({
        title: "Request Failed",
        text: error.response?.data?.message || "Something went wrong, please try again later",
        icon: "error",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        confirmButtonColor: "#ef4444",
      })
    } finally {
      setIsSubmittingSubject(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

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
            Join Our Network & Get Services
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
            Become a seller or request our services. Transform your business with our expert network.
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content - Two Forms Side by Side */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Seller Registration Form */}
      { subject !=="On demand construction" &&   <motion.div variants={itemVariants}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-center">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="inline-block mb-2"
                >
                  <Store className="w-8 h-8" />
                </motion.div>
                <h2 className="text-2xl font-bold mb-2">Become a Seller</h2>
                <p className="text-green-100">Join our seller network today!</p>
              </div>

              <form onSubmit={handleSellerSubmit} className="p-8 space-y-6">
                <div className="grid gap-1">
                  {/* Business Name */}
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                    <input
                      type="text"
                      name="businessName"
                      placeholder="Business Name"
                      value={sellerFormData.businessName}
                      onChange={handleSellerChange}
                      required
                      className="w-full pl-12 pr-4 py-1 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </motion.div>

                  {/* Owner Name */}
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                    <input
                      type="text"
                      name="ownerName"
                      placeholder="Owner Name"
                      value={sellerFormData.ownerName}
                      onChange={handleSellerChange}
                      required
                      className="w-full pl-12 pr-4 py-1 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Business Email"
                      value={sellerFormData.email}
                      onChange={handleSellerChange}
                      required
                      className="w-full pl-12 pr-4 py-1 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </motion.div>

                  {/* Mobile */}
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Contact Number"
                      value={sellerFormData.mobile}
                      onChange={handleSellerChange}
                      required
                      className="w-full pl-12 pr-4 py-1 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </motion.div>

                  {/* Business Type */}
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                    <select
                      name="businessType"
                      value={sellerFormData.businessType}
                      onChange={handleSellerChange}
                      required
                      className="w-full pl-12 pr-4 py-1 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Select Business Type</option>
                      <option value="manufacturer">Manufacturer</option>
                      <option value="distributor">Distributor</option>
                      <option value="retailer">Retailer</option>
                      <option value="service-provider">Service Provider</option>
                      <option value="consultant">Consultant</option>
                    </select>
                  </motion.div>

                  {/* Experience */}
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                    <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                    <select
                      name="experience"
                      value={sellerFormData.experience}
                      onChange={handleSellerChange}
                      required
                      className="w-full pl-12 pr-4 py-1 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Years of Experience</option>
                      <option value="0-1">0-1 Years</option>
                      <option value="2-5">2-5 Years</option>
                      <option value="6-10">6-10 Years</option>
                      <option value="10+">10+ Years</option>
                    </select>
                  </motion.div>

                  {/* Location */}
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                    <input
                      type="text"
                      name="location"
                      placeholder="Business Location"
                      value={sellerFormData.location}
                      onChange={handleSellerChange}
                      required
                      className="w-full pl-12 pr-4 py-1 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </motion.div>

                  {/* Description */}
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                    <textarea
                      name="description"
                      placeholder="Describe your business and services"
                      value={sellerFormData.description}
                      onChange={handleSellerChange}
                      required
                      rows={4}
                      className="w-full pl-12 pr-4 py-1 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                    />
                  </motion.div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmittingSeller}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-1 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmittingSeller ? (
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
                      <Store className="w-5 h-5" />
                    )}
                    {isSubmittingSeller ? "Registering..." : "Register as Seller"}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>}

          {/* Right Side - Subject Specific Form */}
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
                <h2 className="text-2xl font-bold mb-2">Request a Call Back!</h2>
                <h3 className="text-xl font-bold mb-2">{subject}</h3>
              </div>

              <form onSubmit={handleSubjectSubmit} className="p-8 space-y-6">
                <div className="grid gap-1">
                  {/* Name */}
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      value={subjectFormData.name}
                      onChange={handleSubjectChange}
                      required
                      className="w-full pl-12 pr-4 py-1 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                      value={subjectFormData.email}
                      onChange={handleSubjectChange}
                      required
                      className="w-full pl-12 pr-4 py-1 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </motion.div>

                  {/* Mobile */}
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="WhatsApp Mobile Number"
                      value={subjectFormData.mobile}
                      onChange={handleSubjectChange}
                      required
                      className="w-full pl-12 pr-4 py-1 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </motion.div>

                  {/* Location */}
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                    <input
                      type="text"
                      name="location"
                      placeholder="Your City"
                      value={subjectFormData.location}
                      onChange={handleSubjectChange}
                      required
                      className="w-full pl-12 pr-4 py-1 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </motion.div>

                  {/* Budget */}
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                    <select
                      name="budget"
                      value={subjectFormData.budget}
                      onChange={handleSubjectChange}
                      className="w-full pl-12 pr-4 py-1 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="under-50k">Under ₹50,000</option>
                      <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                      <option value="1l-5l">₹1,00,000 - ₹5,00,000</option>
                      <option value="5l-10l">₹5,00,000 - ₹10,00,000</option>
                      <option value="above-10l">Above ₹10,00,000</option>
                    </select>
                  </motion.div>

                  {/* Timeline */}
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                    <select
                      name="timeline"
                      value={subjectFormData.timeline}
                      onChange={handleSubjectChange}
                      className="w-full pl-12 pr-4 py-1 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Project Timeline</option>
                      <option value="immediate">Immediate (Within 1 week)</option>
                      <option value="1-month">Within 1 Month</option>
                      <option value="3-months">Within 3 Months</option>
                      <option value="6-months">Within 6 Months</option>
                      <option value="flexible">Flexible Timeline</option>
                    </select>
                  </motion.div>

                  {/* Message */}
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                    <textarea
                      name="message"
                      placeholder="Please describe your requirements (minimum 20 characters)"
                      value={subjectFormData.message}
                      onChange={handleSubjectChange}
                      required
                      minLength={20}
                      rows={4}
                      className="w-full pl-12 pr-4 py-1 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                    />
                  </motion.div>
                </div>

                {/* Captcha */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border-2 border-gray-200"
                >
                  <input type="checkbox" required className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">I'm not a robot</span>
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmittingSubject}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-1 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmittingSubject ? (
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
                    {isSubmittingSubject ? "Sending..." : "Submit Request"}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default BecomeSeller
