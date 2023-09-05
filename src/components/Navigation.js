import { Email } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const threshold = 100; // Set a threshold value for when to hide the element

    setIsVisible(scrollTop > threshold);
  };

  // const handleScrollSecond = () => {
  //   const scrollTop = window.pageYOffset;
  //   const threshold = 200; // Set a threshold value for when to hide the element

  //   setIsVisible(scrollTop > threshold);
  // };

  window.onscroll = handleScroll;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set 'isLoaded' to true after the component is mounted to trigger the animation
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`Navigation animation-component ${isLoaded ? "loaded" : ""}`}
    >
      {/* <Link className="logo" to={"/"}>Home</Link> */}

      {/* {!isVisible && ( */}

      {/* )} */}

      <div>
        <Link className="logo" to={"/"}>
          HS
        </Link>
        {isVisible && (
          <Link
            className={`scroll_item animation-component ${
              isLoaded ? "loaded" : ""
            }`}
            to={"/"}
          >
            Haram Shin <span>: front-end DEVELOPER </span>{" "}
            {/* <span className={`animation-component ${
              isLoaded ? "loaded" : ""
            }`}> Design Simple. Beautiful. Creative. Human Centred.</span> */}
          </Link>
        )}
      </div>

      {/* <div className="">
        {isVisible && <div className="scroll-element">Haram Shin</div>}
      </div> */}

      <ul>
        <li title="e-mail">
          {/* <Link to={"/"}>Home</Link> */}
          <a href="mailto: harams22@gmail.com">
            <Email />
          </a>
        </li>
        <li title="resume">
          {/* <Link to={"/work"}>Work</Link> */}
          <a
            // https://1drv.ms/b/s!AnDxjzHaI4U8jf1S8oVHgR5cFyy57g?e=PAfCmN
            href="https://1drv.ms/b/s!AnDxjzHaI4U8jf1S8oVHgR5cFyy57g?e=PAfCmN"
            target="_blank"
          >
            {" "}
            CV{" "}
          </a>
        </li>
        <li title="LinkedIn Profile">
          <a
            href="https://www.linkedin.com/in/haram-shin-854283244/"
            target="_blank"
          >
            {/* LinkedIn */}
            <LinkedIn />
          </a>
        </li>
        <li title="Github">
          <a href="https://github.com/nuGeek" target="_blank">
            {/* GitHub */}
            <GitHub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
