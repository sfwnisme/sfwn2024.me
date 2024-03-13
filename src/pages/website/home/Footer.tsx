const Footer = () => {
  const year: number = new Date().getFullYear();
  return (
    <footer className="text-black font-light relative flex items-center justify-center p-5">
      <span className="year block text-xs text-gray-500">
        &copy;{year} | All Rights Reserved{" "}
        <a className="text-red-500" href="https://github.com/sfwnisme">
          SFWN
        </a>
      </span>
    </footer>
  );
};

export default Footer;
