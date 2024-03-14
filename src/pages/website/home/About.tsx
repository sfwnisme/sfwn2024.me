import Wrapper from "../../../components/Wrapper";
import useDataSrc from "../../../hooks/useDataSrc";

const About = () => {
  const { info } = useDataSrc();
  const {
    name: { first_name, last_name },
    job,
    sub_job,
  } = info;
  console.log(info);
  return (
    <Wrapper title="About">
      <div className="flex flex-col items-start justify-start gap-4 max-sm:gap-2">
        <p className="capitalize">
          {first_name} {last_name} {job} and {sub_job}
        </p>
        <p>
          I have a passion for design and am always looking for ways to
          incorporate it into my engineering work.
        </p>
        <p>
          In addition to coding, I also mentor junior developers to be better
          and be job-ready at my Discord server
        </p>
        <p>
          When I'm not at my desk I am probably doing martial arts, watching
          movies, or at a coffee shop :)
        </p>
      </div>
    </Wrapper>
  );
};

export default About;
