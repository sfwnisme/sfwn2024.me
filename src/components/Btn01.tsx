import { useEffect, useLayoutEffect, useState } from "react";
import { SlArrowUp } from "react-icons/sl";

const Btn01 = () => {
  const [up, setUp] = useState(1);
  const [showUp, setShowUp] = useState("invisible");

  useLayoutEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [up]);
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

  return (
    <>
      {showUp ? (
        <button
          type="button"
          title="go up"
          className={`z-50 fixed bottom-8 right-4 p-px text-gray-700 hover:text-white border border-gray-200 hover:border-red-300 border-dashed rounded bg-white hover:bg-gray-100 trnasition duration-150 ${showUp}`}
          onClick={() => setUp((prev) => ++prev)}
        >
          <div className="p-[2px] m-px hover:bg-red-500 rounded-sm">
            <SlArrowUp className="bg-white rounded-sm text-red-500 p-px" />
          </div>
        </button>
      ) : null}
    </>
  );
};

export default Btn01;
