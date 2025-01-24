import React from "react";

const PriceTable = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <h6 className="text-lg font-semibold mb-4">
          TMT Saria 10 to 25 mm Price
        </h6>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">City</th>
              <th className="border border-gray-300 px-4 py-2">Size</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Updated On</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Bhopal</td>
              <td className="border border-gray-300 px-4 py-2" rowSpan="4">
                10 to 25
              </td>
              <td className="border border-gray-300 px-4 py-2" rowSpan="4">
                100 kg
              </td>
              <td className="border border-gray-300 px-4 py-2" rowSpan="4">
                66,000
              </td>
              <td className="border border-gray-300 px-4 py-2" rowSpan="4">
                18/02/2023
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Indore</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Ujjain</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Jabalpur</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-8">
        <h6 className="text-lg font-semibold mb-4">
          TMT Saria 08 to 32 mm Price
        </h6>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">City</th>
              <th className="border border-gray-300 px-4 py-2">Size</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Updated On</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Bhopal</td>
              <td className="border border-gray-300 px-4 py-2" rowSpan="4">
                08 to 32
              </td>
              <td className="border border-gray-300 px-4 py-2" rowSpan="4">
                100 kg
              </td>
              <td className="border border-gray-300 px-4 py-2" rowSpan="4">
                67,500
              </td>
              <td className="border border-gray-300 px-4 py-2" rowSpan="4">
                18/02/2023
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Indore</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Ujjain</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Jabalpur</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h6 className="text-lg font-semibold mb-4">TMT Saria 6mm Price</h6>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">City</th>
              <th className="border border-gray-300 px-4 py-2">Size</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Updated On</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Bhopal</td>
              <td className="border border-gray-300 px-4 py-2" rowSpan="4">
                6mm
              </td>
              <td className="border border-gray-300 px-4 py-2" rowSpan="4">
                100 kg
              </td>
              <td className="border border-gray-300 px-4 py-2" rowSpan="4">
                67,500
              </td>
              <td className="border border-gray-300 px-4 py-2" rowSpan="4">
                18/02/2023
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Indore</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Ujjain</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Jabalpur</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTable;
