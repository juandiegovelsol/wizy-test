import React, { ReactNode } from "react";
import { ProductList } from "../ProductList";
import { ProductListType } from "../../pages/Landing/Landing";
import "./product-info.scss";

// Define the props required for the ProductInfo component
interface ProductInfoProps {
  info?: string;
  setInfo: React.Dispatch<React.SetStateAction<string>>; // Function to set state for info (string type)
  productList: ProductListType[]; // Array of ProductListType
  checked: boolean[];
  setChecked: React.Dispatch<React.SetStateAction<boolean[]>>; // Function to set state for checked (array of booleans)
  children?: ReactNode; // Optional children prop
}

// ProductInfo Component: Represents a modal window for adding product information to a list of products
const ProductInfo: React.FC<ProductInfoProps> = ({
  info = "",
  setInfo,
  productList = [],
  checked = [],
  setChecked,
  children,
}) => {
  return (
    <div className="product">
      {/* Left section containing ProductList component */}
      <div className="product__left">
        <ProductList
          productList={productList}
          checked={checked}
          setChecked={setChecked}
        />
      </div>
      {/* Separator line */}
      <div className="product__line"></div>
      {/* Right section containing form for adding product information */}
      <div className="product__rigth">
        <form className="product__form">
          <label className="product__text">Add Products Info</label>
          <input
            type="text"
            className="product__input"
            placeholder="This shirt is made of cotton"
            value={info}
            onChange={(e) => {
              setInfo(e.target.value);
            }}
          />
          <div className="product__buttons">{children}</div>
        </form>
      </div>
    </div>
  );
};

export default ProductInfo;
