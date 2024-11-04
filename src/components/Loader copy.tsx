import { useEffect, useState } from "react";
import "./Loader.css";
import { DELAY } from "../utils/utils";
const Loader = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    // const delays: number[] = [500, 1000, 1500, 2000];
    // const random: number = Math.floor(Math.random() * delays.length);
    // const delay: number = delays[random];
    // console.log(random);
    // const timer = setTimeout(() => setLoader(false), delay);
    // return () => clearTimeout(timer);
    DELAY(setLoader);
  }, []);
  return (
    <>
      {loader ? (
        <div className="z-50 h-screen w-screen fixed top-0 left-0 bg-white grid place-content-center">
          <div className="spinner">
            <div className="spinner1"></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Loader;
