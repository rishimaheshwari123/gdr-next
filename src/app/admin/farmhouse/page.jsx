"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { generateReceipt } from "@/app/farmhouse/receipt-generator"
import { Download, MapPin, Calendar, Phone, Mail, CreditCard, Hash } from 'lucide-react'

export default function FarmhouseDashboard() {
  const [farmhouses, setFarmhouses] = useState([])
  const [loading, setLoading] = useState(false)

  const getAllFarmhousesWithPlots = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/formhouse/farmhouses-with-plots`)
      if (res.data.success) {
        console.log(res.data.data)
        setFarmhouses(res.data.data)
      }
    } catch (err) {
      console.error("Error fetching farmhouse data")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllFarmhousesWithPlots()
  }, [])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const handleDownloadReceipt = (plot, farmhouse) => {
    const bookingData = {
      userName: plot.bookedInfo.name,
      userEmail: plot.bookedInfo.email,
      userPhone: plot.bookedInfo.phone,
      farmhouseName: farmhouse.name,
      farmhouseLocation: farmhouse.location,
      plotSize: plot.size,
      amount: plot.bookedInfo.amount || 10000, // Default amount if not available
      bookingId: plot.bookedInfo.orderId || plot.bookedInfo.razorpay_order_id?.split("_")[1] || plot._id.slice(-6),
      bookingDate: formatDate(plot.bookedInfo.date),
      state: "Madhya Pradesh",
      city: "Bhopal",
      razorpayOrderId: plot.bookedInfo.razorpay_order_id,
      razorpayPaymentId: plot.bookedInfo.razorpay_payment_id,
    }

    generateReceipt(bookingData)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading farmhouses...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Farmhouse Management</h1>
          <p className="mt-2 text-gray-600">Manage your farmhouses and plot bookings</p>
        </div>

        {farmhouses.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🏡</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No farmhouses found</h3>
            <p className="text-gray-500">Start by adding your first farmhouse.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {farmhouses.map((farmhouse) => (
              <div key={farmhouse._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Farmhouse Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-white">{farmhouse.name}</h2>
                      <p className="text-blue-100 flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-2" />
                        {farmhouse.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-blue-100 text-sm">Total Plots</div>
                      <div className="text-2xl font-bold text-white">{farmhouse.plots.length}</div>
                    </div>
                  </div>
                </div>

                {/* Plots Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {farmhouse.plots.map((plot) => (
                      <div
                        key={plot._id}
                        className={`border rounded-lg p-4 transition-all duration-200 hover:shadow-md ${
                          plot.isBooked
                            ? "border-red-200 bg-red-50"
                            : "border-green-200 bg-green-50 hover:border-green-300"
                        }`}
                      >
                        {/* Plot Header */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-lg font-semibold text-gray-800">{plot.size}</div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              plot.isBooked ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                            }`}
                          >
                            {plot.isBooked ? "Booked" : "Available"}
                          </span>
                        </div>

                        {/* Plot Details */}
                        {plot.isBooked && plot.bookedInfo ? (
                          <div className="space-y-3">
                            <div className="border-t border-red-200 pt-3">
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="font-medium text-gray-800">Booking Details</h4>
                                <button
                                  onClick={() => handleDownloadReceipt(plot, farmhouse)}
                                  className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                  <Download className="w-4 h-4 mr-1" />
                                  Receipt
                                </button>
                              </div>

                              <div className="space-y-2 text-sm">
                                <div className="flex items-center justify-between">
                                  <span className="text-gray-600 flex items-center">
                                    <span className="mr-2">👤</span>Customer:
                                  </span>
                                  <span className="font-medium text-gray-800">{plot.bookedInfo.name}</span>
                                </div>

                                <div className="flex items-center justify-between">
                                  <span className="text-gray-600 flex items-center">
                                    <Phone className="w-3 h-3 mr-2" />
                                    Phone:
                                  </span>
                                  <span className="font-medium text-gray-800">{plot.bookedInfo.phone}</span>
                                </div>

                                <div className="flex items-center justify-between">
                                  <span className="text-gray-600 flex items-center">
                                    <Mail className="w-3 h-3 mr-2" />
                                    Email:
                                  </span>
                                  <span className="font-medium text-gray-800 truncate text-xs">
                                    {plot.bookedInfo.email}
                                  </span>
                                </div>

                                <div className="flex items-center justify-between">
                                  <span className="text-gray-600 flex items-center">
                                    <Calendar className="w-3 h-3 mr-2" />
                                    Booked:
                                  </span>
                                  <span className="font-medium text-gray-800 text-xs">
                                    {formatDate(plot.bookedInfo.date)}
                                  </span>
                                </div>

                                {plot.bookedInfo.amount && (
                                  <div className="flex items-center justify-between">
                                    <span className="text-gray-600 flex items-center">
                                      <span className="mr-2">💰</span>Amount:
                                    </span>
                                    <span className="font-medium text-green-600">
                                      ₹{plot.bookedInfo.amount.toLocaleString("en-IN")}
                                    </span>
                                  </div>
                                )}
                              </div>

                              <div className="mt-3 pt-2 border-t border-red-200">
                                <div className="text-xs text-gray-500 space-y-1">
                                  <div className="flex items-center">
                                    <Hash className="w-3 h-3 mr-1" />
                                    <span className="truncate">Order: {plot.bookedInfo.razorpay_order_id}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <CreditCard className="w-3 h-3 mr-1" />
                                    <span className="truncate">Payment: {plot.bookedInfo.razorpay_payment_id}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center py-4">
                            <div className="text-green-600 text-2xl mb-2">✅</div>
                            <p className="text-green-700 font-medium">Available for booking</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Summary Stats */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">{farmhouse.plots.length}</div>
                        <div className="text-sm text-gray-600">Total Plots</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">
                          {farmhouse.plots.filter((plot) => plot.isBooked).length}
                        </div>
                        <div className="text-sm text-gray-600">Booked</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          {farmhouse.plots.filter((plot) => !plot.isBooked).length}
                        </div>
                        <div className="text-sm text-gray-600">Available</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {Math.round(
                            (farmhouse.plots.filter((plot) => plot.isBooked).length / farmhouse.plots.length) * 100,
                          )}
                          %
                        </div>
                        <div className="text-sm text-gray-600">Occupancy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
