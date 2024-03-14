// import { useState } from "react";
import Btn from "./Btn";

const Nav = () => {
  // const [toggle, setToggle] = useState(false);

  // const navData: Record<string, string>[] = [
  //   {
  //     title: "About",
  //     link: "/about",
  //   },
  //   {
  //     title: "Blog",
  //     link: "/blog",
  //   },
  //   {
  //     title: "Projects",
  //     link: "/projects",
  //   },
  // ];

  // const navLinks = navData?.map((link) => (
  //   <li
  //     key={link?.title}
  //     className="text-sm py-1 max-md:py-2 px-6 max-md:px-3 max-md:w-full cursor-pointer hover:bg-gray-100 transition duration-150 rounded-sm"
  //   >
  //     {link?.title}
  //   </li>
  // ));

  // console.log(toggle);
  return (
    <nav className="z-50 bg-white/10 backdrop-blur-3xl sticky top-0">
      <div className="container mx-auto flex items-center justify-between gap-2 px-4 py-4 mb-4">
        <div className="logo h-6 flex-1">
          <img
            src="https://res.cloudinary.com/daa68wahe/image/upload/v1700999882/Asset_2_id04vx.png"
            alt="sfwn.me's logo"
            className="h-full"
          />
        </div>
        {/* {toggle ? (
        <ul
          className={`
          capitalize items-center gap-2 max-md:flex-col max-md:items-start max-md:fixed max-md:top-20 max-md:right-1 max-md:bg-gray-50 max-md:shadow-md max-md:min-w-40 max-md:rounded 
          p-2
          md:hidden
          `}
          >
          {navLinks}
          </ul>
          ) : undefined}
          <ul
          className={`
          capitalize flex items-center gap-2 
          p-2
          max-md:hidden
          `}
          >
          {navLinks}
          </ul>
          {toggle ? (
            <IoMdClose
            size={"1.5rem"}
          onClick={() => setToggle((prev) => !prev)}
          className="md:invisible cursor-pointer"
          />
          ) : (
            <TbMenu
            size={"1.5rem"}
            onClick={() => setToggle((prev) => !prev)}
        className={`md:invisible cursor-pointer`}
        />
      )} */}
        {/* <button
        type="button"
        className="bg-black py-1 px-6 text-white rounded-md text-sm hover:bg-gray-200 hover:text-black transition duration-150"
        >
        contact
      </button> */}
        <Btn>Contact</Btn>
      </div>
    </nav>
  );
};

export default Nav;
