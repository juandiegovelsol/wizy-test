import "./custom-button.scss";

const CustomButton = ({
  text = "Continue",
  handleClick = () => {},
  buttonSize = "large",
}) => {
  return (
    <button
      className={`customButton customButton__${buttonSize}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
