"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image"; // Use Next.js Image component
import { FaStar } from "react-icons/fa";
import { cn } from "./cn"; // Assuming `cn` is a utility function for conditional class names

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      addAnimation();
    }
  }, [containerRef, scrollerRef]);

  const addAnimation = () => {
    const scrollerContent = Array.from(scrollerRef.current.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current.appendChild(duplicatedItem);
    });

    getDirection();
    getSpeed();
    setStart(true);
  };

  const getDirection = () => {
    if (containerRef.current) {
      const directionValue =
        direction === "left" ? "scroll-left" : "scroll-right";
      containerRef.current.style.setProperty(
        "--animation-direction",
        directionValue
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 max-w-7xl", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full gap-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.id}
            className="w-[350px] max-w-full relative rounded-2xl border flex-shrink-0 border-bgColor px-8 py-6 md:w-[450px]"
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] pointer-events-none"
              ></div>
              <div className="flex gap-2 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="relative z-20 text-sm leading-[1.6] font-normal">
                {item.text}
              </span>
              <div className="flex items-center my-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-medium">{item.name}</h3>
                  <h6>{item.type}</h6>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
