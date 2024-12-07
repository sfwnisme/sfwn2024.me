import { useEffect, useState } from "react";
// import "./Loader.css";
import { DELAY } from "../utils/utils";
const Loader = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    DELAY(setLoader);
  }, []);
  return (
    <>
      {loader ? (
        <div className="h-screen w-screen bg-white fixed top-0 left-0 z-50">
          <img src="./logo2.png" alt="loader logo" className="h-12 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-pulse" />
        </div>
      ) : null}
    </>
  );
};

export default Loader;
