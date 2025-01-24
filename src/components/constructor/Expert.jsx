import React from "react";

const experts = [
  {
    name: "Penelopa Miller",
    title: "CEO of Industrie",
    image:
      "https://industrie.rstheme.com/construction/wp-content/uploads/2024/02/tem_6.jpg",
  },
  {
    name: "Peter Hase",
    title: "Sr. Engineer",
    image:
      "https://industrie.rstheme.com/construction/wp-content/uploads/2024/02/tem_6.jpg",
  },
  {
    name: "Lawrence Peter",
    title: "Four Man",
    image:
      "https://industrie.rstheme.com/construction/wp-content/uploads/2024/02/tem_6.jpg",
  },
];

const Expert = () => {
  return (
    <section className="text-center py-10 bg-gray-100">
      <h6 className="text-orange-600 text-sm mb-2">ENGINEER</h6>
      <h6 className="text-4xl font-bold mb-12">Best Construction Experts</h6>
      <div className="grid lg:grid-cols-3 gap-y-10 p-5 max-w-7xl mx-auto">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="relative max-w-sm rounded  shadow-lg bg-white"
          >
            <img
              className="w-full  object-cover"
              src={expert.image}
              alt={expert.name}
            />
            <div
              className="absolute -bottom-5 left-1/4 bg-black  px-10 py-3
            "
            >
              <div className="text-white  text-lg font-bold flex items-center">
                <span className="ml-2">{expert.name}</span>
              </div>
              <p className="text-gray-200">{expert.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expert;
