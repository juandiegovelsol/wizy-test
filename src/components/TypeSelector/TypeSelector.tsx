import React from "react";
import { Dispatch, SetStateAction } from "react";

import "./type-selector.scss";

interface TypeSelectorProps {
  options?: string[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const TypeSelector: React.FC<TypeSelectorProps> = ({
  options = ["I want to add a topic"],
  setValue,
}) => {
  const handleChange = (
    value: string = "",
    setValue: Dispatch<SetStateAction<string>>
  ) => {
    setValue(value);
  };

  return (
    <form className="type-selector">
      <select
        className="type-selector__selector"
        onChange={(e) => {
          handleChange(e.target.value, setValue);
        }}
        defaultValue={"Select here..."}
      >
        <option className="type-selector__option" disabled hidden>
          Select here...
        </option>
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
