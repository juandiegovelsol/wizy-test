import React from "react";
import "./custom-button-event.scss";

// Define props for the CustomButtonEvent component that includes an event parameter
interface CustomButtonEventProps {
  text?: string; // Optional text for the button
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Function that handles button click event
  buttonSize?: string; // Optional button size
}

// CustomButtonEvent Component: Represents a customized button in different sizes with an event parameter
const CustomButtonEvent: React.FC<CustomButtonEventProps> = ({
  text = "Continue",
  handleClick = (e) => {
    e.preventDefault();
  },
  buttonSize = "large",
}) => {
  return (
    <button
      className={`customButtonEvent customButtonEvent__${buttonSize}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default CustomButtonEvent;
