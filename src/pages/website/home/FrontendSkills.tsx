import React from "react";
import Wrapper from "../../../components/Wrapper";
import NamesList from "../../../components/NamesList";

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
    data?.map((item) => <NamesList>{item}</NamesList>);

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
