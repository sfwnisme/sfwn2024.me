import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

type Props = {
	children: React.ReactNode;
	href: string;
	icon?: "visible" | "invisible";
	underline?: "visible" | "invisible";
	weight?: "bold" | "normal";
};
type LinkProp = React.DetailedHTMLProps<
	React.AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
>;

type CombinedProps = Props & LinkProp;

export default function Link({
	children = "link",
	href = "https://sfwn.me",
	icon = "visible",
	underline = "invisible",
	weight = "normal",
	...rest
}: CombinedProps) {
	return (
		<a
			{...rest}
			href={href}
			title=""
			className={`flex items-center font-mono text-sm text-blue-500 ${
				underline === "visible" ? "underline" : "no-underline"
			} 
      ${weight === "bold" ? "font-semibold" : "font-normal"}
      underline-offset-4 group`}
		>
			{children}
			{icon === "visible" && (
				<RxArrowTopRight className="group-hover:rotate-45" />
			)}
		</a>
	);
}
