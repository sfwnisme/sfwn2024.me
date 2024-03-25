import { useEffect, useLayoutEffect, useState } from "react";
import { BiUpArrow } from "react-icons/bi";

const Btn01 = () => {
  const [up, setUp] = useState(1);
  const [showUp, setShowUp] = useState("invisible");

  useLayoutEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [up]);
  console.log(up);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setShowUp("visible");
      } else {
        setShowUp("invisible");
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  console.log(showUp);

  return (
    <>
      {showUp ? (
        <button
          type="button"
          title="go up"
          className={`z-50 fixed bottom-4 right-4 p-1 border text-gray-700 border-gray-400 rounded bg-white hover:bg-gray-100 trnasition duration-150 ${showUp}`}
          onClick={() => setUp((prev) => ++prev)}
        >
          {/* <BiUpArrow /> */}
          UP
        </button>
      ) : null}
    </>
  );
};

export default Btn01;
