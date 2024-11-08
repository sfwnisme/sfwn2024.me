import { useEffect, useState } from "react";
// import "./Loader.css";
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
        <div className="h-screen w-screen bg-white fixed top-0 left-0 z-50">
          <img src="./logo2.png" alt="loader logo" className="h-12 absolute transform -tranzinc-x-1/2 -tranzinc-y-1/2 top-1/2 left-1/2 animate-pulse" />
        </div>
      ) : null}
    </>
  );
};

export default Loader;
