import React, { useState } from "react";
import Button from "./Button/Button"; // Make sure to import your Button component

const SlideButton = ({ direction }) => {
 

  return <Button 
  label={`Slide ${direction}`} 
  buttonId={`slide${direction}Button`} 
  />;
};

export default SlideButton;


