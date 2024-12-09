import React from "react";

interface Props {
	children: React.ReactNode;
	title: string;
	width?: "full" | "container";
	theme?: "dark" | "light";
}

const Wrapper = (props: Props) => {
	const { children, title, width = "container", theme = "light" } = props;
	return (
		<div
			className={`${theme === "light" ? "bg-white" : "bg-gray-950 md:px-40 px-4"
				}  py-40`}
		>
			<div
				id={title?.toLowerCase()}
				className={`WRAPPER z-0 ${width === "full" ? "w-full" : "container"} mn-h-[calc(100vh-85px)] flex items-center justify-center
       sticky md:top-[60px] top-0 transition 
        duration-700
        `}
			>
				<div className="INNER_WRAPPER z-10 h-full grid place-content-center grid-cols-1 md:grid-cols-[1fr_3fr] items-start max-sm:gap-4">
					<h3
						className={`text-lg ${theme === "light" ? "text-gray-600" : "text-gray-400"
							} max-md:mb-3 font-semibold inline-flex items-center gap-1 sm:mr-10 md:sticky top-96
							font-mono 
							underline
							`}
					>
						{title}
					</h3>
					<div className="text-[15px] md:text-base font-normal">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Wrapper;
