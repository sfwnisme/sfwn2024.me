import Wrapper from "../../../components/Wrapper";
import {} from "react-icons";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  return (
    <Wrapper title="Contact">
      <div className="">
        <p className="mb-8">
          Have a question or just want to chat? Feel free to email me. Try
          finding me anywhere else at @saifmohamedsv
        </p>
        <ul className="grid grid-cols-2 gap-2">
          <li className="text-base w-full">
            <a
              href=""
              className="inline-flex justify-between bg-gray-50 text-gray-700 p-3 w-full rounded"
            >
              <div className="flex gap-2 flex-1">
                <AiOutlineMail size={"1.5rem"} />
                Email
              </div>
              <MdArrowOutward />
            </a>
          </li>
          <li className="text-base w-full">
            <a
              href=""
              className="inline-flex justify-between bg-gray-50 text-gray-700 p-3 w-full rounded"
            >
              <div className="flex gap-2 flex-1">
                <AiOutlineGithub size={"1.5rem"} />
                Email
              </div>
              <MdArrowOutward />
            </a>
          </li>
          <li className="text-base w-full">
            <a
              href=""
              className="inline-flex justify-between bg-gray-50 text-gray-700 p-3 w-full rounded"
            >
              <div className="flex gap-2 flex-1">
                <AiOutlineLinkedin size={"1.5rem"} />
                Linkedin
              </div>
              <MdArrowOutward />
            </a>
          </li>
          <li className="text-base w-full">
            <a
              href=""
              className="inline-flex justify-between bg-gray-50 text-gray-700 p-3 w-full rounded"
            >
              <div className="flex gap-2 flex-1">
                <AiOutlineFacebook size={"1.5rem"} />
                Facebook
              </div>
              <MdArrowOutward />
            </a>
          </li>
          <li className="text-base w-full">
            <a
              href=""
              className="inline-flex justify-between bg-gray-50 text-gray-700 p-3 w-full rounded"
            >
              <div className="flex gap-2 flex-1">
                <AiOutlineInstagram size={"1.5rem"} />
                Instagram
              </div>
              <MdArrowOutward />
            </a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Contact;
