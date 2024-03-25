import Wrapper from "../../../components/Wrapper";
import { IconType } from "react-icons";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";

interface LinksTypes {
  title: string;
  href: string;
  icon?: IconType;
  disable?: boolean;
}

const Contact = () => {
  const links: LinksTypes[] = [
    {
      title: "email",
      href: "mailto:safwan@sfwn.me",
      icon: AiFillMail,
      disable: false,
    },
    {
      title: "github",
      href: "https://github.com/sfwnisme",
      icon: AiFillGithub,
      disable: false,
    },
    {
      title: "linkedin",
      href: "https://linkedin.com/in/sfwnisme",
      icon: AiFillLinkedin,
      disable: false,
    },
    {
      title: "facebook",
      href: "https://facebook.com/sfwnisme",
      icon: AiFillFacebook,
      disable: true,
    },
    {
      title: "discord",
      href: "https://discordapp.com/users/695376305914642542",
      icon: BsDiscord,
      disable: false,
    },
  ];

  const linksList = links?.map((link) => (
    <>
      {link?.disable ? null : (
        <li className="relative text-sm w-fit p-[3px] bg-gray-0 rounded-sm border border-gray-300 border-dashed grow overflow-clip capitalize">
          <a
            href={link?.href}
            target="_blank"
            className="group inline-flex items-center justify-between gap-4 hover:bg-gray-100 text-gray-700 px-3 py-2 w-full rounded-sm transition duration-200"
          >
            <div className="flex gap-2 flex-1">
              {/* {React.createElement(link?.icon, { size: "1.5rem" })} */}
              {link?.title}
            </div>
            <MdArrowOutward className="font-bold transform group-hover:rotate-[45deg] group-hover:scale-125 duration-200 " />
          </a>
        </li>
      )}
    </>
  ));

  return (
    <Wrapper title="Contact">
      <div className="" data-aos="fade-up">
        <p className="mb-8">
          Have any question or for bussiness requirements feel free to contact
          me using the following contact channels
        </p>
        {/* <ul className="grid grid-col-1 md:grid-cols-2 gap-2">{linksList}</ul> */}
        <ul className="flex flex-wrap gap-0.5">{linksList}</ul>
      </div>
    </Wrapper>
  );
};

export default Contact;
