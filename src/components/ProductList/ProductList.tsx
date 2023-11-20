import React from "react";
import { ProductListType } from "../../pages/Landing/Landing";
import checkicon from "../../assets/checkicon.svg";
import continueicon from "../../assets/continue.svg";
import "./product-list.scss";

interface ProductListProps {
  productList: ProductListType[];
  checked: boolean[];
  setChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const ProductList: React.FC<ProductListProps> = ({
  productList,
  checked = [],
  setChecked,
}) => {
  return (
    <div className="product-list">
      <p className="product-list__label">Select Products</p>
      <div className="product-list__card-container">
        {productList.length > 0 &&
          productList.map(({ displayTitle, imageUrl }, index) => {
            return (
              <div
                className="product-list__card"
                onClick={() => {
                  const aux = [...checked];
                  aux[index] = !aux[index];
                  setChecked(aux);
                }}
                key={index}
              >
                <img
                  src={imageUrl}
                  alt="product"
                  className="product-list__card-image"
                />
                <p className="product-list__card-title">{displayTitle}</p>
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
      <div className="product-list__continue-icon">
        <img src={continueicon} className="product-list__continue-image" />
      </div>
    </div>
  );
};

export default ProductList;
