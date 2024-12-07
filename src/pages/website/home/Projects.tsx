import Repo from "../../../components/Repo";
import Wrapper from "../../../components/Wrapper";
const repos = [
  "visi",
  "school-management-system",
  "e-commerce",
  "ticketing-issue",
];

export default function Projects() {
  return (
    <Wrapper title="Projects" width="full" theme="dark">
      <div
        className={`flex flex-wrap items-start justify-start gap-4 max-sm:gap-2`}
        /* className={`grid lg:grid-cols-2 items-start justify-start gap-4 max-sm:gap-2`} */
        data-aos="fade-up"
      >
        {repos?.map((repo) => (
          <div key={repo} className="flex-grow">
            <Repo repo={repo} key={repo} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
