const Intor = () => {
  return (
    <div className="relative h-[calc(100svh-85px)] w-full flex flex-col justify-center items-start">
      {/* <p className="text-[15px] font-light px-2 rounded-sm tracking-[5px]">Safwan Mohamed</p> */}
      <span className="z-0 blur-3xl bg-yellow-400/20 h-96 w-96 rounded-full absolute top-0 -left-20 -translate-y-1/2"></span>
      <span className="z-0 blur-3xl bg-red-400/20 h-72 w-72 rounded-full absolute top-24 right-10 -translate-y-1/2"></span>
      <span className="z-0 blur-3xl bg-blue-400/20 h-96 w-96 rounded-full absolute -bottom-24 right-10 -translate-y-1/2"></span>
      <span className="z-0 blur-3xl bg-green-400/20 h-96 w-96 rounded-full absolute bottom-24 right-32 -translate-y-1/2"></span>
      {/* <span className="w-40 h-40 bg-gray-200 rounded-full mb-4"></span> */}
      <h1 className="z-10 text-5xl sm:text-6xl md:text-7xl text-gray-800 font-normal flex items-end flex-wrap">
        Safwan
        <span className="flex items-end">
          <span className="w-40 h-1 bg-black flex"></span>Mohamed
        </span>
      </h1>
      {/* <span className="w-full h-4 bg-gray-200 rounded mb-1"></span> */}
      {/* <span className="w-40 h-4 bg-gray-200 rounded"></span> */}
    </div>
  );
};

export default Intor;
