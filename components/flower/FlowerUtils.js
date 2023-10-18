
export function showAndHideElementsToShowIds(showIds, hideIds) {
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


export function handleSlide(direction, svgElement, styles) {
  const slideAnimations = {
    // Define slide animations for each direction
    // (omitting other directions for brevity)
    Left: {
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
    Right: {
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
    Up: {
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
    Down: {
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

  const slideInfo = slideAnimations[direction];

  if (slideInfo) {
    // Function to apply the sliding animation
    function applySlideAnimation() {
      // Apply the sliding animation to the SVG container
      svgElement.classList.add(styles[slideInfo.slideClass]);

      // Hide elements
      for (const elementId of slideInfo.hideIds) {
        const element = document.getElementById(elementId);
        if (element) {
          element.style.display = "none";
        }
      }

      // Show elements
      for (const elementId of slideInfo.showIds) {
        const element = document.getElementById(elementId);
        if (element) {
          element.style.display = "block";
        }
      }
    }

    // Apply the sliding animation when one of the elements in showIds is clicked
    for (const elementId of slideInfo.showIds) {
      const element = document.getElementById(elementId);
      if (element) {
        element.addEventListener("click", applySlideAnimation);
      }
    }

    // Clean up the event listeners when not needed
    return () => {
      for (const elementId of slideInfo.showIds) {
        const element = document.getElementById(elementId);
        if (element) {
          element.removeEventListener("click", applySlideAnimation);
        }
      }
    };
  }
}


// export function handleSlide(direction, svgElement, styles) {
//   const slideButton = document.getElementById(`slide${direction}Button`);

//   const slide = () => {
//     // Define slide animations for each direction
//     const slideAnimations = {
//       Left: {
//         slideClass: "slideLeft",
//         showIds: [
//           "outerRightLeafLayer",
//           "innerRightLeafLayer",
//           "rightLeafText",
//         ],
//         hideIds: [
//           "outerLeftLeafLayer",
//           "innerLeftLeafLayer",
//           "outerBottomLeafLayer",
//           "innerBottemLeafLayer",
//           "outerTopLeafLayer",
//           "innerTopLeafLayer",
//           "leftLeafText",
//           "bottomLeafText",
//           "topLeafText",
//         ],
//       },
//       Right: {
//         slideClass: "slideRight",
//         showIds: ["outerLeftLeafLayer", "innerLeftLeafLayer", "leftLeafText"],
//         hideIds: [
//           "outerRightLeafLayer",
//           "innerRightLeafLayer",
//           "outerBottomLeafLayer",
//           "innerBottemLeafLayer",
//           "outerTopLeafLayer",
//           "innerTopLeafLayer",
//           "rightLeafText",
//           "bottomLeafText",
//           "topLeafText",
//         ],
//       },
//       Up: {
//         slideClass: "slideUp",
//         showIds: [
//           "outerBottomLeafLayer",
//           "innerBottemLeafLayer",
//           "bottomLeafText",
//         ],
//         hideIds: [
//           "outerTopLeafLayer",
//           "innerTopLeafLayer",
//           "outerLeftLeafLayer",
//           "innerLeftLeafLayer",
//           "outerRightLeafLayer",
//           "innerRightLeafLayer",
//           "leftLeafText",
//           "rightLeafText",
//           "topLeafText",
//         ],
//       },
//       Down: {
//         slideClass: "slideDown",
//         showIds: ["outerTopLeafLayer", "innerTopLeafLayer", "topLeafText"],
//         hideIds: [
//           "outerBottomLeafLayer",
//           "innerBottemLeafLayer",
//           "outerLeftLeafLayer",
//           "innerLeftLeafLayer",
//           "outerRightLeafLayer",
//           "innerRightLeafLayer",
//           "leftLeafText",
//           "rightLeafText",
//           "bottomLeafText",
//         ],
//       },
//     };

//     const slideInfo = slideAnimations[direction];

//     if (slideInfo) {
//       // Apply the sliding animation to the SVG container
//       svgElement.classList.add(styles[slideInfo.slideClass]);




//       // Hide elements
//       for (const elementId of slideInfo.hideIds) {
//         const element = document.getElementById(elementId);
//         if (element) {
//           element.style.display = "none";
//         }
//       }

//       // Show elements
//       for (const elementId of slideInfo.showIds) {
//         const element = document.getElementById(elementId);
//         if (element) {
//           element.style.display = "block";
//         }
//       }
//     }
//   };

//   if (slideButton) {
//     slideButton.addEventListener("click", slide);
//   }

//   return () => {
//     if (slideButton) {
//       slideButton.removeEventListener("click", slide);
//     }
//   };
// }

export const arrayOfFlowerLayers = [
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
];
