import React from "react";

const FarmhouseListing = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <h5 className="text-4xl font-bold text-yellow-500 text-center mb-6">
          Find great opportunities with GDR Group 72
        </h5>
        <p className="text-center text-lg mb-8">
          Your farmhouse for sale in Bhopal and farmland for sale in Bhopal. The prime locations in Kolar Road, Hoshangabad Road, and Sehore Bypass Road have been covered to list out the most suitable and available properties that ensure a serene ambiance along with all urban comfort strategically located as property.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h6 className="text-2xl font-semibold text-yellow-500 mb-4">
            Why Buy a Farmhouse in Bhopal the central Farmland part of Bhopal?
          </h6>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Strategically Located:</strong> Bhopal is at the center. It is quite easy to reach other major cities easily. So, it is one of the excellent options for investment in real estate.</li>
            <li><strong>Scenic Beauty:</strong> It is known as the "City of Lakes." The scenic landscapes of Bhopal provide a peaceful atmosphere for your farmhouse getaway.</li>
            <li><strong>Affordable Investment:</strong> Bhopal offers relatively cheaper options compared to the metropolitan cities and has promising appreciation potential.</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h6 className="text-2xl font-semibold text-yellow-500 mb-4">Our Offerings</h6>
            <p><strong>Farmhouses:</strong> Compared to a variety metropolitan of areas, farmhouses in Bhopal provide modern cost facilities, effective beautiful options gardens, and promise sufficient appreciation potential.</p>
            <p><strong>Farmland:</strong> Our farmland offers fertile soil and necessary resources for farming professionals' activities that will help your future development.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h6 className="text-2xl font-semibold text-yellow-500 mb-4">Why select GDR Group 72?</h6>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Professional Property Advice:</strong> Our advice meets your requirements as well as your investment goals and objectives.</li>
              <li><strong>Transparent Transactions:</strong> We ensure to provide a hassle-free buying experience with integrity and clear communication at every step of the process.</li>
              <li><strong>Diverse Listings:</strong> Whether it is luxurious farmhouses or expansive farmlands our portfolio is designed to meet the needs and budget of a variety of clients.</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-lg">Take the first step to owning a part of Bhopal’s peaceful countryside with GDR Group 72. Explore our current listings now and let us help you turn your real estate dreams into a reality.</p>
          <a href="https://gdrgroup72.com/" className="mt-4 bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition">
            Explore Listings
          </a>
        </div>
      </div>
    </div>
  );
};

export default FarmhouseListing;
