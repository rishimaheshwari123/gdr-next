// components/InfiniteMovingCards.js
"use client";

import React, { useEffect, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image"; // Use Next.js Image for optimized images

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow", // Default speed set to 'slow'
  pauseOnHover = false,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getSpeed();
      setStart(true);
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-2 w-max flex-nowrap",
          start &&
            (direction === "left"
              ? "animate-scroll-left"
              : "animate-scroll-right"),
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{ "--animation-duration": "80s" }}
      >
        {items.map((item, idx) => (
          <li
            className="relative rounded-2xl border border-b-0 flex-shrink-0"
            key={idx}
          >
            <Image
              className="h-40 object-cover"
              src={item} // Image source
              alt={`item-${idx}`}
              width={160} // Adjust width as required
              height={160} // Adjust height as required
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
