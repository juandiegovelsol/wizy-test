import React from "react";
import { ProductListType } from "../../pages/Landing/Landing";
import checkicon from "../../assets/checkicon.svg";
import continueicon from "../../assets/continue.svg";
import "./product-list.scss";

// Define props required for the ProductList component
interface ProductListProps {
  productList: ProductListType[]; // Array of product list items
  checked: boolean[]; // Array to track checked/unchecked items
  setChecked: React.Dispatch<React.SetStateAction<boolean[]>>; // Function to update checked state
}

// ProductList Component: Represents a list of products with checkboxes
const ProductList: React.FC<ProductListProps> = ({
  productList,
  checked = [],
  setChecked,
}) => {
  return (
    <div className="product-list">
      <p className="product-list__label">Select Products</p>

      {/* Container for displaying product cards */}
      <div className="product-list__card-container">
        {productList.length > 0 &&
          productList.map(({ displayTitle, imageUrl }, index) => {
            return (
              <div
                className="product-list__card"
                onClick={() => {
                  // Create a copy of the 'checked' array and toggle the value at 'index'
                  const aux = [...checked];
                  aux[index] = !aux[index];
                  setChecked(aux); // Update 'checked' state with the modified array
                }}
                key={index}
              >
                {/* Product image */}
                <img
                  src={imageUrl}
                  alt="product"
                  className="product-list__card-image"
                />
                {/* Product title */}
                <p className="product-list__card-title">{displayTitle}</p>
                {/* Checkbox icon displayed conditionally based on 'checked' state */}
                <div className="product-list__card-checkbox">
                  {checked[index] && (
                    <img
                      src={checkicon}
                      className="product-list__card-checkicon"
                    />
                  )}
                </div>
              </div>
            );
          })}
      </div>
      {/* Continue icon */}
      <div className="product-list__continue-icon">
        <img src={continueicon} className="product-list__continue-image" />
      </div>
    </div>
  );
};

export default ProductList;
