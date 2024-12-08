import Link from "../../../components/Link";
import Wrapper from "../../../components/Wrapper";

const About = () => {
	return (
		<Wrapper title="About">
			<div
				className={`flex flex-col items-start justify-start gap-4 max-sm:gap-2`}
				data-aos="fade-up"
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
					<Link
						href="mailto:hi@sfwn.me"
						className="underline text-zinc-500"
						// weight="bold"
						underline="visible"
					>
						contact me
					</Link>
				</p>
			</div>
		</Wrapper>
	);
};

export default About;
