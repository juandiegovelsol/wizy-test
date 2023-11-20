import React from "react";
import { Dispatch, SetStateAction } from "react";

import "./type-selector.scss";

// Define props required for the TypeSelector component
interface TypeSelectorProps {
  options?: string[];
  setValue: React.Dispatch<React.SetStateAction<string>>; // Function to set the options value
}

// TypeSelector Component: Represents a dropdown selector for choosing options
const TypeSelector: React.FC<TypeSelectorProps> = ({
  options = ["I want to add a topic"],
  setValue,
}) => {
  // Function to handle changes in the dropdown value
  const handleChange = (
    value: string = "",
    setValue: Dispatch<SetStateAction<string>>
  ) => {
    setValue(value); // Update the value using the provided setState function
  };

  return (
    <form className="type-selector">
      {/* Dropdown select element */}
      <select
        className="type-selector__selector"
        onChange={(e) => {
          handleChange(e.target.value, setValue); // Call handleChange function when the value changes
        }}
        defaultValue={"Select here..."} // Default value for the select element
      >
        {/* Default hidden option */}
        <option className="type-selector__option" disabled hidden>
          Select here...
        </option>

        {/* Render options from the provided array */}
        {options.length &&
          options.map((text, index) => (
            <option className="type-selector__option" key={index} value={text}>
              {text}
            </option>
          ))}
      </select>
    </form>
  );
};

export default TypeSelector;
