import React from "react";
import Image from "next/image";
import Virus from "../../assets/virus";

interface heroProps {}

const Hero: React.FC<heroProps> = ({}) => {
  const Component = () => (
    <>
      <section className="text-gray-600 mx-auto relative overflow-hidden" id="overview">
        <div className="flex py-10 sm:py-24 md:flex-row flex-col xl:px-20 2xl:px-96 items-center text-left  ">
          <div className="lg:flex-grow md:w-1/2 sm:px-5 p-4 lg:px-10 md:px-5 lg:pr-24 sm:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 sm:items-center  ">
            <h1 className=" sm:text-2xl text-2xl mb-2 text-corona font-bold">
              COVID-19 Alert
            </h1>
            <h2 className="text-4xl text-corona-green font-bold leading-snug">
              Stay at Home Quarantine <br /> To stop Corona virus
            </h2>
            <p className="mb-8 mt-4 xl:w-3/4 font-2xl font-gelion font-normal leading-relaxed sm:leading-8">
              There is no specific medicine to prevent or treat coronavirus
              disease (COVID-19). People may need supportive care to .
            </p>
            <div className="flex sm:justify-center">
              <button className="inline-flex rounded-full text-white bg-corona border-2 border-corona py-2 px-8 focus:outline-none hover:text-corona hover:bg-transparent text-sm">
                Let Us Help
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 w-full z-50 ">
            <Image
              className=" rounded mr-auto flex object-cover object-fit"
              src={require("../../assets/landing.png")}
              alt="hero"
            />
          </div>
          <div aria-hidden="true" className="absolute hidden sm:block top-16 right-96 z-0">
          <Virus width={100} height={100} />
    </div>
          <div aria-hidden="true" className="absolute  bottom-80 md:right-20  w-[50px] h-[20px]">
        <Image src={require("../../assets/path1471.png")} height={'100px'} width={'100px'}  className="sm:w-[10px] sm:h-[10px]  ml-3 mt-3" alt="hero" />
    </div>
         <div aria-hidden="true" className="absolute  bottom-10 -right-10 opacity-50"> 
         <Virus width={200} height={200} />
    </div>
        </div>
      </section>
    </>
  );
  return <Component />;
};

export default Hero;
