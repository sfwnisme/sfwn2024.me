import Wrapper from "../../../components/Wrapper";

const Techs = () => {
  const mainTechs: string[] = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "i18next",
    "Redux Toolkit",
    "Node Package Manager(npm)",
    "React",
    "version controle git",
    "RESTfull API",
    "github",
  ];
  const helperTechsAndLibs: string[] = [
    "React Router Dom",
    "React Query",
    "React Hook From",
    "React Toastify",
    "Axios",
    "yup",
    "React Skeleton",
    "Tailwind",
    "flowbite",
    "bootstrap",
    "figma",
  ];

  const main = mainTechs?.map((tech) => (
    // <li className="text-sm w-full p-[5px] bg-gray-50">
    <li className="text-sm w-fit p-[2px] bg-gray-50 rounded-sm cursor-pointer grow">
      {/* className="group inline-flex items-center justify-between gap-4 hover:bg-gray-200 text-gray-700 p-3 w-full rounded-sm transition duration-200" */}
      <div
        className="flex gap-2 flex-1
      hover:bg-gray-100 text-[13px] text-gray-700
       p-1 w-full rounded-sm transition duration-200
      "
      >
        {/* {React.createElement(link?.icon, { size: "1.5rem" })} */}
        {tech}
      </div>
    </li>
  ));

  const helper = helperTechsAndLibs?.map((tech) => (
    // <li className="text-sm w-full p-[5px] bg-gray-50">
    <li className="text-sm w-fit p-[2px] bg-gray-50 rounded-sm cursor-pointer grow">
      {/* className="group inline-flex items-center justify-between gap-4 hover:bg-gray-200 text-gray-700 p-3 w-full rounded-sm transition duration-200" */}
      <div
        className="flex gap-2 flex-1
      hover:bg-gray-100 text-[13px] text-gray-700
       p-1 w-full rounded-sm transition duration-200
      "
      >
        {/* {React.createElement(link?.icon, { size: "1.5rem" })} */}
        {tech}
      </div>
    </li>
  ));

  return (
    <Wrapper title="Technologies">
      <div className="" data-aos="fade-up">
        <p className="mb-8">
          Have a question or just want to chat? Feel free to email me. Try
          finding me anywhere else at @saifmohamedsv
        </p>
        {/* <ul className="grid grid-col-1 md:grid-cols-2 gap-2">{main}</ul> */}
        <h1 className="mb-2 underline text-sm text-gray-500">Main Techs:</h1>
        <ul className="flex flex-wrap gap-0.5 mb-6">{main}</ul>
        <h1 className="mb-2 underline text-sm text-gray-500">
          Helper Techs and Libs:
        </h1>
        <ul className="flex flex-wrap gap-0.5">{helper}</ul>
      </div>
    </Wrapper>
  );
};

export default Techs;
