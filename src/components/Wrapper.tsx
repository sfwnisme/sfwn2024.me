import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
}

const Wrapper = (props: Props) => {
  const { children, title } = props;
  // let color;
  // let pos;
  // if (title.toLowerCase() === "about") {
  //   color = "red";
  //   pos = 0;
  // } else if (title.toLowerCase() === "contact") {
  //   color = "yellow";
  //   pos = 16;
  // } else if (title.toLowerCase() === "work") {
  //   color = "blue";
  //   pos = 36;
  // }

  return (
    <div
      id={title?.toLowerCase()}
      className="WRAPPER z-0 h-[calc(100vh-85px)] md:px-1 flex items-center justify-center
       bg-white sticky md:top-[-200px] top-0 transition 
       duration-700"
    >
      <div className="INNER_WRAPPER z-10 h-full grid place-content-center grid-cols-1 md:grid-cols-[1fr_3fr] items-start max-sm:gap-4">
        <h3 className="text-lg text-gray-600 font-semibold inline-flex items-center gap-1 sm:mr-10 md:sticky top-96">
          {title}
        </h3>
        <div className="text-[15px] md:text-base font-normal">{children}</div>
      </div>
    </div>
  );
};

export default Wrapper;
