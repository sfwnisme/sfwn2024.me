import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
}

const Wrapper = (props: Props) => {
  const { children, title } = props;
  return (
    <div className=" min-h-screen flex items-center justify-center bg-white sticky top-10">
      <div className="flex max-sm:flex-col items-start justify-center gap-40 max-sm:gap-4">
        <h3 className="text-base text-gray-500 font-semibold inline-flex mr-auto items-center gap-1 first-letter:">
          <span className="bg-gray-500 h-4 w-[2px] flex rounded flex-shrink-0"></span>
          {title}
        </h3>
        <div className="text-[15px] md:text-base font-normal">{children}</div>
      </div>
    </div>
  );
};

export default Wrapper;
