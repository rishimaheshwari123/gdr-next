import React from "react";
import { InfiniteMovingCards } from "./TestominalSlider";

export default function TestimonialSection() {
  return (
    <div className="my-10 text-white">
      <h6 className="text-3xl text-center font-bold text-gray-600 mb-4">
        Over <span className="text-primary text-3xl font-black">1000+</span>{" "}
        happy <br />
        customers
      </h6>
      <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover={true}
          className="custom-class"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Tru made selling my house a breeze! Their expert guidance and personalized service were top-notch.",
    type: "Seller",
  },
  {
    id: 2,

    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I was amazed at how quickly my house sold with Tru. Highly recommended!",
    type: "Buyer",
  },
  {
    id: 3,

    name: "Samuel Green",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    text: "The team at Tru provided excellent service and support throughout the selling process.",
    type: "Seller",
  },
  {
    id: 4,

    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Tru made selling my house a breeze! Their expert guidance and personalized service were top-notch.",
    type: "Seller",
  },
  {
    id: 5,

    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I was amazed at how quickly my house sold with Tru. Highly recommended!",
    type: "Buyer",
  },
  {
    id: 6,

    name: "Samuel Green",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    text: "The team at Tru provided excellent service and support throughout the selling process.",
    type: "Seller",
  },
];
