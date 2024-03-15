import Wrapper from "../../../components/Wrapper";
import { IconType } from "react-icons";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";

interface LinksTypes {
  title: string;
  href: string;
  icon: IconType;
}

const Contact = () => {
  const links: LinksTypes[] = [
    {
      title: "email",
      href: "mailto:safwan@sfwn.me",
      icon: AiFillMail,
    },
    {
      title: "github",
      href: "mailto:safwan@sfwn.me",
      icon: AiFillGithub,
    },
    {
      title: "linkedin",
      href: "mailto:safwan@sfwn.me",
      icon: AiFillLinkedin,
    },
    {
      title: "facebook",
      href: "mailto:safwan@sfwn.me",
      icon: AiFillFacebook,
    },
  ];

  const linksList = links?.map((link) => (
    <li className="relative text-sm w-fit p-[3px] bg-gray-100 rounded-sm grow overflow-clip">
      <a
        href={link?.href}
        className="group inline-flex items-center justify-between gap-4 hover:bg-gray-200 text-gray-700 px-3 py-2 w-full rounded-sm transition duration-200"
      >
        <div className="flex gap-2 flex-1">
          {/* {React.createElement(link?.icon, { size: "1.5rem" })} */}
          {link?.title}
        </div>
        <MdArrowOutward className="font-bold transform group-hover:rotate-[45deg] group-hover:scale-125 duration-200 " />
      </a>
    </li>
  ));

  return (
    <Wrapper title="Contact">
      <div className="" data-aos="fade-up">
        <p className="mb-8">
          Have a question or just want to chat? Feel free to email me. Try
          finding me anywhere else at @saifmohamedsv
        </p>
        {/* <ul className="grid grid-col-1 md:grid-cols-2 gap-2">{linksList}</ul> */}
        <ul className="flex flex-wrap gap-0.5">{linksList}</ul>
      </div>
    </Wrapper>
  );
};

export default Contact;
