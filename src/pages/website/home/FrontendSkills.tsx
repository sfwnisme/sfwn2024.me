import React from "react";
import Wrapper from "../../../components/Wrapper";

const FrontendSkills = () => {
  const mainTechs: string[] = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "i18next",
    "Redux Toolkit",
    "Node Package Manager(npm)",
    "React",
    "version controle git",
    "RESTfull API",
    "github",
  ];
  const helperTechsAndLibs: string[] = [
    "React Router Dom",
    "React Query",
    "React Hook From",
    "React Toastify",
    "Axios",
    "yup",
    "React Skeleton",
    "Tailwind",
    "flowbite",
    "bootstrap",
    "figma",
  ];

  const list: (data: string[]) => React.ReactNode = (data) =>
    data?.map((item) => (
      <li className="text-sm w-fit p-[2px] bg-gray-50 rounded-sm cursor-pointer grow">
        <div
          className="flex gap-2 flex-1
      hover:bg-gray-100 text-[13px] text-gray-700
       p-1 w-full rounded-sm transition duration-200
      "
        >
          {/* {React.createElement(link?.icon, { size: "1.5rem" })} */}
          {item}
        </div>
      </li>
    ));

  return (
    <Wrapper title="Technologies">
      <div className="" data-aos="fade-up">
        <p className="mb-8">
          I'm using these common Liblaries and technologies helping me develop
          web frontend projects and features.
        </p>
        <h1 className="mb-2 underline text-sm text-gray-500">Main Techs:</h1>
        <ul className="flex flex-wrap gap-0.5 mb-6">{list(mainTechs)}</ul>
        <h1 className="mb-2 underline text-sm text-gray-500">
          Helper Techs and Libs:
        </h1>
        <ul className="flex flex-wrap gap-0.5 mb-6">
          {list(helperTechsAndLibs)}
        </ul>
      </div>
    </Wrapper>
  );
};

export default FrontendSkills;
