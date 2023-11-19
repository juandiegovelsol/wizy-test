import React from "react";
import "./custom-button-event.scss";

interface CustomButtonEventProps {
  text?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonSize?: string;
}

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
