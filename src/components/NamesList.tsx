import React from "react";

interface Props {
  children: string | React.ReactNode;
}
const NamesList = (props: Props) => {
  const { children } = props;
  return (
    <li className="group text-sm w-fit p-[2px] bg-white rounded-sm cursor-pointer shrink grow border border-gray-100 hover:border-blue-300 list-none">
      <div className=" flex items-center justify-center gap-2 flex-1 group-hover:bg-blue-50/50 text-[13px] text-gray-700 group-hover:text-blue-600 p-1 w-full rounded-sm transition duration-200">
        {children}
      </div>
    </li>
  );
};

export default NamesList;
