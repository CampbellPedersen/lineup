import React from "react";
import "./story.scss";

export const Story: React.FC = ({ children }) => {
  return <div className="storybook-story">{children}</div>;
};
