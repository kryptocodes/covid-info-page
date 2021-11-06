import React from "react";
import Image from "next/image";

interface contagionProps {
  title: string;
  description: string;
  image: string;
}

const Contagion: React.FC<any> = ({}) => {
  const Data = [
    {
      title: "Air Transmission",
      description:
        "Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify",
      image: "card_1.png",
    },
    {
      title: "Human Contacts",
      description:
        "Washing your hands is one of thesimplest ways you can protect",
      image: "card_2.png",
    },
    {
      title: "Containted Objects",
      description:
        "Use the tissue while sneezing,In this way, you can protect your droplets.",
      image: "card_3.png",
    },
  ];

  const CardComponent: React.FC<contagionProps> = ({
    title,
    description,
    image,
  }) => (
    <>
      <div className="w-full bg-white rounded-lg lg:p-12 p-4 flex flex-col justify-center items-center border-b-4 hover:border-corona hover:shadow-lg">
        <div className="mb-8">
          <Image
            className="object-center h-36 w-36"
            src={require(`../../assets/${image}`)}
            alt={image}
          />
        </div>
        <div className="text-center">
          <p className="text-xl text-corona-green font-bold mb-2">{title}</p>
          <p className="text-base text-gray-400 font-normal">{description}</p>
        </div>
      </div>
    </>
  );

  const Component = () => (
    <>
      <section>
        <div className="container px-5  mx-auto   ">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-lg text-corona  font-medium title-font mb-1">
              Covid-19
            </h2>
            <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-corona-green">
              Contagion
            </h1>
            <p className="lg:w-3/6 md:w-3/4 mx-auto text-gray-500 leading-relaxed text-base">
              Corona viruses are a type of virus. There are many different
              kinds, and some cause disease. A newly identified type
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:p-28 p-4 md:p-8 -mt-20 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {Data.map((item, index) => (
            <React.Fragment key={index}>
              <CardComponent
                title={item?.title}
                description={item?.description}
                image={item?.image}
              />
            </React.Fragment>
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
