import Btn from "./Btn";

const Nav = () => {
  return (
    <nav className="z-50 sticky top-0 bg-white border-b">
      <div className="container mx-auto flex items-center justify-between gap-2 px-4 py-4">
        <div className="logo h-6 flex-1">
          <img
            // src="https://res.cloudinary.com/daa68wahe/image/upload/v1700999882/Asset_2_id04vx.png"
            src="./sfwn-logo-black.png"
            alt="sfwn.me's logo"
            className="h-full"
          />
        </div>
        <Btn>Contact</Btn>
      </div>
    </nav>
  );
};

export default Nav;
