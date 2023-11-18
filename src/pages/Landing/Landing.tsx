/* import { useState } from "react"; */
import { CustomButton } from "../../components/CustomButton";
import "./landing.scss";
const Landing = () => {
  const handleClick = () => {};
  return (
    <main className="landing">
      <section className="landing__container">
        <h1 className="landing__title">Welcome to Wizybot!</h1>
        <p className="landing__subtitle">
          Select which type of information do you want to add to our system
        </p>
        <article className="landing__inputs">
          <CustomButton
            text="Continue"
            handleClick={handleClick}
            buttonSize="large"
          />
          <CustomButton
            text="Continue"
            handleClick={handleClick}
            buttonSize="large"
          />
        </article>
      </section>
    </main>
  );
};

export default Landing;
