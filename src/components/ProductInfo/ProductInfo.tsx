import React, { ReactNode } from "react";
import { ProductList } from "../ProductList";
import { ProductListType } from "../../pages/Landing/Landing";
import "./product-info.scss";

interface ProductInfoProps {
  info?: string;
  setInfo: React.Dispatch<React.SetStateAction<string>>;
  productList: ProductListType[];
  checked: boolean[];
  setChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
  children?: ReactNode;
}

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
      <div className="product__left">
        <ProductList
          productList={productList}
          checked={checked}
          setChecked={setChecked}
        />
      </div>
      <div className="product__line"></div>
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
