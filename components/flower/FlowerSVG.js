// FlowerSVG.js
import React from "react";
import styles from "../../styles/flower.module.css";

function FlowerSVG({ 
  isPlaying
  }) {
  const svgClassName = isPlaying ? styles.play : "";
  

  return (
  
      <svg
        id="svgContainer"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 512 512"
        className={svgClassName}
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
          <text
            className={styles.commonText}
            id="rightLeafText"
            transform="matrix(1.370335, 0, 0, 1.445508, 369.083832, 267.971222)"
            dx="-0.644"
            dy="-2.384"
          >
            Skills
          </text>
          <text
            className={styles.commonText}
            id="leftLeafText"
            transform="matrix(1.370335, 0, 0, 1.445508, 60.805393, 265.253998)"
            dx="-3.218"
            dy="-0.596"
          >
            Contact
          </text>
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

  );
}

export default FlowerSVG;
