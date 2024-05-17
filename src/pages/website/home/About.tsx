import { useEffect, useRef, useState } from "react";
import Wrapper from "../../../components/Wrapper";

const About = () => {
  const [nodeH, setNodeH] = useState(0);
  const hRef = useRef(null);
  const wrapperRef = useRef(null);
  const year = new Date().getFullYear() - 2021;
  console.log(year);
  useEffect(() => {
    // const timer = setTimeout(
    // () =>
    const wrapper = document.querySelector(".WRAPPER");
    console.log(wrapper.getBoundingClientRect()?.height);

    let height = hRef?.current?.getBoundingClientRect()?.height;
    console.log(height);
    setNodeH(height);
    // 300
    // );
    // return () => clearTimeout(timer);
    // console.log(hRef.current.clientHeight);
  }, []);

  return (
    <Wrapper title="About">
      <div
        className={`flex flex-col items-start justify-start gap-4 max-sm:gap-2 ${
          nodeH === 0
            ? "h-auto bg-blue-500"
            : nodeH > `h-[${nodeH}px] bg-blue-500`
        }`}
        data-aos="fade-up"
        ref={hRef}
      >
        <p className="capitalize">Safwan Mohamde,</p>
        <p>
          I got my passion with web development and providing marketing services
          for startups helping them passing the right course.
        </p>
        <p>
          Currently, I'm working in the marketing, and web development fields
          for severel e-commerce in KSA.
        </p>
        <p>
          For bussiness requirements{" "}
          <a href="mailto:hi@sfwn.me" className="underline text-blue-500">
            contact me
          </a>
        </p>
      </div>
    </Wrapper>
  );
};

export default About;
