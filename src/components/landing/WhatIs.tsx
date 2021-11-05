import React from "react";
import Image from "next/image";

interface WhatIsProps {}

const WhatIs: React.FC<WhatIsProps> = ({}) => {
  const Component = () => (
    <section>
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={require("../../assets/landing_2.png")}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center p-20">
          <h1 className="title-font sm:text-2xl text-2xl mb-2  font-medium text-corona">
            What Is Covid-19
          </h1>
          <h2 className="text-4xl text-corona-green mb-4">Coronavirus</h2>
          <p className="mb-8 leading-relaxed text-sm">
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type has caused a recent
            outbreak of respiratory illness now called COVID-19.Lauren Sauer,
            M.S., the director of operations with the Johns Hopkins Office of
            Critical Event Preparedness and Response
          </p>
          <div className="flex justify-center">
          <button className="inline-flex rounded-full text-white bg-corona bg-opacity-50 border py-2 px-8 focus:outline-none hover:text-corona hover:bg-transparent text-sm">
                Learn More
              </button>
          </div>
        </div>
      </div>
    </section>
  );
  return (
    <>
      <Component />
    </>
  );
};

export default WhatIs;
