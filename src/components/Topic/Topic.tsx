import React, { ReactNode } from "react";
import "./topic.scss";

interface TypeTopicProps {
  topic?: string;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
  topicInfo?: string;
  setTopicInfo: React.Dispatch<React.SetStateAction<string>>;
  children?: ReactNode;
}

const Topic: React.FC<TypeTopicProps> = ({
  topic = "",
  setTopic,
  topicInfo = "",
  setTopicInfo,
  children,
}) => {
  return (
    <div className="topic">
      <form className="topic__form">
        <label className="topic__text">Add new Topic</label>
        <input
          type="text"
          className="topic__input"
          placeholder="Shipment to Medellin"
          value={topic}
          onChange={(e) => {
            setTopic(e.target.value);
          }}
        />
        <label className="topic__text">Add new Topic Info</label>
        <input
          type="text"
          className="topic__input"
          placeholder="We have free shipping to Medellin. It takes 5 business days"
          value={topicInfo}
          onChange={(e) => {
            setTopicInfo(e.target.value);
          }}
        />
      </form>
      <div className="buttonsGroup">{children}</div>
    </div>
  );
};

export default Topic;
