import React from "react";
import Wrapper from "../../../components/Wrapper";
import { IconType } from "react-icons";
import { MdArrowOutward } from "react-icons/md";
import { CiFacebook, CiLinkedin, CiMail } from "react-icons/ci";
import { PiDiscordLogoThin } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";
import NamesList from "../../../components/NamesList";

interface LinksTypes {
  title: string;
  href: string;
  icon: IconType;
  disable?: boolean;
}

const Contact = () => {
  const links: LinksTypes[] = [
    {
      title: "email",
      href: "mailto:hi@sfwn.me",
      icon: CiMail,
      disable: false,
    },
    {
      title: "github",
      href: "https://github.com/sfwnisme",
      icon: VscGithubAlt,
      disable: false,
    },
    {
      title: "linkedin",
      href: "https://linkedin.com/in/sfwnisme",
      icon: CiLinkedin,
      disable: false,
    },
    {
      title: "facebook",
      href: "https://facebook.com/sfwnisme",
      icon: CiFacebook,
      disable: true,
    },
    {
      title: "discord",
      href: "https://discordapp.com/users/695376305914642542",
      icon: PiDiscordLogoThin,
      disable: false,
    },
  ];

  // const linksList = links?.map((link) => (
  //   <>
  //     {link?.disable ? null : (
  //       <li className="relative text-sm w-fit p-[3px] bg-gray-0 rounded-sm border border-gray-200 hover:border-sky-200 borde grow overflow-clip capitalize">
  //         <a
  //           href={link?.href}
  //           target="_blank"
  //           className="group inline-flex items-center justify-between gap-4 hover:bg-sky-500 text-gray-700 hover:text-white px-3 py-2 w-full rounded-sm transition duration-200"
  //         >
  //           <div className="flex gap-2 flex-1 items-center">
  //             {React.createElement(link?.icon, { size: "1.5rem" })}
  //             {link?.title}
  //           </div>
  //           <MdArrowOutward className="font-bold transform group-hover:rotate-[45deg] group-hover:scale-125 duration-200 " />
  //         </a>
  //       </li>
  //     )}
  //   </>
  // ));

  const linksList = links?.map((link) => (
    <>
      {link?.disable ? null : (
        <NamesList>
          <a
            href={link?.href}
            target="_blank"
            className="group inline-flex items-center justify-between gap-4 px-3 py-2 w-full rounded-sm transition duration-200"
          >
            <div className="flex gap-2 flex-1 items-center">
              {React.createElement(link?.icon, { size: "1.5rem" })}
              {link?.title}
            </div>
            <MdArrowOutward className="font-bold transform group-hover:rotate-[45deg] group-hover:scale-125 duration-200 " />
          </a>
        </NamesList>
      )}
    </>
  ));

  return (
    <Wrapper title="Contact">
      <div className="bg-white" data-aos="fade-up">
        <p className="mb-8">
          Having any question and for bussiness requirements feel free to
          contact , you will find me active on the following channels.
        </p>
        {/* <ul className="grid grid-col-1 md:grid-cols-2 gap-2">{linksList}</ul> */}
        <ul className="flex flex-wrap gap-0.5">{linksList}</ul>
      </div>
    </Wrapper>
  );
};

export default Contact;
