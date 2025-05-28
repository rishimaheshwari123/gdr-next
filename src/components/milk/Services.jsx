import Image from "next/image"
import Link from "next/link"
import logo from "@/assests/logos/rfood.jpg"

const services = [
  {
    image: "https://img.bebeautiful.in/www-bebeautiful-in/how-to-use-milk-cream-for-your-skin-600x350-picmobhome.jpg",
    title: "Cream",
    subtitle: "Best Cream",
    description: "We Have All Brands of Fresh Creame",
    link: "/construction/home",
  },
  {
    image: "https://www.india.com/wp-content/uploads/2022/07/Dahi-Khanyache-Fayde-Marathi.jpg",
    title: "Dahi",
    subtitle: "Best Dahi",
    description: "We Have All Brands of Fresh Dahi",
  },
  {
    image:
      "https://www.allrecipes.com/thmb/TgXszUn8XHUTe19kOwlyGQ4ZjyM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-87984584-2-2000-b40af34c16fd4bed815f1e279592b172.jpg",
    title: "Dudh",
    subtitle: "Best Dudh",
    description: "We Have All Brands of Fresh Dudh",
  },
  {
    image: "https://m.media-amazon.com/images/I/41diIEPUlnL._AC_UF1000,1000_QL80_.jpg",
    title: "Ghee",
    subtitle: "Best Ghee",
    description: "We Have All Brands of Fresh Ghee",
  },
  {
    image: "https://i.ytimg.com/vi/tziQpzMX8Uk/maxresdefault.jpg",
    title: "Lassi",
    subtitle: "Best Lassi",
    description: "We Have All Brands of Fresh Lassi",
  },
  {
    image: "https://nonprod-media.webdunia.com/public_html/_media/hi/img/article/2020-04/22/full/1587556253-7501.jpg",
    title: "mattha",
    subtitle: "Best mattha",
    description: "We Have All Brands of Fresh mattha",
  },
  {
    image: "https://www.prakashdairymorbi.com/wp-content/uploads/Malai-Panner.png",
    title: "Panner",
    subtitle: "Best Panner",
    description: "We Have All Brands of Fresh Panner",
  },
  {
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/apple-milkshake-apple-shake.jpg",
    title: "Shake",
    subtitle: "Best Shake",
    description: "We Have All Brands of Fresh Shake",
  },
]

const Services = () => {
  return (
    <div className="my-16">
      <div className="flex flex-col w-full items-center">
        <h3 className="text-4xl font-fjalla text-[#33536B]">Our Services</h3>
        <div className="flex items-center w-[75px]">
          <div className="h-0.5 bg-[#e2571a]"></div>
          <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
          <div className="h-[4px] rounded-full w-[10px] flex-grow" style={{ backgroundColor: "#e2571a" }}></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto p-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <Image
              src={service.image || "/placeholder.svg"}
              alt={`Service ${index + 1}`}
              className="w-full h-64 object-cover"
              width={640}
              height={360}
            />
            {/* Shaded overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

            {/* Overlay for Title and Subtitle */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4 z-20 transition-transform duration-500 ease-in-out group-hover:translate-x-full">
              <h6 className="text-xl font-bold">{service.title}</h6>
              <p className="text-sm">{service.subtitle}</p>
            </div>

            {/* Hidden content */}
            <div className="absolute inset-0 bg-white flex flex-col justify-center items-center text-center p-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-20">
              <h6 className="text-xl font-bold">{service.title}</h6>
              <p className="mt-4 text-gray-600">{service.description}</p>
              <Link
                href={service.link || "#"}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Read More
              </Link>
            </div>

            {/* Brand logo and name on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-white bg-opacity-90 flex justify-between items-center px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-30">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt="Parthavi Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="font-bold text-[#33536B]">Parthavi</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
