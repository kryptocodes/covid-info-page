import React from "react";
import Image from "next/image";
import Virus from "../../assets/virus";

import Fade from "react-reveal/Fade";
import What_Is from "../../assets/What_Is";

interface WhatIsProps {}

const WhatIs: React.FC<WhatIsProps> = ({}) => {
  const Component = () => (
    <Fade bottom cascade> 
    <section className="overflow-hidden mb-20 relative">
      <div className="container mx-auto flex lg:px-5 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 sm:block md:order-first order-last">
          <What_Is className="object-cover object-center z-9999"/>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 z-9999 flex flex-col md:items-start md:text-left sm:items-center px-5 md:p-10">
          <h1 className="title-font font-bold sm:text-2xl text-2xl mb-2  font-medium text-corona">
            What Is Covid-19
          </h1>
          <h2 className="text-4xl text-corona-green mb-4 font-bold">Coronavirus</h2>
          <p className="mb-8 leading-8 text-gray-500 text-sm font-gelion z-auto" >
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type has caused a recent
            outbreak of respiratory illness now called COVID-19.Lauren Sauer,
            M.S., the director of operations with the Johns Hopkins Office of
            Critical Event Preparedness and Response
          </p>
          <div className="flex sm:justify-center">
          <button className="inline-flex rounded-full text-corona  bg-corona bg-opacity-20 font-bold border py-2 px-8 focus:outline-none hover:text-white hover:bg-corona text-sm">
                Learn More
              </button>
          </div>
        </div>
      </div>
         <div aria-hidden="true" className="absolute bottom-10 -right-28 sm:-right-20 opacity-50 ">
        <Virus width={200} height={200} className="z-0 opacity-50" />
    </div>
    <div aria-hidden="true" className="absolute bottom-0 md:right-20 z-0">
        <Virus width={80} height={80} className="w-24 sm:w-auto z-0 opacity-50" />
    </div>
     
    </section>
    </Fade>
  );
  return (
    <>
      <Component />
    </>
  );
};

export default WhatIs;
