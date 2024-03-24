import React, { useState } from "react";
import Wrapper from "../../../components/Wrapper";

const MarketingSkills = () => {
  const [show, setShow] = useState(false);

  const mainTechs: string[] = [
    "Online Advertisement",
    "(SEO) Search Engine Optemization",
    "Plans and Insights",
    "Reports",
    "Launching Full E-commerce projects",
    "Reinforce vulnerability e-commerce factors",
    "Following the organization Objectives and intentions",
    "Automate stereotype tasks",
    "Team management",
  ];

  const showLimit = (data: string[]) => (show ? data : data?.slice(0, 6));

  // !NOTE: you can add show more and show less for the more thant 6 skill or what ever number you prefere
  const list: (data: string[]) => React.ReactNode = (data) =>
    data?.map((item) => (
      <li
        key={item}
        className="text-sm w-fit p-[2px] bg-gray-50 rounded-sm cursor-pointer grow"
      >
        <div
          className="flex gap-2 flex-1
      hover:bg-gray-100 text-[13px] text-gray-700
       p-1 w-full rounded-sm transition duration-200
      "
        >
          {item}
        </div>
      </li>
    ));

  return (
    <Wrapper title="Marketing Skills">
      <div className="" data-aos="fade-up">
        <p className="mb-8">
          Over 5 years of professional experience I'm glad to have these skills
          and capabilites
        </p>
        <ul className="flex flex-wrap gap-0.5 mb-2">
          {list(showLimit(mainTechs))}
        </ul>
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="text-xs text-gray-500 underline "
        >
          {show ? "show less" : "show more"}
        </button>
      </div>
    </Wrapper>
  );
};

export default MarketingSkills;
