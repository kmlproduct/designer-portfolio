import React, { useState, useEffect } from "react";

const SpecialHeading = ({ uniqueId, heading1, heading3 }) => {
  useEffect(() => {
    const handleScroll = () => {
      const h1Element = document.getElementById(`heading1-${uniqueId}`);
      const h3Element = document.getElementById(`heading3-${uniqueId}`);

      // Check if the elements are in view
      if (h1Element && h3Element) {
        const h1Position = h1Element.getBoundingClientRect().top;
        const h3Position = h3Element.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        // Add or remove a class based on scroll position
        if (h1Position < screenHeight) {
          h1Element.classList.add("moveFromRight");
        } else {
          h1Element.classList.remove("moveFromRight");
        }

        if (h3Position < screenHeight) {
          h3Element.classList.add("moveFromLeft");
        } else {
          h3Element.classList.remove("moveFromLeft");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [uniqueId]);

  return (
    <div className="specialheading">
      <h1 id={`heading1-${uniqueId}`}>{heading1}</h1>
      <h3 id={`heading3-${uniqueId}`}>{heading3}</h3>
      {/* Your other content */}
    </div>
  );
};

export default SpecialHeading;
