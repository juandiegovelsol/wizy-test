import { useState, useEffect } from "react";
//import { Dispatch, SetStateAction } from "react";
import { CustomButton } from "../../components/CustomButton";
import { CustomButtonEvent } from "../../components/CustomButtonEvent";
import { TypeSelector } from "../../components/TypeSelector";
import { Modal } from "../../components/Modal";
import { Topic } from "../../components/Topic";
import { ProductInfo } from "../../components/ProductInfo";
import { Tag } from "../../components/Tag";
import { data } from "../../assets/data";

import "./landing.scss";
import { ProductList } from "../../components/ProductList";

export interface ProductListType {
  discount: boolean;
  displayTitle: string;
  embeddingText: string;
  id: string;
  imageUrl: string;
  price: string;
  productType: string;
  shopifyProductId: string;
  url: string;
  variants: string;
}

const Landing = () => {
  const [option, setOption] = useState("");
  const [modal, setModal] = useState(false);
  const [topic, setTopic] = useState("");
  const [topicInfo, setTopicInfo] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const [productList, setProductList] = useState<ProductListType[]>([]);
  const [checked, setChecked] = useState<boolean[]>([]);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const topicText = "I want to add topic";
  const tagText = "I want to add tags";
  const productInfoText = "I want to add products info";

  const handleClick = (
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  const handleSubmitTopic = (topic: string, topicInfo: string) => {
    const topicJSON = { topic, topicInfo };
    alert(
      `Simulating http request to send Topic info: ${JSON.stringify(topicJSON)}`
    );
    setTopic("");
    setTopicInfo("");
  };

  const getProducts = async (url: string) => {
    try {
      /* const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("obtained response", response);
      if (response.status === 200) {
        const { body } = response.json;
        if (body !== null) {
          setProductList(await body.json());
        }
      } */

      setProductList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if ((option === tagText || option === productInfoText) && modal) {
      getProducts("https://api.wizybot.com/products/demo-product-list");
    }
  }, [option, modal]);

  useEffect(() => {
    if (productList.length > 0) {
      const array = Array(productList.length).fill(false);
      setChecked(array);
    }
  }, [productList]);

  return (
    <>
      {!modal && (
        <main className="landing">
          <section className="landing__container">
            <h1 className="landing__title">Welcome to Wizybot!</h1>
            <p className="landing__subtitle">
              Select which type of information do you want to add to our system
            </p>
            <article className="landing__inputs">
              <TypeSelector
                options={[topicText, tagText, productInfoText]}
                setValue={setOption}
              />
              <CustomButton
                text="Continue"
                handleClick={() => handleClick(modal, setModal)}
                buttonSize="large"
              />
            </article>
          </section>
        </main>
      )}
      {modal && option === topicText && (
        <Modal>
          <Topic
            topic={topic}
            setTopic={setTopic}
            topicInfo={topicInfo}
            setTopicInfo={setTopicInfo}
          >
            <CustomButtonEvent
              text="Send"
              handleClick={(e) => {
                e.preventDefault();
                if (topic !== "" && topicInfo !== "") {
                  handleSubmitTopic(topic, topicInfo);
                  handleClick(modal, setModal);
                }
              }}
              buttonSize="medium"
            />
            <CustomButton
              text="Return"
              handleClick={() => handleClick(modal, setModal)}
              buttonSize="medium"
            />
          </Topic>
        </Modal>
      )}
      {modal && option === tagText && (
        <Modal>
          <Tag
            tag={tag}
            setTag={setTag}
            tags={tags}
            setTags={setTags}
            productList={productList}
            checked={checked}
            setChecked={setChecked}
          >
            <CustomButtonEvent
              text="Send"
              handleClick={(e) => {
                e.preventDefault();
                const selectedProducts: string[] = [];
                if (checked.length && ProductList.length) {
                  checked.map((value, index) => {
                    if (value) {
                      selectedProducts.push(productList[index].displayTitle);
                    }
                  });
                }
                if (selectedProducts.length > 0 && tags.length > 0) {
                  const tagsJSON = { selectedProducts, tags };
                  alert(
                    `Simulating http request to send Tags info: ${JSON.stringify(
                      tagsJSON
                    )}`
                  );
                  //console.log("simulating Tags http put", tagsJSON);
                  setChecked([]);
                  setProductList([]);
                  setTags([]);
                  setTag("");
                  handleClick(modal, setModal);
                }
              }}
              buttonSize="medium"
            />
            <CustomButton
              text="Return"
              handleClick={() => handleClick(modal, setModal)}
              buttonSize="medium"
            />
          </Tag>
        </Modal>
      )}
      {modal && option === productInfoText && (
        <Modal>
          <ProductInfo
            info={productInfo}
            setInfo={setProductInfo}
            productList={productList}
            checked={checked}
            setChecked={setChecked}
          >
            <CustomButtonEvent
              text="Send"
              handleClick={(e) => {
                e.preventDefault();
                const selectedProducts: string[] = [];
                if (checked.length && ProductList.length) {
                  checked.map((value, index) => {
                    if (value) {
                      selectedProducts.push(productList[index].displayTitle);
                    }
                  });
                }
                if (selectedProducts.length > 0 && productInfo !== "") {
                  const productJSON = { selectedProducts, productInfo };
                  alert(
                    `Simulating http request to send Products info: ${JSON.stringify(
                      productJSON
                    )}`
                  );
                  //console.log("simulating Product info http put", productJSON);
                  setChecked([]);
                  setProductList([]);
                  setProductInfo("");
                  handleClick(modal, setModal);
                }
              }}
              buttonSize="medium"
            />
            <CustomButton
              text="Return"
              handleClick={() => handleClick(modal, setModal)}
              buttonSize="medium"
            />
          </ProductInfo>
        </Modal>
      )}
    </>
  );
};

export default Landing;
