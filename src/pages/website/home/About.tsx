import Wrapper from "../../../components/Wrapper";
import useDataSrc from "../../../hooks/useDataSrc";

const About = () => {
  const year = new Date().getFullYear() - 2021;
  console.log(year);
  const { info } = useDataSrc();
  const {
    name: { first_name, last_name },
    job,
    sub_job,
  } = info;
  console.log(info);
  return (
    <Wrapper title="About">
      <div
        className="flex flex-col items-start justify-start gap-4 max-sm:gap-2"
        data-aos="fade-up"
      >
        <p className="capitalize">Safwan Mohamde,</p>
        <p>
          I got my passion with web development and providing marketing services
          for startups helping them pass in the right path
        </p>
        <p>
          Currently, I'm working as Marketing Team Leader for severel e-commerce
          in KSA.
        </p>
        <p>
          Frontend development got the most of my interest, thus I'm scaling
          that for {""}
          {year} till now
        </p>
      </div>
    </Wrapper>
  );
};

export default About;
