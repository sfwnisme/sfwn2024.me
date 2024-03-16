import React from "react";
import Wrapper from "../../../components/Wrapper";

const MarketingSkills = () => {
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
  // const helperTechsAndLibs: string[] = [
  //   "React Router Dom",
  //   "React Query",
  //   "React Hook From",
  //   "React Toastify",
  //   "Axios",
  //   "yup",
  //   "React Skeleton",
  //   "Tailwind",
  //   "flowbite",
  //   "bootstrap",
  //   "figma",
  // ];

  const list: (data: string[]) => React.ReactNode = (data) =>
    data?.map((item) => (
      <li className="text-sm w-fit p-[2px] bg-gray-50 rounded-sm cursor-pointer grow">
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
        <ul className="flex flex-wrap gap-0.5 mb-6">{list(mainTechs)}</ul>
      </div>
    </Wrapper>
  );
};

export default MarketingSkills;
