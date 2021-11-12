import React from "react";
import Image from "next/image";
import Virus from "../../assets/virus";
import Fade  from "react-reveal/Fade"

interface contagionProps {
  title: string;
  description: string;
  image: string;
}

let Direction;

const Contagion: React.FC<any> = ({}) => {
  const Data = [
    {
      title: "Air Transmission",
      description:
        "Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify",
      image: "card_1.png",
      left : true,
    },
    {
      title: "Human Contacts",
      description:
        "Washing your hands is one of the simplest ways you can protect",
      image: "card_2.png",
      bottom : true,
    },
    {
      title: "Containted Objects",
      description:
        "Use the tissue while sneezing,In this way, you can protect your droplets.",
      image: "card_3.png",
      right : true,
    },
  ];

  const CardComponent: React.FC<contagionProps> = ({
    title,
    description,
    image,
  }) => (
    <>
      <div className="w-full mb-4 bg-white h-full md:px-2  z-50 rounded-lg lg:p-10  p-4 flex flex-col justify-center items-center border-b-4 transform hover:-translate-y-1 transition duration-500 ease-in-out hover:border-corona hover:shadow-lg">
        <div className="mb-8">
          <Image
            className="object-center h-36 w-36"
            src={require(`../../assets/${image}`)}
            alt={image}
          />
        </div>
        <div className="text-center">
          <p className="text-2xl text-corona-green font-bold font-gelion mb-2">
            {title}
          </p>
          <p className="text-base text-corona-black md:p-2 font-normal font-gelion">
            {description}
          </p>
        </div>
      </div>
    </>
  );

  const Component = () => (
    <>
    
      <section id="contagion">
      <Fade cascade>
        <div className="container px-5  mx-auto ">
          <div className="flex flex-col sm:text-center text-left w-full mb-20">
            <h2 className="text-lg text-corona leading-8  font-bold title-font mb-1">
              Covid-19
            </h2>
            <h1 className="sm:text-3xl text-4xl  font-bold title-font mb-4 text-corona-green">
              Contagion
            </h1>
            <p className="lg:w-3/6 md:w-3/4 mx-auto text-gray-500 font-gelion leading-8 text-base">
              Corona viruses are a type of virus. There are many different
              kinds, and some cause disease. A newly identified type
            </p>
          </div>
        </div>
        </Fade>
        <div className="grid grid-cols-1 relative  sm:grid-cols-2 lg:p-28 p-4 md:p-8 -mt-20 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <div
            aria-hidden="true"
            className="absolute z-0 hidden sm:block bottom-10 left-0 "
          >
            <Virus className="w-52 opacity-50" />
          </div>

          {Data.map((item, index) => (
            <div className="p-2 sm:p-0 z-50 h-full" key={index}>
            <Fade left={item?.left} right={item?.right} bottom={item?.bottom} duration={index*1000 + 1000}>
              <CardComponent
                title={item?.title}
                description={item?.description}
                image={item?.image}
              />
              </Fade>
            </div>
          ))}
        </div>
      </section>
    </>
  );
  return (
    <>
      <Component />
    </>
  );
};

export default Contagion;
