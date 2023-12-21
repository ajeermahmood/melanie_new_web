"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const WhyDubaiImg = () => {
  const size = useWindowSize();
  return (
    <Image
      src={"/images/why-dubai/dubai.avif"}
      className="w-100 h-100 cover"
      height={size.width != undefined ? (size.width < 450 ? 200 : 600) : 600}
      width={size.width != undefined ? (size.width < 450 ? 300 : 1000) : 1000}
      alt="in focus"
    />
  );
};

export default WhyDubaiImg;
