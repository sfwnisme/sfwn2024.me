import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { TbMenu } from "react-icons/tb";

const Nav = () => {
  const [toggle, setToggle] = useState("hidden");

  const navData: Record<string, string>[] = [
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Projects",
      link: "/projects",
    },
  ];

  const navLinks = navData?.map((link) => (
    <li
      key={link?.title}
      className="text-sm py-1 max-md:py-2 px-6 max-md:px-3 max-md:w-full cursor-pointer hover:bg-gray-100 transition duration-150 rounded-sm"
    >
      {link?.title}
    </li>
  ));

  console.log(toggle);
  return (
    <nav className="z-10 flex items-center justify-between gap-2 px-1 py-4 mb-4 sticky top-0 bg-white">
      <div className="logo h-6 flex-1">
        <img
          src="https://res.cloudinary.com/daa68wahe/image/upload/v1700999882/Asset_2_id04vx.png"
          alt="sfwn.me's logo"
          className="h-full"
        />
      </div>
      <ul
        className={`
        capitalize items-center gap-2 max-md:flex-col max-md:items-start max-md:fixed max-md:top-20 max-md:right-1 max-md:bg-gray-50 max-md:shadow-md max-md:min-w-40 max-md:rounded 
        // idden
        ${toggle}
        p-2
        `}
      >
        {navLinks}
      </ul>
      <button
        type="button"
        className="bg-black py-1 px-6 text-white rounded-md text-sm hover:bg-gray-200 hover:text-black transition duration-150"
      >
        contact
      </button>
      {toggle === "flex" ? (
        <IoIosClose
          size={"1.5rem"}
          onClick={() =>
            setToggle((prev) => (prev === "hidden" ? "flex" : "hidden"))
          }
          className="md:hidden cursor-pointer"
        />
      ) : (
        <TbMenu
          size={"1.5rem"}
          onClick={() =>
            setToggle((prev) => (prev === "hidden" ? "flex" : "hidden"))
          }
          className="cursor-pointer"
        />
      )}
    </nav>
  );
};

export default Nav;
