import React, { ReactNode } from "react";
import "./topic.scss";

// Define props required for the Topic component
interface TypeTopicProps {
  topic?: string;
  setTopic: React.Dispatch<React.SetStateAction<string>>; // Function to set topic value
  topicInfo?: string;
  setTopicInfo: React.Dispatch<React.SetStateAction<string>>; // Function to set topic info value
  children?: ReactNode;
}

// Topic Component: Represents a section for adding a new topic and its info
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
        {/* Input for adding a new topic */}
        <label className="topic__text">Add new Topic</label>
        <input
          type="text"
          className="topic__input"
          placeholder="Shipment to Medellin"
          value={topic}
          onChange={(e) => {
            setTopic(e.target.value); // Update topic value on input change
          }}
        />

        {/* Input for adding new topic info */}
        <label className="topic__text">Add new Topic Info</label>
        <input
          type="text"
          className="topic__input"
          placeholder="We have free shipping to Medellin. It takes 5 business days"
          value={topicInfo}
          onChange={(e) => {
            setTopicInfo(e.target.value); // Update topic info value on input change
          }}
        />
      </form>

      {/* Container for additional buttons or elements */}
      <div className="buttonsGroup">{children}</div>
    </div>
  );
};

export default Topic;
