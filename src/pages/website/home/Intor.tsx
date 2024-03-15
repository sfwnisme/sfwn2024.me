import { BsCursorFill } from "react-icons/bs";

const Intor = () => {
  return (
    <div className="relative h-[calc(100svh-85px)] w-full flex flex-col justify-center items-start">
      {/* <span className="z-0 blur-3xl bg-yellow-400/20 h-96 w-96 rounded-full absolute top-0 -left-20 -translate-y-1/2"></span>
      <span className="z-0 blur-3xl bg-red-400/20 h-72 w-72 rounded-full absolute top-24 right-10 -translate-y-1/2"></span>
      <span className="z-0 blur-3xl bg-blue-400/20 h-96 w-96 rounded-full absolute -bottom-24 right-10 -translate-y-1/2"></span>
      <span className="z-0 blur-3xl bg-green-400/20 h-96 w-96 rounded-full absolute bottom-24 right-32 -translate-y-1/2"></span> */}
      {/* <span className="w-40 h-40 bg-gray-200 rounded-full mb-4"></span> */}
      <h1 className="relative mb-10 z-10 bg-red-400 p-4 rounded-2xl text-2xl sm:text-6xl md:text-7xl text-gray-800 font-medium flex items-end flex-wrap border-2 border-black border-dashed transform rotate-12">
        <span className="bg-white border-2 border-black p-2 rounded">
          Safwan Mohamed
          <BsCursorFill
            className="absolute right-0 transform -scale-x-1"
            color="white"
            // fill=""
          />
        </span>
      </h1>
      <h1 className="relative z-10 bg-yellow-400 p-4 rounded-2xl text-2xl sm:text-6xl md:text-7xl text-gray-800 font-medium flex items-end flex-wrap border-2 border-black border-dashed transform -rotate-[5deg]">
        <span className="bg-white border-2 border-black p-2 rounded">
          Frontend Developer
          <BsCursorFill
            className="absolute right-0 transform -scale-x-1"
            color="white"
            // fill=""
          />
        </span>
      </h1>
    </div>
  );
};

export default Intor;
