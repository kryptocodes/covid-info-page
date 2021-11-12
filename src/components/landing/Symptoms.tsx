import React from "react";
import Image from "next/image";

import Fade from "react-reveal/Fade"

const Symptoms: React.FC<any> = () => {
  const Component = () => (
    <Fade cascade bottom>
    <section id="symptoms">
      <div className="container py-10 px-5  mx-auto">
        <div className="flex flex-col text-left sm:text-center w-full mb-4">
          <h2 className="text-2xl text-corona  font-bold  mb-1">
            Covid-19
          </h2>
          <h1 className="sm:text-3xl text-4xl leading-relaxed font-bold mb-4 text-corona-green">
            Symptoms
          </h1>
          <p className="lg:w-3/6 mx-auto text-corona-black leading-8 font-gelion">
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type has caused a recent
            outbreak of respiratory
          </p>
        </div>
      </div>
      <div className="container mx-auto md:w-3/6 w-5/6 ">
        <Image
          className="object-cover object-center h-full w-full"
          src={require("../../assets/symptoms.png")}
          alt="Symptoms"
        />
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

export default Symptoms;
