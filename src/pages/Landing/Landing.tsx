import { useState, useEffect } from "react";
//import { Dispatch, SetStateAction } from "react";
import { CustomButton } from "../../components/CustomButton";
import { TypeSelector } from "../../components/TypeSelector";
import { Modal } from "../../components/Modal";
import { Topic } from "../../components/Topic";
import { ProductInfo } from "../../components/ProductInfo";

import "./landing.scss";

const Landing = () => {
  const [option, setOption] = useState("");
  const [modal, setModal] = useState(false);
  const [topic, setTopic] = useState("");
  const [topicInfo, setTopicInfo] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const topicText = "I want to add topic";
  const tag = "I want to add tags";
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
  };

  /*   useEffect(() => {
    console.log("option", option);
  }, [option]); 
  useEffect(() => {
    console.log("Tupd", topic);
  }, [topic]);

  useEffect(() => {
    console.log("TIupd", topicInfo);
  }, [topicInfo]);*/

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
                options={[topicText, tag, productInfoText]}
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
      {modal && option === tag && (
        <Modal>
          <p>This is a modal Tag</p>
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
