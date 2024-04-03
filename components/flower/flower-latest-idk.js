import styles from "../styles/flower.module.css";
import React, { useState, useEffect } from "react";

export default function Flower() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBlogSelected, setIsBlogSelected] = useState(false);

  useEffect(() => {
    // Get references to the SVG and buttons
    const svgElement = document.getElementById("svgContainer");
    const playButton = document.getElementById("playButton");
    const pauseButton = document.getElementById("pauseButton");
    const resetButton = document.getElementById("resetButton");
    const blogLink = document.getElementById("blogLink");
    const slideLeftButton = document.getElementById("slideLeftButton");
    const slideRightButton = document.getElementById("slideRightButton");
    const slideUpButton = document.getElementById("slideUpButton");
    const slideDownButton = document.getElementById("slideDownButton");

    // Function to play the animation
    function playAnimation() {
      svgElement.classList.add(styles.play);
      svgElement.style.animationPlayState = "running";
      setIsPlaying(true);
    }

    // Function to pause the animation
    function pauseAnimation() {
      svgElement.style.animationPlayState = "paused";
      setIsPlaying(false);
    }

   
    // Function to reset the animation
    function resetAnimation() {
      svgElement.style.animation = "none";
      void svgElement.offsetWidth;
      svgElement.style.animation = "";
      svgElement.classList.remove(styles.play,styles.slideDown,styles.slideLeft,styles.slideRight,styles.slideUp,);
     
      setIsPlaying(true);
      //Show all leaves
showAndHideElementsToShowIds(
  [
    "outerRightLeafLayer",
    "innerRightLeafLayer",
    "rightLeafText",
    "outerBottomLeafLayer",
    "innerBottemLeafLayer",
    "bottomLeafText",
    "outerTopLeafLayer",
    "innerTopLeafLayer",
    "topLeafText",
    "outerLeftLeafLayer",
    "innerLeftLeafLayer",
    "leftLeafText",
  ],
  []
);

    }

    // Function to handle blog link click
    function handleBlogLinkClick(event) {
      event.preventDefault();
      svgElement.classList.add(styles.selected);
      setIsBlogSelected(true);
    }


function showAndHideElementsToShowIds(showIds, hideIds) {
  showIds.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = "block";
    }
  });

  hideIds.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = "none";
    }
  });
}


