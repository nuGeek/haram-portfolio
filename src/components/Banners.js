import { useEffect, useState } from "react";
import React from "react";

const Banners = () => {
  // const [texts, setTexts] = useState([]);

  // useEffect(() => {
  //   // Generate random texts with random positions
  //   const generateRandomTexts = () => {
  //     const numberOfTexts = 5; // You can change the number of texts
  //     const maxWidth = window.innerWidth - 100; // Limit the maximum X position
  //     const maxHeight = window.innerHeight - 50; // Limit the maximum Y position

  //     const randomTexts = Array.from({ length: numberOfTexts }, (_, index) => {
  //       return {
  //         id: index,
  //         text: `Text ${index + 1}`,
  //         x: Math.floor(Math.random() * maxWidth),
  //         y: Math.floor(Math.random() * maxHeight),
  //       };
  //     });

  //     setTexts(randomTexts);
  //   };

  //   generateRandomTexts(); // Generate texts on initial load
  // }, []);

  return (
    <div className="Banners">
      <div className="banner_conainer">
        <p>
          Design <span>Simple</span>. <span>Beautiful</span>.{" "}
          <span>Creative</span>. <span>Human-Centred</span>.
        </p>
      </div>
      <div className="random-texts-container">
        {/* {texts.map((text) => (
          <div
            key={text.id}
            className="random-text"
            style={{ top: text.y, left: text.x }}
          >
            {text.text}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Banners;
