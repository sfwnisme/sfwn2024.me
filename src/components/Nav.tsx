import Btn from "./Btn";

const Nav = () => {
  return (
    <nav className="z-50 sticky top-0 bg-white border-b">
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
        <Btn>Contact</Btn>
      </div>
      <a
        href="mailto:safwanmohamedabdo@gmail.com"
        className="absolute top-full bg-yellow-200 text-yellow-600 text-sm p-1 rounded-sm"
      >
        #Open_to_work
      </a>
    </nav>
  );
};

export default Nav;
