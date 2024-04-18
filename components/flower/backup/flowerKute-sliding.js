import React, { useState, useEffect } from "react";
import styles from "../../../styles/flower.module.css";
import KUTE from 'kute.js';

let animationInstance; // Declare animationInstance globally

export default function Flower() {
    const [isPlaying, setIsPlaying] = useState(false);
    let animationInstance = null;

    useEffect(() => {
        const svgContainer = document.getElementById("svgContainer");
        const playButton = document.getElementById("playButton");
        const pauseButton = document.getElementById("pauseButton");
        const resetButton = document.getElementById("resetButton");
        const slideLeftButton = document.getElementById("slideLeftButton");
        const slideRightButton = document.getElementById("slideRightButton");
        const slideUpButton = document.getElementById("slideUpButton");
        const slideDownButton = document.getElementById("slideDownButton");

        function playAnimation() {
            const svgContainer = document.getElementById("svgContainer");
            animationInstance = KUTE.fromTo(svgContainer, {rotate:0}, {rotate:360}).start();
            setIsPlaying(true);

            // const rightSideBoundingBox = document.getElementById("rightSide").getBBox();
            // const leftSideBoundingBox = document.getElementById("leftSide").getBBox();
            // const topSideBoundingBox = document.getElementById("topSide").getBBox();
            // const bottomSideBoundingBox = document.getElementById("bottomSide").getBBox();


            // console.log(`(rightSide.x, rightside.y, rightside.width, rightside.height :)" + ${rightSideBoundingBox.x } ${rightSideBoundingBox.y} ${rightSideBoundingBox.width} ${rightSideBoundingBox.height}`)
            // console.log(`(leftSide.x, leftside.y, leftside.width, leftside.height :)" + ${leftSideBoundingBox.x } ${leftSideBoundingBox.y} ${leftSideBoundingBox.width} ${leftSideBoundingBox.height}`)
            // console.log(`(topSide.x, topside.y, topside.width, topside.height :)" + ${topSideBoundingBox.x } ${topSideBoundingBox.y} ${topSideBoundingBox.width} ${topSideBoundingBox.height}`)
            // console.log(`(bottomSide.x, bottomside.y, bottomside.width, bottomside.height :)" + ${(bottomSideBoundingBox.x).toString() } ${bottomSideBoundingBox.y} ${bottomSideBoundingBox.width} ${bottomSideBoundingBox.height}`)

        }

        function pauseAnimation() {
            if (animationInstance) {
                animationInstance.pause();
                setIsPlaying(false);
            }
        }

        function resetAnimation() {
            if (animationInstance) {
                animationInstance.stop();
                setIsPlaying(false);
            }
            // Reset slide animation
            const otherSides = document.querySelectorAll(".side");
            otherSides.forEach(side => side.style.visibility = "visible");
            KUTE.to("#leftSide", { translateX: 0 }, { duration: 0 }).start();
            KUTE.to("#rightSide", { translateX: 0 }, { duration: 0 }).start();
            KUTE.to("#topSide", { translateY: 0 }, { duration: 0 }).start();
            KUTE.to("#bottomSide", { translateY: 0 }, { duration: 0 }).start();
            KUTE.to("#leftRect", { width: 0 }, { duration: 0 }).start();
            KUTE.to("#rightRect", { width: 0 }, { duration: 0 }).start();
            KUTE.to("#topRect", { height: 0 }, { duration: 0 }).start();
            KUTE.to("#bottomRect", { height: 0 }, { duration: 0 }).start();
        }

        function slideLeft() {
            // Slide left animation
            const leftSide = document.getElementById("leftSide");
            const leftRect = document.getElementById("leftRect");
            const leftSideBoundingBox = leftSide.getBBox();
            const leftRectStartX = leftSideBoundingBox.x ;
            const leftRectWidth = leftSideBoundingBox.x + leftSideBoundingBox.width;
            const otherSides = document.querySelectorAll(".side:not(#leftSide)");
            otherSides.forEach(side => side.style.visibility = "hidden");
            KUTE.to("#leftSide", { translateX: 350 }, { duration: 2000 }).start();
            KUTE.to("#leftRect", { x: 0, width: leftRectWidth }, { duration: 2000 }).start();
        }

        function slideRight() {
            // Slide right animation
            const rightSide = document.getElementById("rightSide");
            const rightRect = document.getElementById("rightRect");
            const rightSideBoundingBox = rightSide.getBBox();
            const rightRectStartX = rightSideBoundingBox.x;
            console.log(rightRectStartX);
            const otherSides = document.querySelectorAll(".side:not(#rightSide)");
            otherSides.forEach(side => side.style.visibility = "hidden");
            KUTE.to("#rightSide", { translateX: -350 }, { duration: 2000 }).start();
            KUTE.to("#rightRect", { x: rightRectStartX, width: 500 - rightRectStartX }, { duration: 2000 }).start();
        }

        function slideUp() {
            // Slide up animation
            const topSide = document.getElementById("topSide");
            const topRect = document.getElementById("topRect");
            const topSideBoundingBox = topSide.getBBox();
            const topRectStartY = topSideBoundingBox.y + topSideBoundingBox.height;
            console.log(topRectStartY);
            const otherSides = document.querySelectorAll(".side:not(#topSide)");
            otherSides.forEach(side => side.style.visibility = "hidden");
            KUTE.to("#topSide", { translateY: -350 }, { duration: 2000 }).start();
            KUTE.to("#topRect", { y: 0, border: "10px solid black", height: 2 * topRectStartY }, { duration: 2000 }).start();
        }

        function slideDown() {
            // Slide down animation
            const bottomSide = document.getElementById("bottomSide");
            const bottomRect = document.getElementById("bottomRect");
            const bottomSideBoundingBox = bottomSide.getBBox();
            const bottomRectStartY = bottomSideBoundingBox.y;
            const otherSides = document.querySelectorAll(".side:not(#bottomSide)");
            otherSides.forEach(side => side.style.visibility = "hidden");
            KUTE.to("#bottomSide", { translateY: 350 }, { duration: 2000 }).start();
            KUTE.to("#bottomRect", { y: bottomRectStartY, height: 2 * bottomRectStartY }, { duration: 2000 }).start();
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
        if (slideUpButton) {
            slideUpButton.addEventListener("click", slideUp);
        }
        if (slideDownButton) {
            slideDownButton.addEventListener("click", slideDown);
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
            if (slideUpButton) {
                slideUpButton.removeEventListener("click", slideUp);
            }
            if (slideDownButton) {
                slideDownButton.removeEventListener("click", slideDown);
            }
        };
    }, []);

    return (
        <div className={styles.container} style={{ position: "relative" }}>

<div style={{ display: 'flex' }}>
    


            <button type="button" id="playButton">
                Play
            </button>
            <button type="button" id="pauseButton">
                Pause
            </button>
            <button type="button" id="resetButton">
                Reset
            </button>
            <button type="button" id="slideLeftButton">
                Slide Left
            </button>
            <button type="button" id="slideRightButton">
                Slide Right
            </button>
            <button type="button" id="slideUpButton">
                Slide Up
            </button>
            <button type="button" id="slideDownButton">
                Slide Down
            </button>
</div>
           
            
            <div className={styles.rectangularContainer}>
            <svg id="svgContainer"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 500 500"                
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision">
                <g transform="matrix(.643552 0 0 .641281 79.783699 72.999341)">
                    <g transform="translate(-4.40941-1.77001)">
                        <g id="leftSide" className="side">
                            <path d="M256,255.5v.5c333.3,361,333.3-361.6,0-.5Z" fill="#1fbcc5"/>
                            <path d="M283.3,255.7c34.7-35.6,66.9-60.3,96-73.6c25.2-11.5,46.9-13.9,64.3-7.1c16.1,6.3,25.7,19.6,30.9,29.7c7.4,14.3,11.5,32.4,11.5,51c0,18.5-4.1,36.6-11.5,51-5.2,10.1-14.8,23.4-30.9,29.7-17.4,6.8-39,4.4-64.3-7.1-29.1-13.3-61.3-38-96-73.6Z" fill="#158085"/>
                            <text dx="0" dy="0" className={styles.commonText} transform="matrix(1.37033 0 0 1.44551 357.747071 269.761256)" fill="#dee2e2">Skills</text>
                            <rect id="leftRect" x="-250" y="0" width="0" height="500" fill="#1fbcc5" />
                        </g>
                        <g id="bottomSide" className="side">
                            <path d="M256.5,256h-.5c-361,333.3,361.6,333.3.5,0Z" fill="#79aa95"/>
                            <path d="M256.3,486c-18.5,0-36.6-4.1-51-11.5-10.1-5.2-23.4-14.8-29.7-30.9-6.8-17.4-4.4-39,7.1-64.3c13.3-29.1,38-61.3,73.6-96c35.6,34.7,60.3,66.9,73.6,96c11.5,25.2,13.9,46.9,7.1,64.3-6.3,16.1-19.6,25.7-29.7,30.9-14.4,7.4-32.5,11.5-51,11.5Z" fill="#355346"/>
                            <text dx="0" dy="0" className={styles.commonText} transform="matrix(1.37033 0 0 1.44551 208.291386 419.984125)" fill="#dee2e2">About</text>
                            <rect id="bottomRect" x="0" y="-250" width="500" height="0" fill="#79aa95" />
                        </g>
                        <g id="rightSide" className="side">
                            <path d="M256,256.5v-.5c-333.3-361-333.3,361.6,0,.5Z" fill="#ea7f7a"/>
                            <path d="M26,256.3c0-18.5,4.1-36.6,11.5-51c5.2-10.1,14.8-23.4,30.9-29.7c17.4-6.8,39-4.4,64.3,7.1c29.1,13.3,61.3,38,96,73.6-34.7,35.6-66.9,60.3-96,73.6-25.2,11.5-46.9,13.9-64.3,7.1-16.1-6.3-25.7-19.6-30.9-29.7-7.4-14.4-11.5-32.5-11.5-51Z" fill="#e0433a"/>
                            <text dx="0" dy="0" className={styles.commonText} transform="matrix(1.37033 0 0 1.44551 52.070114 266.115524)" fill="#dee2e2">Contact</text>
                            <rect id="rightRect" x="250" y="0" width="0" height="500" fill="#ea7f7a" />
                        </g>
                        <g id="topSide" className="side">
                            <path d="M255.5,256h.5c361-333.3-361.6-333.3-.5,0Z" fill="#caacb9"/>
                            <path d="M255.7,228.7c-35.6-34.7-60.3-66.9-73.6-96-11.5-25.2-13.9-46.9-7.1-64.3c6.3-16.1,19.6-25.7,29.7-30.9C219,30.1,237.1,26,255.7,26c18.5,0,36.6,4.1,51,11.5c10.1,5.2,23.4,14.8,29.7,30.9c6.8,17.4,4.4,39-7.1,64.3-13.3,29.1-38,61.3-73.6,96Z" fill="#86556a"/>
                            <text dx="0" dy="0" className={styles.commonText} transform="matrix(1.37033 0 0 1.38006 204.487665 117.479631)" fill="#dee2e2">Home</text>
                            <rect id="topRect" x="0" y="250" width="500" height="0" fill="#caacb9" />
                        </g>
                    </g>
                </g>
            </svg>
            <div className={styles.additionalContent}>
                    CHECKCHECK CHECK check CHECKCHECK
                </div>
            </div>
        </div>
    );
}
