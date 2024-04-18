import React, { useState, useEffect } from "react";
import KUTE from 'kute.js'

import styles from "../../styles/flower.module.css";
import FlowerSVG from "./FlowerSVG";
import PlayButton from "../Buttons/PlayButton";
import PauseButton from "../Buttons/PauseButton";
import ResetButton from "../Buttons/ResetButton";
import SlideButton from "../Buttons/SlideButtons";
import {
  showAndHideElementsToShowIds,
  slideAndShowHide,
  handleSlide,
  arrayOfFlowerLayers,
} from "./FlowerUtils";



export default function Flower() {
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    // Create references for all the buttons and links
    const svgElement = document.getElementById("svgContainer");
    const playButton = document.getElementById("playButton");
    const pauseButton = document.getElementById("pauseButton");
    const resetButton = document.getElementById("resetButton");   



    var myTween = KUTE.to(playButton, {translateX:150}).start();


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
      svgElement.classList.remove(
        styles.play,
        styles.slideDown,
        styles.slideLeft,
        styles.slideRight,
        styles.slideUp
      );
      setIsPlaying(false);
      //show all the layers of flower
      showAndHideElementsToShowIds(arrayOfFlowerLayers,[]);
    }

    const cleanupFunctions = [
      handleSlide("Left", svgElement, styles),
      handleSlide("Right", svgElement, styles),
      handleSlide("Up", svgElement, styles),
      handleSlide("Down", svgElement, styles),
    ];

    function addClickListener(element, callback) {
      if (element) {
        element.addEventListener("click", callback);
      }
    }


    // Add click event listeners to each button and link

    addClickListener(playButton, playAnimation);

    addClickListener(pauseButton, pauseAnimation);

    addClickListener(resetButton, resetAnimation);  

    // Cleanup event listeners when the component unmounts
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
      // Execute cleanup functions if they are defined
      cleanupFunctions.forEach((cleanup) => {
        if (typeof cleanup === "function") {
          cleanup();
        }
      });
    };
  }, []);

  

  return (
    <div className={styles.container}>
      <FlowerSVG />
      <div className="button-container">
        <PlayButton />
        <PauseButton />
        <ResetButton />
      </div>
    </div>
  );
}
