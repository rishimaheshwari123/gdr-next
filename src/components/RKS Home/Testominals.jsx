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
    name: "Rajesh Sharma",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "RKS Infrabuild ने मेरी उम्मीदों से बढ़कर सेवा दी। फार्महाउस बुक करना इतना आसान कभी नहीं था!",
    type: "Buyer",
  },
  {
    id: 2,
    name: "Priya Mehta",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "हमारे परिवार के लिए एक परफेक्ट फार्महाउस खोजने में RKS टीम ने बहुत मदद की। Highly recommended!",
    type: "Family Buyer",
  },
  {
    id: 3,
    name: "Amit Verma",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "From location to paperwork, everything was handled professionally. Trustworthy team!",
    type: "Investor",
  },
  {
    id: 4,
    name: "Sneha Desai",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "RKS Infrabuild ने फार्महाउस की डील को इतना स्मूद बना दिया कि चिंता की कोई बात ही नहीं थी।",
    type: "Buyer",
  },
  {
    id: 5,
    name: "Mohit Bansal",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    text: "Value for money! Transparent process, no hidden costs. मेरे लिए ये सबसे अच्छा इन्वेस्टमेंट रहा।",
    type: "Investor",
  },
  {
    id: 6,
    name: "Anjali Patel",
    image: "https://randomuser.me/api/portraits/women/39.jpg",
    text: "RKS की टीम ने मुझे हर स्टेप पर गाइड किया। मैंने फार्महाउस खरीदा और बहुत संतुष्ट हूं।",
    type: "First-time Buyer",
  },
];

