import React from "react";

const FarmhouseListing = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h5 className="text-3xl font-bold text-yellow-500 text-center mb-4">
          Find Great Opportunities with GDR Group 72
        </h5>
        <p className="text-center text-base mb-6 max-w-2xl mx-auto">
          Your farmhouse and farmland for sale in Bhopal. Prime locations like Kolar Road, Hoshangabad Road, and Sehore Bypass Road offer serene ambiance along with urban comfort.
        </p>

        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h6 className="text-xl font-semibold text-yellow-500 mb-3">
            Why Buy a Farmhouse in Bhopal?
          </h6>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><strong>Strategic Location:</strong> Centrally located, making travel to major cities easy.</li>
            <li><strong>Scenic Beauty:</strong> Known as the "City of Lakes," Bhopal offers a peaceful retreat.</li>
            <li><strong>Affordable Investment:</strong> Lower costs compared to metropolitan cities with good appreciation potential.</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h6 className="text-xl font-semibold text-yellow-500 mb-3">Our Offerings</h6>
            <p className="text-gray-700 mb-2"><strong>Farmhouses:</strong> Modern amenities, lush gardens, and strong investment potential.</p>
            <p className="text-gray-700"><strong>Farmland:</strong> Fertile soil and essential resources for agricultural activities.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h6 className="text-xl font-semibold text-yellow-500 mb-3">Why Choose GDR Group 72?</h6>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>Expert Advice:</strong> Tailored property solutions aligned with investment goals.</li>
              <li><strong>Transparent Transactions:</strong> Clear communication and hassle-free buying process.</li>
              <li><strong>Extensive Listings:</strong> Options for both luxurious farmhouses and expansive farmland.</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-base text-gray-700 max-w-xl mx-auto">
            Own a piece of Bhopal tranquil countryside with GDR Group 72. Browse our listings today!
          </p>
          <a href="https://gdrgroup72.com/" className="mt-3 inline-block bg-yellow-500 text-white px-5 py-2 rounded-lg text-base font-semibold hover:bg-yellow-600 transition">
            Explore Listings
          </a>
        </div>
      </div>
    </div>
  );
};

export default FarmhouseListing;
