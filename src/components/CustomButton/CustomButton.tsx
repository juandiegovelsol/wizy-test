import "./custom-button.scss";
//Customized button in 3 different sizes
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
