import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Map } from "lucide-react"
import Link from "next/link"

const TopHeader = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-gray-800 shadow-md">
      {/* Desktop & Tablet View */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Contact Information */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center group hover:scale-105 transition-transform duration-200">
                <MapPin className="w-4 h-4 mr-2 text-gray-700 group-hover:text-gray-900" />
                <span className="font-medium text-sm">Bhopal</span>
              </div>

              {/* <div className="hidden lg:flex items-center group hover:scale-105 transition-transform duration-200">
                <Phone className="w-4 h-4 mr-2 text-gray-700 group-hover:text-gray-900" />
                <span className="font-medium text-sm">+91 98937 30005</span>
              </div> */}

              <div className="flex items-center group hover:scale-105 transition-transform duration-200">
                <Mail className="w-4 h-4 mr-2 text-gray-700 group-hover:text-gray-900" />
                <span className="font-medium text-sm">rkshomes30@gmail.com</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-3">
              <Link
                href="https://www.facebook.com/RKSHOME.CO.IN"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Facebook className="w-4 h-4 text-gray-800 hover:text-blue-600" />
              </Link>

              <Link
                href="https://www.instagram.com/rks.homes/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Instagram className="w-4 h-4 text-gray-800 hover:text-pink-600" />
              </Link>

              <Link
                href="https://www.youtube.com/@rkshomes5376"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Youtube className="w-4 h-4 text-gray-800 hover:text-red-600" />
              </Link>

              <Link
                href="https://www.google.com/maps?q=23.1630267,77.2736317&z=17&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Map"
                className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Map className="w-4 h-4 text-gray-800 hover:text-green-600" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="px-4 py-3 space-y-3">
          {/* First Row - Location and Email */}
          <div className="flex justify-between items-center">
            <div className="flex items-center group">
              <MapPin className="w-4 h-4 mr-2 text-gray-700" />
              <span className="font-medium text-sm">Bhopal</span>
            </div>

            <div className="flex items-center group">
              <Mail className="w-4 h-4 mr-2 text-gray-700" />
              <span className="font-medium text-xs">rkshomes30@gmail.com</span>
            </div>
          </div>

          {/* Second Row - Phone and Social Media */}
          <div className="flex justify-between items-center">
            {/* <div className="flex items-center group">
              <Phone className="w-4 h-4 mr-2 text-gray-700" />
              <span className="font-medium text-sm">+91 98937 30005</span>
            </div> */}

            <div className="flex items-center space-x-2">
              <Link
                href="https://www.facebook.com/RKSHOME.CO.IN"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300"
              >
                <Facebook className="w-4 h-4 text-gray-800" />
              </Link>

              <Link
                href="https://www.instagram.com/rks.homes/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-gray-800" />
              </Link>

              <Link
                href="https://www.youtube.com/@rkshomes5376"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300"
              >
                <Youtube className="w-4 h-4 text-gray-800" />
              </Link>

              <Link
                href="https://www.google.com/maps?q=23.1630267,77.2736317&z=17&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Map"
                className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300"
              >
                <Map className="w-4 h-4 text-gray-800" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
