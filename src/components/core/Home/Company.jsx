import Image from "next/image"
import Link from "next/link"
import { Slide } from "react-awesome-reveal"
import home from "@/assests/logos/rhome.jpg"
import food from "@/assests/par.jpg"
import prabhash from "@/assests/logos/home.jpg"
import gdr from "@/assests/logos/gdrgruop.jpg"
import n from "@/assests/nir.jpg"

const company = [
  {
    photo: gdr,
    title: "GDR Agrifeed Private Limited",
    desc: "A diversified company offering premium livestock feed, real estate development, civil construction, dairy products, and food supplies under one trusted brand.",
    link: "/",
  },
  {
    photo: home,
    title: "RKS Infrabuild & Homes Pvt LTD",
    desc: "Leading real estate company specializing in agricultural land development, residential projects, and infrastructure solutions.",
    link: "/rks-homes/home",
  },
  {
    photo: prabhash,
    title: "New RK Construction",
    desc: "Experienced civil construction company delivering quality infrastructure projects including residential, commercial, and industrial constructions.",
    link: "/construction/home",
  },
  {
    photo: n,
    title: "Nirvdit All Making Products",
    desc: "Leading manufacturer of premium milk products under the trusted 'Shree Ji' brand. Committed to delivering fresh, nutritious dairy products.",
    link: "/srs-foods/home",
  },
  {
    photo: food,
    title: "Aamaras",
    desc: "Premium spices and dry foods supplier offering authentic flavors and traditional recipes. From aromatic spices to nutritious dry fruits.",
    link: "/ri-si-food/home",
  },
];



const Company = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="flex flex-col w-full items-center mb-16">
        <h6 className="text-4xl md:text-5xl font-fjalla text-[#33536B] mb-4">Our Companies</h6>
        <div className="flex items-center w-[75px]">
          <div className="h-0.5 bg-[#e2571a] flex-1"></div>
          <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
          <div className="h-[4px] rounded-full w-[10px] bg-[#e2571a]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <Slide direction="up" triggerOnce cascade damping={0.1}>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {company.map((currElem, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={currElem.photo || "/placeholder.svg"}
                    alt={currElem.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#33536B] mb-3 leading-tight">{currElem.title}</h3>

                  <div className="w-12 h-0.5 bg-[#e2571a] mb-4"></div>

                  <p className="text-gray-600 mb-6 flex-grow">{currElem.desc}</p>

                  <Link
                    href={currElem.link}
                    className="inline-flex items-center px-5 py-2.5 bg-[#e2571a] text-white font-medium rounded-lg hover:bg-[#d14610] transition-all duration-300 hover:shadow-md self-start"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default Company
