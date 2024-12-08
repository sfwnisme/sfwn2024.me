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
	//       <li className="relative text-sm capitalize rounded-sm border border-gray-200 w-fit p-[3px] bg-gray-0 borde grow overflow-clip hover:border-sky-200">
	//         <a
	//           href={link?.href}
	//           target="_blank"
	//           className="inline-flex gap-4 justify-between items-center py-2 px-3 w-full text-gray-700 rounded-sm transition duration-200 hover:text-white group hover:bg-sky-500"
	//         >
	//           <div className="flex flex-1 gap-2 items-center">
	//             {React.createElement(link?.icon, { size: "1.5rem" })}
	//             {link?.title}
	//           </div>
	//           <MdArrowOutward className="font-bold duration-200 transform group-hover:scale-125 group-hover:rotate-[45deg]" />
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
						rel="noreferrer"
						target="_blank"
						className="inline-flex gap-4 justify-between items-center py-2 px-3 w-full rounded-sm transition duration-200 group"
					>
						<div className="flex flex-1 gap-2 items-center">
							{React.createElement(link?.icon, { size: "1.5rem" })}
							{link?.title}
						</div>
						<MdArrowOutward className="font-bold duration-200 transform group-hover:scale-125 group-hover:rotate-[45deg]" />
					</a>
				</NamesList>
			)}
		</>
	));

	return (
		<Wrapper title="Contact">
			<div data-aos="fade-up">
				<p className="mb-8">
					Having any question and for bussiness requirements feel free to
					contact , you will find me active on the following channels.
				</p>
				{/* <ul className="grid gap-2 md:grid-cols-2 grid-col-1">{linksList}</ul> */}
				<ul className="flex flex-wrap gap-0.5">{linksList}</ul>
			</div>
		</Wrapper>
	);
};

export default Contact;
