import { InfiniteMovingCards } from "./InfiniteMovingCards";
import h1 from "@/assests/home/h1.jpg";
import h4 from "@/assests/home/h4.jpg";
import ag from "@/assests/gallery/ag.jpg";
import fh from "@/assests/gallery/fh.jpg";
import fd from "@/assests/gallery/fd.jpg";
import c from "@/assests/gallery/collage.jpeg";
import re from "@/assests/gallery/re.jpeg";
import cl from "@/assests/gallery/cl.jpg";
export function Property() {
  var images = [h1, h4, ag, fh, fd, c, re, cl];

  return (
    <main className="py-4 overflow-hidden flex flex-col gap-2">
      <h6 className="text-3xl mx-auto w-full text-center font-bold text-gray-600 mb-8">
        RKS home help your to find and sell <br></br>your dream house
      </h6>
      <div className=" flex flex-col  bg-white  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={images} direction="left" speed="fast" />
      </div>

      <div className=" flex flex-col  bg-white  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={images} direction="right" speed="fast" />
      </div>
    </main>
  );
}
