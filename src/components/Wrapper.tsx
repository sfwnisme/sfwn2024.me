import React from "react";

interface Props {
  children: React.ReactNode;
  title: "string";
}

const Wrapper = (props: Props) => {
  const { children, title } = props;
  return (
    <div className=" min-h-screen flex items-center justify-center bg-white sticky top-10">
      <div className="flex max-sm:flex-col items-start justify-center gap-40 max-sm:gap-4">
        <h3 className="text-base text-gray-500 font-medium inline-flex items-center gap-1">
          <span className="bg-gray-500 h-2 w-2 flex rounded-sm"></span>
          {title}
        </h3>
        <div className="text-[15px] md:text-base">{children}</div>
      </div>
    </div>
  );
};

export default Wrapper;
