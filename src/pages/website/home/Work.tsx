import React from "react";
import Wrapper from "../../../components/Wrapper";

const Work = () => {
  const company = [
    {
      icon: "./makhazen-logo.png",
      title: "Marketing Team Leader, IT",
      href: "https://makzanelc.com/",
      company: "Makhazen Electra",
      year: "2024/mar - present",
    },
    {
      icon: "./pr-logo.png",
      title: "Marketing Team Leader, IT",
      href: "",
      company: "PR Est.",
      year: "2023/feb - present",
    },
    {
      // icon: "https://res.cloudinary.com/daa68wahe/image/upload/v1700999882/Asset_2_id04vx.png",
      title: "Marketing",
      href: "https://www.linkedin.com/company/%D8%B4%D8%B1%D9%83%D8%A9-%D8%B9%D8%A7%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D9%8A%D8%AA%D9%8A/?trk=ppro_cprof&originalSubdomain=sa",
      company: "Albeity World for Computers",
      year: "2021/aug - 2023/feb",
    },
  ];

  const projectsList = company?.map((co) => (
    <div className="flex items-start justify-between gap-4 text-sm">
      <div className="bg-white md:h-16 h-14 md:w-16 w-14 grid place-items-center place-content-center border rounded-full p-3">
        {co?.icon ? (
          <img src={co?.icon} alt={co?.title} className="w-full" />
        ) : null}
      </div>
      <div className=" flex-1">
        <p>{co?.title}</p>
        {React.createElement(
          `${co?.href ? "a" : "p"}`,
          {
            className: "text-gray-500 text-xs font-light w-4/3",
            href: co?.href,
          },
          co?.company
        )}
      </div>
      <p className="text-gray-400 text-xs font-light">{co?.year}</p>
    </div>
  ));

  return (
    <Wrapper title="Work">
      <div data-aos="fade-up">
        <div className="flex flex-col gap-4 mb-8">
          <p>
            I've over 5 years professional experience in digital marketing and 2
            years in IT support
          </p>
          <p>
            I started my career in online advertisement using the famous
            platforms such as Meta, Snapchat, Tiktok and etc..., then I started
            to manage and lead Marketing teams since 2023.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 items-center">
          {projectsList}
        </div>
      </div>
    </Wrapper>
  );
};

export default Work;
