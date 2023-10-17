// PauseButton.js
import React from "react";
import Button from "./Button/Button";

const PauseButton = () => { 

  const handlePause = () => {
    pauseAnimation();
  };

  return (
    <Button
      label="Pause"
      buttonId="pauseButton"
      onClick={handlePause}
    />
  );
};

export default PauseButton;
