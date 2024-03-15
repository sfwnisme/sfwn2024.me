import Wrapper from "../../../components/Wrapper";

const Work = () => {
  const projectsData = [
    {
      icon: "https://res.cloudinary.com/daa68wahe/image/upload/v1700999882/Asset_2_id04vx.png",
      title: "Marketing Team Leader, IT",
      company: "Makhazen Electra",
      year: "2024,mar - present",
    },
    {
      icon: "https://res.cloudinary.com/daa68wahe/image/upload/v1700999882/Asset_2_id04vx.png",
      title: "Marketing Team Leader, IT",
      company: "PR Est.",
      year: "2023,feb - present",
    },
    {
      icon: "https://res.cloudinary.com/daa68wahe/image/upload/v1700999882/Asset_2_id04vx.png",
      title: "Marketing",
      company: "Albeity World for Computers",
      year: "2021,aug - 2023,feb",
    },
  ];

  const projectsList = projectsData?.map((project) => (
    <div className="flex items-start justify-between gap-4 text-sm">
      <div className="md:h-16 h-14 md:w-16 w-14 grid place-items-center place-content-center border rounded-full p-3">
        <img src={project?.icon} alt={project?.title} className="w-full" />
      </div>
      <div className=" flex-1">
        <p>{project?.title}</p>
        <p className="text-gray-500 text-xs font-light w-4/3">
          {project?.company}
        </p>
      </div>
      <p className="text-gray-400 text-xs font-light">{project?.year}</p>
    </div>
  ));

  return (
    <Wrapper title="Work">
      <div data-aos="fade-up">
        <div className="flex flex-col gap-4 mb-8">
          <p>3+ years of professional development experience.</p>
          <p>
            I started my career , which I will always be appreciative of. Then I
            worked at a few small local companies. Now I'm a full stack frontend
            engineer currently working at None
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 items-center">
          {projectsList}
        </div>
      </div>
    </Wrapper>
  );
};

export default Work;
