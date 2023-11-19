import { useState, useEffect } from "react";
//import { Dispatch, SetStateAction } from "react";
import { CustomButton } from "../../components/CustomButton";
import { TypeSelector } from "../../components/TypeSelector";
import { Modal } from "../../components/Modal";
import { Topic } from "../../components/Topic";
import { ProductInfo } from "../../components/ProductInfo";
import { Tag } from "../../components/Tag";
import { data } from "../../assets/data";

import "./landing.scss";

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
  const [checked, setChecked] = useState([false]);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([""]);
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
    console.log("Simulating http PUT", topicJSON);
    setTopic("");
    setTopicInfo("");
  };

  const getProducts = async (url: string) => {
    console.log("entering getProducts method");
    try {
      console.log(url);
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

  /*   useEffect(() => {
    console.log("option", option);
  }, [option]); 
  useEffect(() => {
    console.log("Tupd", topic);
  }, [topic]);

  useEffect(() => {
    console.log("TIupd", topicInfo);
  }, [topicInfo]);
  useEffect(() => {
    console.log("added tag", tags);
  }, [tags]);*/

  useEffect(() => {
    console.log("checklist ", checked);
  }, [checked]);

  useEffect(() => {
    if ((option === tagText || option === productInfoText) && modal) {
      getProducts("https://api.wizybot.com/products/demo-product-list");
      console.log("sending http get");
    }
  }, [option, modal]);

  useEffect(() => {
    console.log("productlist ", productList);
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
            <CustomButton
              text="Send"
              handleClick={() => {
                handleSubmitTopic(topic, topicInfo);
                handleClick(modal, setModal);
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
            <CustomButton
              text="Send"
              handleClick={() => {
                console.log(tag);
                handleClick(modal, setModal);
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
          <ProductInfo info={productInfo} setInfo={setProductInfo}>
            <CustomButton
              text="Send"
              handleClick={() => {
                console.log(productInfo);
                handleClick(modal, setModal);
              }}
              buttonSize="small"
            />
            <CustomButton
              text="Return"
              handleClick={() => handleClick(modal, setModal)}
              buttonSize="small"
            />
          </ProductInfo>
        </Modal>
      )}
    </>
  );
};

export default Landing;
