import React from "react";
import "./Btn.css";
interface Props {
  children: React.ReactNode;
}
const Btn = (props: Props) => {
  const { children } = props;
  return (
    <button className="btn-23">
      <span className="text">{children}</span>
      <span className="marquee">{children}</span>
    </button>
  );
};

export default Btn;
