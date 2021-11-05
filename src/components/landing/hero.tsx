import React from "react";
import Image from "next/image";

interface heroProps {}

const Hero: React.FC<heroProps> = ({}) => {
  const Component = () => (
    <>
      <section className="text-gray-600 ">
        <div className="flex  py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 px-40 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" sm:text-2xl text-2xl mb-2 text-corona">
              COVID-19 Alert
            </h1>
            <h2 className="text-4xl text-corona-green">
              Stay at Home Quarantine <br/> To stop Corona virus
            </h2>
            <p className="mb-8 mt-4 leading-relaxed">
              There is no specific medicine to prevent or treat coronavirus
              disease (COVID-19). People may need supportive care to .
            </p>
            <div className="flex justify-center">
              <button className="inline-flex rounded-full text-white bg-corona border-2 border-corona py-2 px-8 focus:outline-none hover:text-corona hover:bg-transparent text-sm">
                Let Us Help
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            <Image
              className=" rounded mr-auto flex object-cover object-fit"
              src={require("../../assets/landing_1.png")}
              alt="hero"
            />
          </div>
        </div>
      </section>
    </>
  );
  return <Component />;
};

export default Hero;
