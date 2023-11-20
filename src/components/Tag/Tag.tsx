import React, { ReactNode } from "react";
import { CustomButtonEvent } from "../CustomButtonEvent";
import { ProductList } from "../ProductList";
import { ProductListType } from "../../pages/Landing/Landing";
import "./tag.scss";

// Define props required for the Tag component
interface TagProps {
  tag?: string;
  setTag: React.Dispatch<React.SetStateAction<string>>; // Function to set tag value
  tags?: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>; // Function to set tags array
  productList: ProductListType[]; // Array of product list items
  checked: boolean[];
  setChecked: React.Dispatch<React.SetStateAction<boolean[]>>; // Function to update checked state
  children?: ReactNode;
}

// Tag Component: Represents a section for adding tags to products
const Tag: React.FC<TagProps> = ({
  tag = "",
  setTag,
  tags = [""],
  setTags,
  productList = [],
  checked = [],
  setChecked,
  children,
}) => {
  return (
    <div className="tag">
      {/* Left section for displaying list of products */}
      <div className="tag__left">
        <ProductList
          productList={productList}
          checked={checked}
          setChecked={setChecked}
        />
      </div>

      {/* Separator line */}
      <div className="tag__line"></div>

      {/* Rigth section for entering a tag*/}
      <div className="tag__rigth">
        <form className="tag__form">
          <label className="tag__text">Add Products Tag</label>
          <div className="tag__input-container">
            {/* Input field for entering a tag */}
            <input
              type="text"
              className="tag__input"
              placeholder="T-shirt"
              value={tag}
              onChange={(e) => {
                setTag(e.target.value);
              }}
            />
            {/* Button to add the entered tag to the tags array */}
            <CustomButtonEvent
              text="Add"
              handleClick={(e) => {
                e.preventDefault();
                if (tag !== "") {
                  setTags((prev) => [...prev, tag]);
                }
              }}
              buttonSize="small"
            />
          </div>

          {/* Display the list of tags */}
          <label className="tag__text">Tags to send</label>
          <ul className="tag__list">
            {tags.length > 0 &&
              tags.map((tag, index) => {
                return tag !== "" ? (
                  <li className="tag__list-element" key={index}>
                    {tag}
                  </li>
                ) : (
                  <></>
                );
              })}
          </ul>

          {/* Container for additional buttons or elements */}
          <div className="tag__buttons">{children}</div>
        </form>
      </div>
    </div>
  );
};

export default Tag;
