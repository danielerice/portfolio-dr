import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

function TopButton () {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showScrollTopButton && (
        <FaAngleDoubleUp
          className="z-50 border:black-800 bg-grey-900 h-10 w-10 rounded-full border-2 border-inherit cursor-pointer object-right-bottom fixed right-5 bottom-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          onClick={scrollTop}
        />
      )}
    </div>
  );
};

export default TopButton;