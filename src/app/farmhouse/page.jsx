"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { Dialog } from "@headlessui/react"
import { BuyPlot } from "@/services/operation/payment"
import {
  FaRulerCombined,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCheckCircle,
  FaTimesCircle,
  FaFileDownload,
  FaMapMarkerAlt,
} from "react-icons/fa"
import { MdLocationOn, MdOutlineHouse } from "react-icons/md"
import { BsCalendarCheck, BsCreditCard } from "react-icons/bs"
import { generateReceipt } from "./receipt-generator"

function FarmhousePlotView() {
  const [farmhouses, setFarmhouses] = useState([])
  const [selectedPlot, setSelectedPlot] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
  })
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState({})
  const [bookingInProgress, setBookingInProgress] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [bookingDetails, setBookingDetails] = useState(null)

  const getAllFarmhousesWithPlots = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/formhouse/farmhouses-with-plots`)
      if (res.data.success) {
        console.log(res.data.data)
        setFarmhouses(res.data.data)
      }
    } catch (err) {
      toast.error("Error fetching farmhouse data")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllFarmhousesWithPlots()
  }, [])

  const openModal = (plot) => {
    if (plot.isBooked) return
    setSelectedPlot(plot)
    setFormData({ name: "", email: "", phone: "", state: "", city: "" })
    setErrors({})
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setSelectedPlot(null)
  }

  const closeSuccessModal = () => {
    setShowSuccessModal(false)
    setBookingDetails(null)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits"
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required"
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

const handleBooking = async () => {
    if (!validateForm()) return

    setBookingInProgress(true)

    try {
        const randomId = Math.floor(100000 + Math.random() * 900000)

        await BuyPlot(
            formData.name,
            formData.email,
            formData.phone,
            selectedPlot._id,
            10000,
            randomId,
            formData.state,
            formData.city,
            () => {
                // ✅ Only runs if payment is verified
                const farmhouse = farmhouses.find((farm) =>
                    farm.plots.some((plot) => plot._id === selectedPlot._id)
                )

                const details = {
                    userName: formData.name,
                    userEmail: formData.email,
                    userPhone: formData.phone,
                    farmhouseName: farmhouse?.name || "Farmhouse Estate",
                    farmhouseLocation: farmhouse?.location || "Premium Location",
                    plotSize: selectedPlot.size,
                    amount: 10000,
                    bookingId: randomId,
                    bookingDate: new Date().toLocaleDateString(),
                    state: formData.state,
                    city: formData.city,
                }

                setBookingDetails(details)
                closeModal()
                setShowSuccessModal(true)
                getAllFarmhousesWithPlots()
                toast.success("Land booking successful!")
            }
        )
    } catch (err) {
        toast.error("Failed to book the plot. Please try again.")
    } finally {
        setBookingInProgress(false)
    }
}


  const downloadReceipt = () => {
    if (bookingDetails) {
      generateReceipt(bookingDetails)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading farmhouses...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-3 flex items-center">
          <MdOutlineHouse className="mr-2 text-green-600" size={28} />
          Farmhouses & Available Lands
        </h1>

        {farmhouses.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-600">No farmhouses available at the moment.</p>
          </div>
        ) : (
          farmhouses.map((farm) => (
            <div
              key={farm._id}
              className="mb-8 border rounded-lg p-5 bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center">{farm.name}</h2>
                <div className="flex items-center mt-2 md:mt-0 text-gray-600">
                  <MdLocationOn className="text-red-500 mr-1" size={20} />
                  <span>{farm.location}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {farm.plots.map((plot) => (
                  <div
                    key={plot._id}
                    onClick={() => openModal(plot)}
                    className={`cursor-pointer rounded-lg shadow-sm transition-all transform hover:scale-105 ${
                      plot.isBooked
                        ? "bg-red-50 border border-red-200"
                        : "bg-green-50 border border-green-200 hover:bg-green-100"
                    }`}
                  >
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <FaRulerCombined className="text-gray-600 mr-2" />
                          <span className="font-medium">{plot.size} sqft</span>
                        </div>
                        {plot.isBooked ? (
                          <FaTimesCircle className="text-red-500" size={18} />
                        ) : (
                          <FaCheckCircle className="text-green-500" size={18} />
                        )}
                      </div>

                      <div
                        className={`text-sm py-2 px-3 rounded-md text-center ${
                          plot.isBooked ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                        }`}
                      >
                        {plot.isBooked ? (
                          <div className="flex flex-col">
                            <span className="font-medium">Booked</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <BsCalendarCheck className="mr-1" />
                            <span>Available - Click to Book</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Booking Modal */}
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <Dialog.Title className="text-xl font-bold mb-2 text-gray-800 flex items-center">
              <BsCreditCard className="mr-2 text-green-600" />
              Book Land - ₹10,000 Booking Amount
            </Dialog.Title>

            {selectedPlot && (
              <div className="mb-4 bg-gray-50 p-3 rounded-lg text-sm">
                <p className="text-gray-600">
                  <span className="font-medium">Land Size:</span> {selectedPlot.size} sqft
                </p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FaUser className="inline mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors ${
                    errors.name ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FaEnvelope className="inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors ${
                    errors.email ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FaPhone className="inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your 10-digit phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors ${
                    errors.phone ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FaMapMarkerAlt className="inline mr-2" />
                  State
                </label>
                <input
                  type="text"
                  placeholder="Enter your state"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors ${
                    errors.state ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                />
                {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <MdLocationOn className="inline mr-2" />
                  City
                </label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors ${
                    errors.city ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                />
                {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <button
                  onClick={handleBooking}
                  disabled={bookingInProgress}
                  className={`w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center ${
                    bookingInProgress ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {bookingInProgress ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    "Confirm Booking"
                  )}
                </button>

                <button
                  onClick={closeModal}
                  disabled={bookingInProgress}
                  className="w-full text-gray-600 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Success Modal with Receipt Download */}
      <Dialog open={showSuccessModal} onClose={closeSuccessModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <FaCheckCircle className="h-10 w-10 text-green-600" />
              </div>

              <Dialog.Title className="text-xl font-bold text-gray-800 mb-2">Booking Successful!</Dialog.Title>

              <p className="text-gray-600 mb-6">
                Your plot has been successfully booked. Please download your receipt for your records.
              </p>

              {bookingDetails && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
                  <h3 className="font-medium text-gray-800 mb-2">Booking Details:</h3>
                  <p className="text-sm text-gray-600">Name: {bookingDetails.userName}</p>
                  <p className="text-sm text-gray-600">Farmhouse: {bookingDetails.farmhouseName}</p>
                  <p className="text-sm text-gray-600">Land Size: {bookingDetails.plotSize} sqft</p>
                  <p className="text-sm text-gray-600">State: {bookingDetails.state}</p>
                  <p className="text-sm text-gray-600">City: {bookingDetails.city}</p>
                  <p className="text-sm text-gray-600">Amount Paid: ₹{bookingDetails.amount.toLocaleString("en-IN")}</p>
                </div>
              )}

              <div className="flex flex-col gap-3">
                <button
                  onClick={downloadReceipt}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <FaFileDownload className="mr-2" />
                  Download Receipt
                </button>

                <button
                  onClick={closeSuccessModal}
                  className="w-full text-gray-600 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}

export default FarmhousePlotView
