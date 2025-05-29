"use client"

import { useEffect, useState } from "react"
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaPhone } from "react-icons/fa"
import { SiMaplibre } from "react-icons/si"
import { MdEmail, MdLocationCity } from "react-icons/md"
import { useSelector } from "react-redux"
import Link from "next/link"
import ShareButtons from "../ShareButtons"

const Footer = () => {
  const { token } = useSelector((state) => state.auth)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`
  }

  if (!isClient) {
    return null
  }

  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* About Us Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">About Us</h3>
              <div className="w-16 h-1 bg-blue-500 rounded-full mb-6"></div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              GDR Group 72 is a group of companies that was established in 2005, with a primary focus on the real
              estate, agricultural construction, construction and manufacturing industries. Through the years the
              company has expanded its operations, and has made substantial contributions to these industries.
            </p>
               {/* Social Media */}
            <div className="space-y-4">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Follow Us</p>
              <div className="flex space-x-3">
                {[
                  {
                    href: "https://www.facebook.com/RKSHOME.CO.IN",
                    icon: FaFacebook,
                    color: "hover:bg-blue-600",
                    label: "Facebook",
                  },
                  {
                    href: "https://www.instagram.com/rks.homes/",
                    icon: FaInstagram,
                    color: "hover:bg-pink-600",
                    label: "Instagram",
                  },
                  {
                    href: "https://www.youtube.com/@rkshomes5376",
                    icon: FaYoutube,
                    color: "hover:bg-red-600",
                    label: "YouTube",
                  },
                  {
                    href: "https://www.google.com/maps?q=23.1630267,77.2736317&z=17&hl=en",
                    icon: SiMaplibre,
                    color: "hover:bg-green-600",
                    label: "Maps",
                  },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className={`bg-gray-800 border border-gray-700 p-3 rounded-lg ${social.color} hover:text-white transition-all duration-300 hover:border-transparent hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

                {/* Phone */}
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <FaPhone size={16} className="text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">Phone</p>
                    <p className="text-sm text-gray-300">98937 30005</p>
                  </div>
                </div>
              </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Companies */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Our Companies</h3>
                <div className="w-12 h-1 bg-blue-500 rounded-full mb-6"></div>
              </div>
              <ul className="space-y-4">
                {[
                  { href: "/", name: "GDR Agrifeed Pvt. Ltd" },
                  { href: "/construction/home", name: "New RK Construction" },
                  { href: "/rks-homes/home", name: "RKS Infrabuild & Homes Pvt. LTD" },
                  { href: "/srs-foods/home", name: "Nirvdit All Making Products Private Limited" },
                  { href: "/ri-si-food/home", name: "Aamras" },
                ].map((company, index) => (
                  <li key={index}>
                    <Link
                      href={company.href}
                      className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-300"></span>
                      {company.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                <div className="w-12 h-1 bg-blue-500 rounded-full mb-6"></div>
              </div>
              <ul className="space-y-4">
                {[
                  { href: "/", name: "Home" },
                  { href: "/about", name: "About" },
                  { href: "/contact", name: "Contact" },
                  { href: token ? "/admin/dashboard" : "/login", name: "Admin Login" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
              <div className="w-12 h-1 bg-blue-500 rounded-full mb-6"></div>
            </div>

            <div className="space-y-5">
              {/* Address */}
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <MdLocationCity size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">Address</p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Janki Nagar, Neelkant Mahadev Mandir, Near Mashroom Factory Ratibad Bhopal
                    </p>
                  </div>
                </div>
              </div>

          

              {/* Emails */}
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <MdEmail size={18} className="text-blue-400 flex-shrink-0" />
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Email Addresses</p>
                </div>
                <div className="space-y-2">
                  {[
                    "gdragrifeed@gmail.com",
                    "rkshomes30@gmail.com",
                    "r.k_construction@yahoo.com",
                    "nirvditallproductsmaking@gmail.com",
                    "aamarsallmakingproducts@gmail.com",
                    "director@gdrgroup72.com",
                  ].map((email, index) => (
                    <div
                      key={index}
                      className="text-xs text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-300 py-1 px-2 rounded hover:bg-gray-700"
                      onClick={() => handleEmailClick(email)}
                    >
                      {email}
                    </div>
                  ))}
                </div>
              </div>
            </div>

       

            {/* WhatsApp Button */}
            {/* <div className="pt-2">
              <a
                href="https://wa.me/+919893730005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white rounded-lg px-5 py-4 space-x-3 transition-all duration-300 shadow-lg hover:shadow-green-500/25 w-full justify-center"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp size={22} />
                <div className="text-left">
                  <div className="font-semibold text-sm">WhatsApp</div>
                  <div className="text-xs opacity-90">Click to Chat</div>
                </div>
              </a>
            </div> */}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-300">
                © {new Date().getFullYear()} <span className="font-semibold text-blue-400">gdrgroup72.com</span> • All
                rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs text-gray-400">
                Made with <span className="text-red-500">❤️</span> by{" "}
                <span className="font-medium text-gray-300">I NEXT ETS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
