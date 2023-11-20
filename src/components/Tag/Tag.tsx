import React, { ReactNode } from "react";
import { CustomButtonEvent } from "../CustomButtonEvent";
import { ProductList } from "../ProductList";
import { ProductListType } from "../../pages/Landing/Landing";
import "./tag.scss";

interface TagProps {
  tag?: string;
  setTag: React.Dispatch<React.SetStateAction<string>>;
  tags?: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  productList: ProductListType[];
  checked: boolean[];
  setChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
  children?: ReactNode;
}

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
      <div className="tag__left">
        <ProductList
          productList={productList}
          checked={checked}
          setChecked={setChecked}
        />
      </div>
      <div className="tag__line"></div>
      <div className="tag__rigth">
        <form className="tag__form">
          <label className="tag__text">Add Products Tag</label>
          <div className="tag__input-container">
            <input
              type="text"
              className="tag__input"
              placeholder="T-shirt"
              value={tag}
              onChange={(e) => {
                setTag(e.target.value);
              }}
            />
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
          <div></div>
          <div className="tag__buttons">{children}</div>
        </form>
      </div>
    </div>
  );
};

export default Tag;
