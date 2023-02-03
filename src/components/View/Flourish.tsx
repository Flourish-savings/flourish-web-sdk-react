import React from "react";

export interface FlourishProps {
  text: string;
}

const Flourish = (props: FlourishProps) => {
  return <text>{props.text}</text>;
};

export default Flourish;