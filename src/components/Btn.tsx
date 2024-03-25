import React from "react";
import "./Btn.css";
interface Props {
  children: React.ReactNode;
}
const Btn = (props: Props) => {
  const { children } = props;
  return (
    <a
      href="mailto:safwan@sfwn.me"
      className="cssbuttons-io-button bg-red-500"
    >
      <div className="absolute z-0 top-0 left-0 w-full h-full"></div>
      {children}
      <div className="icon">
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </a>
  );
};

export default Btn;
