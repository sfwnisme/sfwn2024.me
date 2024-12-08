import Button from "./Button";

const Nav = () => {
	return (
		<nav className="z-50 sticky top-0 bg-black border-b border-b-gray-700">
			<div className="container mx-auto flex items-center justify-between gap-2 px-4 py-4">
				<div className="logo h-6 flex-1">
					<img
						// src="https://res.cloudinary.com/daa68wahe/image/upload/v1700999882/Asset_2_id04vx.png"
						// src="./sfwn-logo-black.png"
						// src="./logo.png"
						src="./logo2.png"
						alt="sfwn.me's logo"
						className="h-full"
					/>
				</div>
				<Button>Contact</Button>
			</div>
			<a
				href="mailto:safwanmohamedabdo@gmail.com"
				className="absolute top-full bg-green-950 text-green-500 animate-pulse duration-75 text-xs p-1 rounded-sm flex items-center gap-1"
			>
				#Open_to_work
			</a>
		</nav>
	);
};

export default Nav;
