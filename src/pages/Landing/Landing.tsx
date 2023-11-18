import { useState, useEffect } from "react";
//import { Dispatch, SetStateAction } from "react";
import { CustomButton } from "../../components/CustomButton";
import { TypeSelector } from "../../components/TypeSelector";
import { Modal } from "../../components/Modal";

import "./landing.scss";

const Landing = () => {
  const [option, setOption] = useState("");
  const [modal, setModal] = useState(false);
  const topic = "I want to add topic";
  const tag = "I want to add tags";
  const productInfo = "I want to add products info";

  const handleClick = (
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    console.log("setting state!!", modal);
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  /*   useEffect(() => {
    console.log("option", option);
  }, [option]); */

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
                options={[topic, tag, productInfo]}
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
      {modal && option === topic && (
        <Modal>
          <p>This is a modal Topic</p>
        </Modal>
      )}
      {modal && option === tag && (
        <Modal>
          <p>This is a modal Tag</p>
        </Modal>
      )}
      {modal && option === productInfo && (
        <Modal>
          <p>This is a modal Product</p>
        </Modal>
      )}
    </>
  );
};

export default Landing;
