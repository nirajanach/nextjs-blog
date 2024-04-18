import React, { useState, useEffect } from "react";
import styles from "../../../styles/flower.module.css";
import KUTE from 'kute.js';

let animationInstance; // Declare animationInstance globally

export default function Flower() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isBorder, setIsBorder] = useState("black")
    const [isRender, setIsRender] = useState(false);
    let animationInstance = null;


    useEffect(() => {
        const playButton = document.getElementById("playButton");
        const pauseButton = document.getElementById("pauseButton");
        const resetButton = document.getElementById("resetButton");
        const slideLeftButton = document.getElementById("slideLeftButton");
        const slideRightButton = document.getElementById("slideRightButton");
        const slideUpButton = document.getElementById("slideUpButton");
        const slideDownButton = document.getElementById("slideDownButton");
        const svgContainer =  document.getElementById("svgContainer");

        const rectAnimation =
         KUTE.fromTo("#rect", { translate:[250,250], width: 0, height: 0 }, {translate:[-99,-99], width: 700, height: 700 }, { duration: 2000 });



        // Trigger rendering of content after component mount


        function playAnimation() {
            animationInstance = KUTE.to(svgContainer, { rotate: 360 }, { duration: 10000, easing: 'linear', repeat: Infinity });

            if (!isPlaying){
                animationInstance.start();
                setIsPlaying(true);
            }
            //   KUTE.fromTo(svgContainer, {rotate:0}, {rotate:360}).start();
            setIsRender(false);
        }

        function pauseAnimation() {
            if (animationInstance) {
                animationInstance.stop();
                setIsPlaying(false);
                setIsRender(false);
            }
            animationInstance.pause();

            // rectAnimation.chain(animationInstance);

            // rectAnimation.start();

        }

        function resetAnimation() {
            setIsBorder("white");
            if (animationInstance) {
                animationInstance.stop();
                rectAnimation.stop();
                setIsPlaying(false);
            setIsRender(false);

            }



            // Reset slide animation
            const otherSides = document.querySelectorAll(".side");
            otherSides.forEach(side => side.style.visibility = "visible");

            KUTE.to(svgContainer, { rotate: 0 }).start();

            // Reset all sides
            KUTE.fromTo("#leftSide", { translateX: 0, rotate: 0 }, { translateX: 0, rotate: 0 }, { duration: 1000 }).start();
            KUTE.fromTo("#rightSide", { translateX: 0, rotate: 0 }, { translateX: 0, rotate: 0 }, { duration: 2000 }).start();
            KUTE.fromTo("#topSide", { translateY: 0, rotate: 0 }, { translateY: 0, rotate: 0 }, { duration: 2000 }).start();
            KUTE.fromTo("#bottomSide", { translateY: 0, rotate: 0 }, { translateY: 0, rotate: 0 }, { duration: 2000 }).start();

            // Reset all rectangles
            // KUTE.to("#leftRect", { x: -250, width: 0 }, { duration: 0 }).start();
            // KUTE.to("#rightRect", { x: 250, width: 0 }, { duration: 0 }).start();
            // KUTE.to("#topRect", { y: 250, height: 0 }, { duration: 0 }).start();
            // KUTE.to("#bottomRect", { y: -250, height: 0 }, { duration: 0 }).start();
        }

        function slideLeft() {
            setIsBorder("#158085");
            setIsRender(true);
            // Slide left animation
            const leftSide = document.getElementById("leftSide");
            const leftRect = document.getElementById("leftRect");
            const textBody = document.getElementById("check");
            const leftSideBoundingBox = leftSide.getBBox();
            const leftRectStartX = leftSideBoundingBox.x;
            const leftRectWidth = leftSideBoundingBox.x + leftSideBoundingBox.width;
            const otherSides = document.querySelectorAll(".side:not(#leftSide)");
            otherSides.forEach(side => side.style.visibility = "hidden");





            // KUTE.to("#leftRect", { x: 0, width: leftRectWidth }, { duration: 2000 }).start();
            rectAnimation.start();

        }

        function slideRight() {

                    // Import KUTE.js

        // Define your SVG paths
        const path1 = document.getElementById('path1');
        const path2 = document.getElementById('path2');

        // Define your ellipse paths
        const ellipse1 = document.getElementById('ellipse1');
        const ellipse2 = document.getElementById('ellipse2');


        // Create your KUTE.js animations
        const morph1 = KUTE.to(path1, { path: ellipse1 }, { duration: 2000 });
        const morph2 = KUTE.to(path2, { path: ellipse2 }, { duration: 2000 });

        // Start your animations
        morph1.start();
        morph2.start();

            // KUTE.to("#rightRect", { x: rightRectStartX, width: 500 - rightRectStartX }, { duration: 2000 }).start();
        }



        if (playButton) {
            playButton.addEventListener("click", playAnimation);
        }
        if (pauseButton) {
            pauseButton.addEventListener("click", pauseAnimation);
        }
        if (resetButton) {
            resetButton.addEventListener("click", resetAnimation);
        }
        if (slideLeftButton) {
            slideLeftButton.addEventListener("click", slideLeft);
        }
        if (slideRightButton) {
            slideRightButton.addEventListener("click", slideRight);
        }


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
            if (slideLeftButton) {
                slideLeftButton.removeEventListener("click", slideLeft);
            }
            if (slideRightButton) {
                slideRightButton.removeEventListener("click", slideRight);
            }

        };
    }, []);



    return (
        <div className={styles.container} style={{ position: "relative" }}>
          {!isRender &&   <div style={{ display: 'flex' }}>
                <button type="button" id="playButton">Play</button>
                <button type="button" id="pauseButton">Pause</button>

            </div>
                }

        <div className={styles.svgSection}>
            <svg id="svgContainer"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 500 500"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                style={{ overflow: "visible" }}>

                <g id="content" style={{transformOrigin: "center"}} >
                    <g transform="translate(-4.40941-1.77001)"  >

                        <g id="rightSide" className="side" style={{transformOrigin: "right"}}>
                            <path id="path1" d="M256,256.5v-.5c-333.3-361-333.3,361.6,0,.5Z" fill="#ea7f7a" />
                            <path id="path2" d="M26,256.3c0-18.5,4.1-36.6,11.5-51c5.2-10.1,14.8-23.4,30.9-29.7c17.4-6.8,39-4.4,64.3,7.1c29.1,13.3,61.3,38,96,73.6-34.7,35.6-66.9,60.3-96,73.6-25.2,11.5-46.9,13.9-64.3,7.1-16.1-6.3-25.7-19.6-30.9-29.7-7.4-14.4-11.5-32.5-11.5-51Z" fill="#e0433a" />
                            <text dx="0" dy="0" className={styles.commonText} transform="matrix(1.37033 0 0 1.44551 52.070114 266.115524)" fill="#dee2e2">Contact</text>
                        </g>



                        <ellipse id = 'ellipse1' cx="180" cy="80" rx="100" ry="60" fill='#ea7f7a' />
                        
                        <ellipse id = 'ellipse2' cx="180" cy="80" rx="80" ry="48" fill='#e0433a' />


                        {/* <path id="rect1" d="M10 0 h155 a10 10 0 0 1 10 10 v20 a10 10 0 0 1 -10 10 h-155 a10 10 0 0 1 -10 -10 v-20 a10 10 0 0 1 10 -10" fill="#ea7f7a" />
                        <path id="rect2" d="M10 5 h150 a5 5 0 0 1 5 5 v15 a5 5 0 0 1 -5 5 h-150 a5 5 0 0 1 -5 -5 v-15 a5 5 0 0 1 5 -5" fill="#e0433a" />
 */}

{/* <path id="path1" d="M10 0 h155 a10 10 0 0 1 10 10 v20 a10 10 0 0 1 -10 10 h-155 a10 10 0 0 1 -10 -10 v-20 a10 10 0 0 1 10 -10" fill="#ea7f7a" />
<path id="path2" d="M10 10 h150 a5 5 0 0 1 5 5 v15 a5 5 0 0 1 -5 5 h-150 a5 5 0 0 1 -5 -5 v-15 a5 5 0 0 1 5 -5" fill="#e0433a" />
 */}


                        {/* <text dx="30" dy="30" className={styles.commonText}  fill="#ffffff">Contact</text> */}


                        <g id="rectangle">
                            <rect id="rect"  width="500" height="500" fill="none" stroke={isBorder} strokeDasharray="5,5" />

                            <path fill="#e0433a" style={{visibility:'hidden'}} d="M 8,0
                                h 35.752669
                                a 8,8 0 0 1 8,8
                                v 126.835719
                                a 8,8 0 0 1 -8,8
                                h -35.752669
                                a 8,8 0 0 1 -8,-8
                                v -126.835719
                                a 8,8 0 0 1 8,-8
                                z"/>





{/*
<path id="rect1" d="M10 10 h236 a10 10 0 0 1 10 10 v12 a10 10 0 0 1 -10 10 h-236 a10 10 0 0 1 -10 -10 v-12 a10 10 0 0 1 10 -10" fill="#ea7f7a"/>

<path id="rect2" d="M36 36 h190 a10 10 0 0 1 10 10 v12 a10 10 0 0 1 -10 10 h-190 a10 10 0 0 1 -10 -10 v-12 a10 10 0 0 1 10 -10" fill="#e0433a"/>
 */}

                            <path  style={{visibility:'hidden'}} d="M10 10 h236 a10 10 0 0 1 10 10 v236 a10 10 0 0 1 -10 10 h-236 a10 10 0 0 1 -10 -10 v-236 a10 10 0 0 1 10 -10"  fill="#ea7f7a"/>

                            <path  style={{visibility:'hidden'}} d="M36 36 h190 a10 10 0 0 1 10 10 v190 a10 10 0 0 1 -10 10 h-190 a10 10 0 0 1 -10 -10 v-190 a10 10 0 0 1 10 -10" fill="#e0433a"/>





                            <path id="test1" style={{visibility:'hidden'}} d="M0 0 h43.752669 v142.835719 h-43.752669 Z" fill="#e0433a" strokeWidth="0"/>

                        </g>
                    </g>
                </g>
            </svg>
                </div>
            { isRender && <div className={styles.additionalContent}>
               <span id="check">
               Check and Submit
                </span>
            </div>}
        </div>
    );
}
