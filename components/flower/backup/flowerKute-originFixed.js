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

        var morphTween31 = KUTE.to('#outerBottom' ,  { path: "#outerBottomFrame" }, {
            duration: 1500, easing: 'easingCubicOut'
          });
          var morphTween32 = KUTE.to('#innerBottom' ,  { path: "#innerBottomRect" }, {
            duration: 1500, easing: 'easingCubicOut'
          });

          var morphTween31Inverse = KUTE.to('#outerBottomFrame' ,  { path: "#outerBottom" }, {
            duration: 1500, easing: 'easingCubicOut'
          });
          var morphTween32Inverse = KUTE.to('#innerBottomRect' ,  { path: "#innerBottom" }, {
            duration: 1500, easing: 'easingCubicOut'
          });

          var morphTween41 = KUTE.to('#innerLeft' ,  { path: "#innerLeftRect" , attr:{ fill: "#e0433a" } }, {
            duration: 1500, easing: 'easingCubicOut'
          });

          var morphTween42 = KUTE.to('#outerLeft' ,  { path: "#outerLeftFrame" , attr:{ fill: "#ea7f7a" } }, {
            duration: 1500, easing: 'easingCubicOut'
          });

          var morphTween21 = KUTE.to('#outerRight' ,  { path: "#outerRightFrame" , attr:{ fill: "#1fbcc5" } }, {
            duration: 1500, easing: 'easingCubicOut'
          } );
    
        var morphTween22 = KUTE.to('#innerRight' ,  { path: "#innerRightRect" , attr:{ fill: "#158085" } }, {
            duration: 1500, easing: 'easingCubicOut'
          });

          var morphTween11 = KUTE.to('#innerTop' ,  { path: innerTopRect }, {
            duration: 1500, easing: 'easingCubicOut'
          });


          var morphTween12 = KUTE.to('#outerTop' ,  { path: outerTopFrame , attr:{ fill: "#caacb9" } }, {
            duration: 1500, easing: 'easingCubicOut'
          });

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
            // animationInstance.pause();

            // rectAnimation.chain(animationInstance);

            rectAnimation.start();

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
            // const leftRect = document.getElementById("leftRect");
            const leftSideBoundingBox = leftSide.getBBox();
            const leftRectStartX = leftSideBoundingBox.x;
            const leftRectWidth = leftSideBoundingBox.width; // Width of the translated element
            const otherSides = document.querySelectorAll(".side:not(#leftSide)");
            otherSides.forEach(side => side.style.visibility = "hidden");




       
            const leftAnimation=  KUTE.fromTo("#leftSide",  { rotate: 0, translateX:0 }, { rotate:360 ,translateX: -350 }, { duration: 2000 });

          
            

         
              leftAnimation.start();
              morphTween41.start()
              morphTween42.start()


            // Create a rectangle matching the size of the translated element
            // const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            // rect.setAttribute("x", leftRectStartX);
            // rect.setAttribute("y", leftSideBoundingBox.y);
            // rect.setAttribute("width", leftRectWidth);
            // rect.setAttribute("height", leftSideBoundingBox.height);
            // rect.setAttribute("fill", "#158085");
            // rect.setAttribute("stroke", "none");
            // rect.setAttribute("rx", "10"); // Border radius
        
            // // Add the rectangle to the SVG container
            // leftSide.appendChild(rect);
        
            // // Create text element
            // const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            // text.textContent = "Your Text Here";
            // text.setAttribute("fill", "#dee2e2");
            // text.setAttribute("text-anchor", "middle"); // Center the text horizontally
            // text.setAttribute("dominant-baseline", "middle"); // Center the text vertically
        
            // // Position the text in the center of the rectangle
            // text.setAttribute("x", parseFloat(leftRectStartX) + (parseFloat(leftRectWidth) / 2));
            // text.setAttribute("y", parseFloat(leftSideBoundingBox.y) + (parseFloat(leftSideBoundingBox.height) / 2));
        
            // // Add text to the SVG container
            // leftSide.appendChild(text);
        
            // Start the sliding animation
            // KUTE.fromTo("#leftSide", { rotate3d: [0, 0, 0], translate3d: [0, 0, 0] }, { rotate3d: [0, 0, 360], translate3d: [350, 0, 1] }, { duration: 2000 }).start();
        }
        
        

        function slideRight() {

            setIsBorder("#e0433a");
            setIsRender(true);


       
            
            // Create animation instance

            // Slide right animation
            const rightSide = document.getElementById("rightSide");
            const rightRect = document.getElementById("rightRect");
            const rightSideBoundingBox = rightSide.getBBox();
            const rightRectStartX = rightSideBoundingBox.x;
            const otherSides = document.querySelectorAll(".side:not(#rightSide)");
            otherSides.forEach(side => side.style.visibility = "hidden");


          
        
            


            
            // KUTE.fromTo("#rightSide", { rotate3d: [0,0,0], translate3d: [0, 0, 0] }, { rotate3d: [0,0,360], translate3d: [350, 0, 1] }, { duration: 2000 }).start();
          const rightAnimation=  KUTE.fromTo("#rightSide",  { rotate: 0, translateX:0 }, { rotate:360 ,translateX: 350 }, { duration: 2000 });

          rightAnimation.start();
          morphTween21.start();
          morphTween22.start();

            // KUTE.fromTo("#rightSide", { rotate: 0, translateX: 0 },
            // { rotate: 360, translateX: -350}, { duration: 2000 }).start();
            // rectAnimation.start();
            
            // KUTE.to("#rightRect", { x: rightRectStartX, width: 500 - rightRectStartX }, { duration: 2000 }).start();
        }

        function slideUp() {
            setIsBorder("#86556a");
            setIsRender(true);


            // Slide up animation
            const topSide = document.getElementById("topSide");
            const topRect = document.getElementById("topRect");
            const topSideBoundingBox = topSide.getBBox();
            const topRectStartY = topSideBoundingBox.y + topSideBoundingBox.height;
            const otherSides = document.querySelectorAll(".side:not(#topSide)");
            otherSides.forEach(side => side.style.visibility = "hidden");

            KUTE.fromTo("#topSide", { rotate: 0, translateY: 0 }, { rotate: 360, translateY: -350 }, { duration: 2000 }).start();
            // rectAnimation.start();

        
           

              morphTween11.start();
              morphTween12.start();
           
            // KUTE.to("#topRect", { y: 0, height: 2 * topRectStartY }, { duration: 2000 }).start();
        }

        function slideDown() {
            setIsBorder("#355346");
            setIsRender(true);

            // Slide down animation
            const bottomSide = document.getElementById("bottomSide");
            const bottomRect = document.getElementById("bottomRect");
            const bottomSideBoundingBox = bottomSide.getBBox();
            const bottomRectStartY = bottomSideBoundingBox.y;
            const otherSides = document.querySelectorAll(".side:not(#bottomSide)");
            otherSides.forEach(side => side.style.visibility = "hidden");
            // rectAnimation.start();
            KUTE.fromTo("#bottomSide", { rotate3d: [0,0,0], translate3d: [0, 0, 0] }, { rotate3d:[ 0,0,360], translate3d: [0, 350, 1] }, { duration: 2000 }).start();
            // KUTE.to("#bottomRect", { y: bottomRectStartY, height: 2 * bottomRectStartY }, { duration: 2000 }).start();
            
        
                  
            morphTween31.start();
            morphTween32.start();

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
          {/* {!isRender &&   <div style={{ display: 'flex' }}>
                <button type="button" id="playButton">Play</button>
                <button type="button" id="pauseButton">Pause</button>
              
            </div>
                } */}
        
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
                        <g id="rightSide" className="side" style={{transformOrigin: "left"}}>
                            <path id="outerRight" d="M256,255.5v.5c333.3,361,333.3-361.6,0-.5Z" fill="#1fbcc5" />
                            <path id="innerRight" d="M283.3,255.7c34.7-35.6,66.9-60.3,96-73.6c25.2-11.5,46.9-13.9,64.3-7.1c16.1,6.3,25.7,19.6,30.9,29.7c7.4,14.3,11.5,32.4,11.5,51c0,18.5-4.1,36.6-11.5,51-5.2,10.1-14.8,23.4-30.9,29.7-17.4,6.8-39,4.4-64.3-7.1-29.1-13.3-61.3-38-96-73.6Z" fill="#158085" />
                            <path id="innerRightRect" style={{visibility:"hidden"}} d="M 354.067 230 L 442.933 230 C 450.149 230 456 235.673 456 242.67 L 456 264.33 C 456 271.327 450.149 277 442.933 277 L 354.067 277 C 346.851 277 341 271.327 341 264.33 L 341 242.67 C 341 235.673 346.851 230 354.067 230 Z" />
                            <path id="outerRightFrame" style={{visibility:"hidden"}} d="M 349.3 223 H 448.7 A 14.3 14.3 0 0 1 463 237.3 V 269.7 A 14.3 14.3 0 0 1 448.7 284 H 349.3 A 14.3 14.3 0 0 1 335 269.7 V 237.3 A 14.3 14.3 0 0 1 349.3 223 Z M 344 242.397 V 264.603 A 9.8 9.8 0 0 0 353.8 274.403 H 444.2 A 9.8 9.8 0 0 0 454 264.603 V 242.397 A 9.8 9.8 0 0 0 444.2 232.597 H 353.8 A 9.8 9.8 0 0 0 344 242.397 Z" />
                            <text dx="0" dy="0" className={styles.commonText} transform="matrix(1.37033 0 0 1.44551 357.747071 269.761256)" fill="#dee2e2">Skills</text>
                        </g>
                        <g id="bottomSide" className="side" style={{transformOrigin:"top"}}>
                            <path id="outerBottom" d="M256.5,256h-.5c-361,333.3,361.6,333.3.5,0Z" fill="#79aa95" />
                            <path id="innerBottom" d="M256.3,486c-18.5,0-36.6-4.1-51-11.5-10.1-5.2-23.4-14.8-29.7-30.9-6.8-17.4-4.4-39,7.1-64.3c13.3-29.1,38-61.3,73.6-96c35.6,34.7,60.3,66.9,73.6,96c11.5,25.2,13.9,46.9,7.1,64.3-6.3,16.1-19.6,25.7-29.7,30.9-14.4,7.4-32.5,11.5-51,11.5Z" fill="#355346" />
                           
                            <path id="outerBottomFrame" style={{visibility:"hidden"}} d= "M 209.3 377 H 308.7 A 14.3 14.3 0 0 1 323 391.3 V 423.7 A 14.3 14.3 0 0 1 308.7 438 H 209.3 A 14.3 14.3 0 0 1 195 423.7 V 391.3 A 14.3 14.3 0 0 1 209.3 377 Z M 204 396.397 V 418.603 A 9.8 9.8 0 0 0 213.8 428.403 H 304.2 A 9.8 9.8 0 0 0 314 418.603 V 396.397 A 9.8 9.8 0 0 0 304.2 386.597 H 213.8 A 9.8 9.8 0 0 0 204 396.397 Z" />
          
                            <path id="innerBottomRect" style={{visibility:"hidden"}} d= "M 214.067 384 L 302.933 384 C 310.149 384 316 389.673 316 396.67 L 316 418.33 C 316 425.327 310.149 431 302.933 431 L 214.067 431 C 206.851 431 201 425.327 201 418.33 L 201 396.67 C 201 389.673 206.851 384 214.067 384 Z" />
 
                            <text dx="0" dy="0" className={styles.commonText} transform="matrix(1.37033 0 0 1.44551 208.291386 419.984125)" fill="#dee2e2">About</text>
                        </g>
                        <g id="leftSide" className="side" style={{transformOrigin: "right"}}>
                            <path id="outerLeft" d="M256,256.5v-.5c-333.3-361-333.3,361.6,0,.5Z" fill="#ea7f7a" />
                            <path id="innerLeft" d="M26,256.3c0-18.5,4.1-36.6,11.5-51c5.2-10.1,14.8-23.4,30.9-29.7c17.4-6.8,39-4.4,64.3,7.1c29.1,13.3,61.3,38,96,73.6-34.7,35.6-66.9,60.3-96,73.6-25.2,11.5-46.9,13.9-64.3,7.1-16.1-6.3-25.7-19.6-30.9-29.7-7.4-14.4-11.5-32.5-11.5-51Z" fill="#e0433a" />
                            <path id="outerLeftFrame" style={{visibility:"hidden"}} d="M 56.3 218 H 183.7 A 14.3 14.3 0 0 1 198 232.3 V 264.7 A 14.3 14.3 0 0 1 183.7 279 H 56.3 A 14.3 14.3 0 0 1 42 264.7 V 232.3 A 14.3 14.3 0 0 1 56.3 218 Z M 52.97 236.412 V 260.588 A 8.815 8.815 0 0 0 61.785 269.403 H 178.215 A 8.815 8.815 0 0 0 187.03 260.588 V 236.412 A 8.815 8.815 0 0 0 178.215 227.597 H 61.785 A 8.815 8.815 0 0 0 52.97 236.412 Z" />

                            <path id="innerLeftRect" style={{visibility:"hidden"}} d= "M 66.681 225 L 173.319 225 C 181.979 225 189 230.673 189 237.67 L 189 259.33 C 189 266.327 181.979 272 173.319 272 L 66.681 272 C 58.021 272 51 266.327 51 259.33 L 51 237.67 C 51 230.673 58.021 225 66.681 225 Z" />
           
                            <text dx="0" dy="0" className={styles.commonText} transform="matrix(1.37033 0 0 1.44551 52.070114 266.115524)" fill="#dee2e2">Contact</text>
                        </g>
                        <g id="topSide" className="side" style={{transformOrigin:"bottom"}} >
                            <path id="outerTop" d="M255.5,256h.5c361-333.3-361.6-333.3-.5,0Z" fill="#caacb9" />
                            <path id="innerTop" d="M255.7,228.7c-35.6-34.7-60.3-66.9-73.6-96-11.5-25.2-13.9-46.9-7.1-64.3c6.3-16.1,19.6-25.7,29.7-30.9C219,30.1,237.1,26,255.7,26c18.5,0,36.6,4.1,51,11.5c10.1,5.2,23.4,14.8,29.7,30.9c6.8,17.4,4.4,39-7.1,64.3-13.3,29.1-38,61.3-73.6,96Z" fill="#86556a" />
                            <path id="innerTopRect" style={{visibility:"hidden"}} d="M 209.59 81.702 H 298.995 A 10 10 0 0 1 308.995 91.702 V 113.561 A 10 10 0 0 1 298.995 123.561 H 209.59 A 10 10 0 0 1 199.59 113.561 V 91.702 A 10 10 0 0 1 209.59 81.702 Z" />
        
                            <path id="outerTopFrame" style={{visibility:"hidden"}} d="M 206.302 74 H 302.601 A 14.302 14.302 0 0 1 316.903 88.302 V 116.906 A 14.302 14.302 0 0 1 302.601 131.208 H 206.302 A 14.302 14.302 0 0 1 192 116.906 V 88.302 A 14.302 14.302 0 0 1 206.302 74 Z M 200.735 92.348 V 112.86 A 9.935 9.935 0 0 0 210.67 122.795 H 298.234 A 9.935 9.935 0 0 0 308.168 112.86 V 92.348 A 9.935 9.935 0 0 0 298.234 82.413 H 210.67 A 9.935 9.935 0 0 0 200.735 92.348 Z" />
            
                            <text dx="0" dy="0" className={styles.commonText} transform="matrix(1.37033 0 0 1.38006 204.487665 117.479631)" fill="#dee2e2">Home</text>
                        </g>     
                        <g id="rectangle">
                            <rect id="rect"  width="500" height="500" fill="none" stroke={isBorder} strokeDasharray="5,5" />
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
