import React from "react";
import Wrapper from "../../../components/Wrapper";
import {} from "react-icons";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  const links = [
    {
      title: "email",
      href: "mailto:safwan@sfwn.me",
      icon: AiOutlineMail,
    },
    {
      title: "github",
      href: "mailto:safwan@sfwn.me",
      icon: AiOutlineGithub,
    },
    {
      title: "linkedin",
      href: "mailto:safwan@sfwn.me",
      icon: AiOutlineLinkedin,
    },
    {
      title: "facebook",
      href: "mailto:safwan@sfwn.me",
      icon: AiOutlineFacebook,
    },
  ];

  const linksList = links?.map((link) => (
    <li className="text-base w-full p-[5px] bg-gray-50">
      <a
        href={link?.href}
        className="inline-flex justify-between hover:bg-gray-100 text-gray-700 p-3 w-full rounded transition duration-200"
      >
        <div className="flex gap-2 flex-1">
          {React.createElement(link?.icon, { size: "1.5rem" })}
          {link?.title}
        </div>
        <MdArrowOutward />
      </a>
    </li>
  ));

  return (
    <Wrapper title="Contact">
      <div className="">
        <p className="mb-8">
          Have a question or just want to chat? Feel free to email me. Try
          finding me anywhere else at @saifmohamedsv
        </p>
        <ul className="grid grid-cols-2 gap-2">{linksList}</ul>
      </div>
    </Wrapper>
  );
};

export default Contact;