function slideAndShowHide(slideDirection) {
  const svgContainer = document.getElementById("svgContainer");

  // Define slide animations for each direction
  const slideAnimations = {
    left: {
      slideClass: "slideLeft",
      showIds: ["outerRightLeafLayer", "innerRightLeafLayer", "rightLeafText"],
      hideIds: [
        "outerLeftLeafLayer",
        "innerLeftLeafLayer",
        "outerBottomLeafLayer",
        "innerBottemLeafLayer",
        "outerTopLeafLayer",
        "innerTopLeafLayer",
        "leftLeafText",
        "bottomLeafText",
        "topLeafText",
      ],
    },
    right: {
      slideClass: "slideRight",
      showIds: ["outerLeftLeafLayer", "innerLeftLeafLayer", "leftLeafText"],
      hideIds: [
        "outerRightLeafLayer",
        "innerRightLeafLayer",
        "outerBottomLeafLayer",
        "innerBottemLeafLayer",
        "outerTopLeafLayer",
        "innerTopLeafLayer",
        "rightLeafText",
        "bottomLeafText",
        "topLeafText",
      ],
    },
    up: {
      slideClass: "slideUp",
      showIds: [
        "outerBottomLeafLayer",
        "innerBottemLeafLayer",
        "bottomLeafText",
      ],
      hideIds: [
        "outerTopLeafLayer",
        "innerTopLeafLayer",
        "outerLeftLeafLayer",
        "innerLeftLeafLayer",
        "outerRightLeafLayer",
        "innerRightLeafLayer",
        "leftLeafText",
        "rightLeafText",
        "topLeafText",
      ],
    },
    down: {
      slideClass: "slideDown",
      showIds: ["outerTopLeafLayer", "innerTopLeafLayer", "topLeafText"],
      hideIds: [
        "outerBottomLeafLayer",
        "innerBottemLeafLayer",
        "outerLeftLeafLayer",
        "innerLeftLeafLayer",
        "outerRightLeafLayer",
        "innerRightLeafLayer",
        "leftLeafText",
        "rightLeafText",
        "bottomLeafText",
      ],
    },
  };

  const slideInfo = slideAnimations[slideDirection];

  if (slideInfo) {
    // Apply the sliding animation to the SVG container
    svgContainer.classList.add(slideInfo.slideClass);

    // Show and hide elements based on the provided direction
    showAndHideElementsToShowIds(slideInfo.showIds, slideInfo.hideIds);
  }
}




    // Function to slide the SVG element left
    function slideLeft() {      
    svgElement.classList.add(styles.slideLeft);
      slideAndShowHide("left");

    //   svgElement.classList.add(styles.slideLeft); // Use styles.slideLeft here
    }

    // Function to slide the SVG element right
    function slideRight() {
      svgElement.classList.add(styles.slideRight);
      slideAndShowHide("right");

    }

    // Function to slide the SVG element up
    function slideUp() {
      svgElement.classList.add(styles.slideUp);
      slideAndShowHide("up");

    }

    // Function to slide the SVG element down
    function slideDown() {
      svgElement.classList.add(styles.slideDown);
      slideAndShowHide("down");

    }

    // Add event listeners to the buttons
    if (playButton) {
      playButton.addEventListener("click", playAnimation);
    }
    if (pauseButton) {
      pauseButton.addEventListener("click", pauseAnimation);
    }
    if (resetButton) {
      resetButton.addEventListener("click", resetAnimation);
    }
    if (blogLink) {
      blogLink.addEventListener("click", handleBlogLinkClick);
    }
      
    if (slideRightButton) {
      slideRightButton.addEventListener("click", slideRight);
    }
    if (slideUpButton) {
      slideUpButton.addEventListener("click", slideUp);
    }
    if (slideDownButton) {
      slideDownButton.addEventListener("click", slideDown);
    }

    // Clean up event listeners when the component unmounts
    return () => {
      if (playButton) {
        playButton.removeEventListener("click", playAnimation);
      }
      if (pauseButton) {
        pauseButton.removeEventListener("click", pauseAnimation);
      }
      if (resetButton) {
        resetButton.removeEventListener("click", resetAnimation);
      }
      if (blogLink) {
        blogLink.removeEventListener("click", handleBlogLinkClick);
      }
      if (slideLeftButton) {
        slideLeftButton.removeEventListener("click", slideLeft);
      }
      if (slideRightButton) {
        slideRightButton.removeEventListener("click", slideRight);
      }
      if (slideUpButton) {
        slideUpButton.removeEventListener("click", slideUp);
      }
      if (slideDownButton) {
        slideDownButton.removeEventListener("click", slideDown);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <button typeof="button" id="playButton">
        Play
      </button>
      <button typeof="button" id="pauseButton">
        Pause
      </button>
      <button typeof="button" id="resetButton">
        Reset
      </button>
      <button typeof="button" id="slideLeftButton">
        Slide Left
      </button>
      <button typeof="button" id="slideRightButton">
        Slide Right
      </button>
      <button typeof="button" id="slideUpButton">
        Slide Up
      </button>
      <button typeof="button" id="slideDownButton">
        Slide Down
      </button>
      <svg
        id="svgContainer"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 512 512"
      >
        <g id="wholeFlowerAnimation">
          {/* Update style attribute */}
          <path
            className={styles.outRight}
            d="M256,255.5v0.5C589.3,617,589.3-105.6,256,255.5z"
            id="outerRightLeafLayer"
          />

          {/* Update style attribute */}
          <path
            className={styles.outBottom}
            d="M256.5,256H256C-105,589.3,617.6,589.3,256.5,256z"
            id="outerBottomLeafLayer"
            // style={{ fill: "#5CB8CD" }}
          />

          {/* Update style attribute */}
          <path
            className={styles.inBottom}
            d="M256.3,486c-18.5,0-36.6-4.1-51-11.5c-10.1-5.2-23.4-14.8-29.7-30.9c-6.8-17.4-4.4-39,7.1-64.3c13.3-29.1,38-61.3,73.6-96c35.6,34.7,60.3,66.9,73.6,96c11.5,25.2,13.9,46.9,7.1,64.3c-6.3,16.1-19.6,25.7-29.7,30.9C292.9,481.9,274.8,486,256.3,486z"
            id="innerBottemLeafLayer"
            // style={{ fill: "#00AABC" }}
          />

          {/* Update style attribute */}
          <path
            className={styles.outLeft}
            d="M256,256.5l0-0.5C-77.3-105-77.3,617.6,256,256.5z"
            id="outerLeftLeafLayer"
            // style={{ fill: "#152D39" }}
          />

          <a href="https://google.com" id="blogLink">
            {/* Update style attribute */}
            <path
              className={styles.outTop}
              d="M255.5,256h0.5C617-77.3-105.6-77.3,255.5,256z"
              id="outerTopLeafLayer"
              //   style={{ fill: "#FB8A52" }}
            />

            {/* Update style attribute */}
            <path
              className={styles.inTop}
              d="M255.7,228.7c-35.6-34.7-60.3-66.9-73.6-96c-11.5-25.2-13.9-46.9-7.1-64.3c6.3-16.1,19.6-25.7,29.7-30.9c14.3-7.4,32.4-11.5,51-11.5c18.5,0,36.6,4.1,51,11.5c10.1,5.2,23.4,14.8,29.7,30.9c6.8,17.4,4.4,39-7.1,64.3C316,161.8,291.3,194,255.7,228.7z"
              id="innerTopLeafLayer"
              //   style={{ fill: "#F77237" }}
            />
          </a>

          {/* Update style attribute */}
          <path
            className={styles.inLeft}
            d="M26,256.3c0-18.5,4.1-36.6,11.5-51c5.2-10.1,14.8-23.4,30.9-29.7c17.4-6.8,39-4.4,64.3,7.1c29.1,13.3,61.3,38,96,73.6c-34.7,35.6-66.9,60.3-96,73.6c-25.2,11.5-46.9,13.9-64.3,7.1c-16.1-6.3-25.7-19.6-30.9-29.7C30.1,292.9,26,274.8,26,256.3z"
            id="innerLeftLeafLayer"
            // style={{ fill: "#FFC527" }}
          />

          {/* Update style attribute */}
          <path
            className={styles.inRight}
            d="M283.3,255.7c34.7-35.6,66.9-60.3,96-73.6c25.2-11.5,46.9-13.9,64.3-7.1c16.1,6.3,25.7,19.6,30.9,29.7c7.4,14.3,11.5,32.4,11.5,51c0,18.5-4.1,36.6-11.5,51c-5.2,10.1-14.8,23.4-30.9,29.7c-17.4,6.8-39,4.4-64.3-7.1C350.2,316,318,291.3,283.3,255.7z"
            id="innerRightLeafLayer"
            // style={{ fill: "#FFE047" }}
          />
        </g>
        <g
          id="TextGroupsInsideLeaves"
          style={{}}
          transform="matrix(1, 0, 0, 1.027239, -8.818818, -4.793361)"
        >
          <a href="https://google.com">
            {/* Update style attribute */}
            <text
              className={styles.commonText}
              id="topLeafText"              
              transform="matrix(1.370335, 0, 0, 1.380058, 226.756226, 105.797989)"
              dx="-10.852"
              dy="2.254"
            >
              Home
            </text>
          </a>

          {/* Update style attribute */}
          <text
            className={styles.commonText}
            id="rightLeafText"
            transform="matrix(1.370335, 0, 0, 1.445508, 369.083832, 267.971222)"
            dx="-0.644"
            dy="-2.384"
          >
            Skills
          </text>

          {/* Update style attribute */}
          <text
            className={styles.commonText}
            id="leftLeafText"
            transform="matrix(1.370335, 0, 0, 1.445508, 60.805393, 265.253998)"
            dx="-3.218"
            dy="-0.596"
          >
            Contact
          </text>

          {/* Update style attribute */}
          <text
            id="bottomLeafText"
            className={styles.commonText}
            transform="matrix(1.370335, 0, 0, 1.445508, 217.440262, 423.759796)"
            dx="-4.505"
            dy="-1.192"
          >
            About
          </text>
        </g>
      </svg>
    </div>
  );
}