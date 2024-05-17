import React, { useEffect } from "react";
import Wrapper from "../../../components/Wrapper";

const Work = () => {
  const company = [
    {
      icon: "./makhazen-logo.png",
      title: "Marketing Director, IT",
      href: "https://makzanelc.com/",
      company: "Makhazen Electra",
      year: "mar 2024 - present",
    },
    {
      icon: "./pr-logo.png",
      title: "Marketing Team Assistant, IT",
      href: "",
      company: "PR Est.",
      year: "feb 2023 - present",
      sub_jobs: [
        {
          icon: "./mieivc.avif",
          title: "Data analysis, IT",
          href: "https://mieivcksa.com",
          company: "Mieivc",
          year: "feb 2023 - present",
        },
        {
          icon: "./soma.jpg",
          title: "Data analysis, IT",
          href: "https://soma.my.taker.io/",
          company: "Soma",
          year: "feb 2023 - present",
        },
        {
          icon: "./hungrygate.png",
          title: "IT",
          href: "https://www.hungrygate.com/",
          company: "Hungery Gate",
          year: "feb 2023 - present",
        },
        {
          icon: "./mazpro.jpg",
          title: "Marketing Team Director, IT",
          href: "https://mazproo.com/",
          company: "Mazpro",
          year: "feb 2023 - present",
        },
        {
          icon: "./cheveu.avif",
          title: "Marketing Team Assistant, IT",
          href: "https://cheveu-solutions.com/",
          company: "Cheveu Solutions",
          year: "feb 2023 - present",
        },
        {
          icon: "./4cs.png",
          title: "Marketing Team Leader, IT",
          href: "https://cheveu-solutions.com/",
          company: "4C's jewelry",
          year: "feb 2023 - present",
        },
        {
          icon: "./aurora.avif",
          title: "Marketing Team Leader, IT",
          href: "https://auroraksa.com/",
          company: "Aurora",
          year: "feb 2023 - present",
        },
      ],
    },
    {
      // icon: "https://res.cloudinary.com/daa68wahe/image/upload/v1700999882/Asset_2_id04vx.png",
      title: "Marketing",
      href: "https://www.linkedin.com/company/%D8%B4%D8%B1%D9%83%D8%A9-%D8%B9%D8%A7%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D9%8A%D8%AA%D9%8A/?trk=ppro_cprof&originalSubdomain=sa",
      company: "Albeity World for Computers",
      year: "aug 2021 - feb 2023",
    },
  ];

  useEffect(() => {
    // const timer = setTimeout(
    // () =>
    // const wrapper = document.querySelector(".WRAPPER");
    // console.log((200 * wrapper.getBoundingClientRect()?.height) / 100);
    // 300
    // );
    // return () => clearTimeout(timer);
    // console.log(hRef.current.clientHeight);
  }, []);

  const projectsList = company?.map((co) => (
    <div className="p-2 rounded border border-gray-100 hover:border-gray-300 hover:bg-gray-50/20 cursor-pointer">
      <div className="flex items-start justify-between gap-4 text-sm">
        <div className="bg-white md:h-12 h-12 md:w-12 w-12 grid place-items-center place-content-center border rounded-full p-3">
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
      {co?.sub_jobs ? (
        <>
          <div className="flex flex-wrap gap-y-2 gap-x-3 border border-gray-100 hover:border-gray-200 p-2 mt-2 rounded-sm cursor-pointer">
            {co?.sub_jobs?.map((sub, idx) => (
              <div
                className="flex items-start justify-between gap-2 text-sm"
                key={idx}
              >
                <div className="bg-white md:h-8 h-8 md:w-8 w-8 grid place-items-center place-content-center border rounded p-1">
                  {sub.icon ? (
                    <img src={sub.icon} alt={sub.title} className="w-full" />
                  ) : null}
                </div>
                <div className=" flex-1">
                  {/* <p className="text-xs text-gray-500">{sub.title}</p> */}
                  {React.createElement(
                    `${sub.href ? "a" : "p"}`,
                    {
                      className: "text-gray-500 text-[11px] font-light w-4/3",
                      href: sub.href,
                    },
                    sub.company
                  )}
                </div>
                {/* <p className="text-gray-400 text-xs font-light">{sub.year}</p> */}
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  ));

  return (
    <Wrapper title="Experience">
      <div data-aos="fade-up">
        <div className="flex flex-col gap-4 mb-8">
          <p>
            I've over 5 years professional experience in digital marketing and 2
            years in IT support and web development.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 items-center">
          {projectsList}
        </div>
      </div>
    </Wrapper>
  );
};

export default Work;
