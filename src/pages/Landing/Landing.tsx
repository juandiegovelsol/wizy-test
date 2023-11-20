import { useState, useEffect } from "react";
import { CustomButton } from "../../components/CustomButton";
import { CustomButtonEvent } from "../../components/CustomButtonEvent";
import { TypeSelector } from "../../components/TypeSelector";
import { Modal } from "../../components/Modal";
import { Topic } from "../../components/Topic";
import { ProductInfo } from "../../components/ProductInfo";
import { Tag } from "../../components/Tag";
import { ProductList } from "../../components/ProductList";
import { data } from "../../assets/data"; // Sample data import

import "./landing.scss";

// Define interface for product list items
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

// Landing page Component
const Landing = () => {
  // Define and initialize state variables using useState hook
  const [option, setOption] = useState(""); // Selected option state
  const [modal, setModal] = useState(false); // Modal window state
  const [topic, setTopic] = useState(""); // Topic state
  const [topicInfo, setTopicInfo] = useState(""); // Topic info state
  const [productInfo, setProductInfo] = useState(""); // Product info state
  const [productList, setProductList] = useState<ProductListType[]>([]); // Product list state
  const [checked, setChecked] = useState<boolean[]>([]); // Checked items state
  const [tag, setTag] = useState(""); // Tag state
  const [tags, setTags] = useState<string[]>([]); // Tags list state

  // Constants for options values
  const topicText = "I want to add topic";
  const tagText = "I want to add tags";
  const productInfoText = "I want to add products info";

  // Function to toggle modal
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

  // Function to handle topic submission
  const handleSubmitTopic = (topic: string, topicInfo: string) => {
    const topicJSON = { topic, topicInfo };
    alert(
      `Simulating http request to send Topic info: ${JSON.stringify(topicJSON)}`
    );
    setTopic("");
    setTopicInfo("");
  };

  // Function to fetch product data from an API (simulated using sample data)
  const getProducts = async (url: string) => {
    console.log(url);
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
      // Simulated fetch request - using sample data directly
      setProductList(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect to fetch products when option and modal change
  useEffect(() => {
    if ((option === tagText || option === productInfoText) && modal) {
      getProducts("https://api.wizybot.com/products/demo-product-list");
    }
  }, [option, modal]);

  // useEffect to update checked array based on product list changes
  useEffect(() => {
    if (productList.length > 0) {
      const array = Array(productList.length).fill(false);
      setChecked(array);
    }
  }, [productList]);

  return (
    <>
      {/* Render this section when the modal is not open */}
      {!modal && (
        <main className="landing">
          <section className="landing__container">
            <h1 className="landing__title">Welcome to Wizybot!</h1>
            <p className="landing__subtitle">
              Select which type of information do you want to add to our system
            </p>
            <article className="landing__inputs">
              {/* TypeSelector component to select options */}
              <TypeSelector
                options={[topicText, tagText, productInfoText]}
                setValue={setOption}
              />
              {/* CustomButton to open modal based on selected option */}
              <CustomButton
                text="Continue"
                handleClick={() => handleClick(modal, setModal)}
                buttonSize="large"
              />
            </article>
          </section>
        </main>
      )}

      {/* Render this section when the modal is open and option matches to Topic*/}
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

      {/* Render this section when the modal is open and option matches to Tag*/}
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
              // Function to handle tags submission
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
      {/* Render this section when the modal is open and option matches to Product info*/}
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
              // Function to handle product info submission
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
