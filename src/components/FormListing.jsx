import Link from "next/link";
import { FaHome, FaTractor, FaBuilding } from "react-icons/fa";

const RealEstateListing = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Farmhouse Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 flex items-center">
          <FaHome className="mr-2 text-green-600" /> Farmhouse for Sale in Bhopal – A Nature Retreat
        </h1>
        <p className="text-gray-700 mb-2">
          Get away from the city bustle and embrace nature with a luxurious farmhouse for sale in Bhopal. Whether you are looking for a weekend retreat or a permanent abode surrounded by greenery, our farmhouses have to offer:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Scenic locales with state-of-the-art amenities</li>
          <li>Large areas with green landscapes</li>
          <li>Good connectivity to key city hubs</li>
        </ul>
      </div>
      
      {/* Farm Land Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaTractor className="mr-2 text-green-600" /> Farm Land for Sale in Bhopal – A Lucrative Investment
        </h2>
        <p className="text-gray-700 mb-2">
          Investing in land for the farm on sale in Bhopal is an ideal option to build your future. Our farmland for sale options offer:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Pleasing soil conditions suitable for agricultural purposes or organic farming</li>
          <li>Proximity to abundant water supplies and road connection</li>
          <li>Long-term appreciation and future resale value opportunities</li>
        </ul>
      </div>
      
      {/* Commercial Property Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <FaBuilding className="mr-2 text-green-600" /> Commercial Property for Sale in Bhopal – Prime Business Areas
        </h3>
        <p className="text-gray-700 mb-2">
          For investors and entrepreneurs, the key is to find the ideal commercial property available in Bhopal. GDR Group 72 provides commercial properties in prime areas, with high footfall and profit generation. Our properties are:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Office spaces, retail shops, and showroom spaces</li>
          <li>Properties in highly sought-after commercial areas</li>
          <li>Competitive rates with high return on investment</li>
        </ul>
      </div>
      
      {/* Why Choose Us Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Why Choose GDR Group 72?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Substantial experience in Bhopal's real estate market</li>
          <li>Verified properties with a legal guarantee</li>
          <li>Customer-oriented process for a hassle-free buying experience</li>
        </ul>
      </div>
      
      {/* Contact Section */}
      <div className="bg-green-600 text-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us Now and Invest Wisely!</h2>
        <p className="mb-4">If you are looking for a farmhouse, agricultural land, or commercial property in Bhopal, GDR Group 72 is your reliable partner.</p>
        <Link href="/contact" className="bg-white text-green-600 font-bold py-2 px-6 rounded-lg hover:bg-gray-200 transition">Get in Touch</Link>
      </div>
    </div>
  );
};

export default RealEstateListing;
