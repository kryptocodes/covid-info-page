import React from "react";
import Image from "next/image";
import Virus from "../../assets/virus";
import Fade from "react-reveal/Fade";

interface WhatShouldWeDoProps {
  i: number;
  title: string;
  description: string;
  img: string;
}

const WhatShouldWeDo: React.FC<any> = ({}) => {
  const Data = [
    {
      title: "Wear Masks",
      description:
        "Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic 'outside the box' thinking. Objectively ",
      img: "wear_mask.png",
    },
    {
      title: "Wash Hands",
      description:
        "Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic 'outside the box' thinking. Objectively ",
      img: "wash.png",
    },
    {
      title: "Use nose -  rag",
      description:
        "Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic 'outside the box' thinking. Objectively ",
      img: "nose_rag.png",
    },
    {
      title: "Avoid contacts",
      description:
        "Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic 'outside the box' thinking. Objectively ",
      img: "avoid_contacts.png",
    },
  ];

  const Content: React.FC<WhatShouldWeDoProps> = ({
    i,
    title,
    description,
    img,
  }) => (
    <>
      <div
        className={`container mx-auto  flex sm:px-5 lg:pl-20 md:flex-row flex-col items-center ${
          i % 2 == 0 ? "p " : "sm:px-0 pr-5 text-left "
        }`}
      >
        <div
          className={`lg:flex-grow md:w-1/2 flex flex-col md:items-start px-5  text-left sm:items-center   sm:p-20 `}
        >
          <span className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-corona bg-opacity-20 text-corona mb-4 flex-shrink-0">
            0{i + 1}
          </span>

          <h1 className="text-4xl text-corona-green font-gelion font-semibold mb-4">
            {title}
          </h1>
          <p className="mb-8 z-50 leading-8 font-gelion text-corona-black text-sm w-full space-y-2 w-4/5 lg:w-5/6">
            {description}
          </p>
        </div>
        <div
          className={`lg:max-w-lg lg:w-1/3 md:w-1/2 w-5/6 mb-10 p-5 order-first md:mb-0 ${
            i % 2 == 0 ? "sm:order-last" : "sm:order-first"
          }`}
        >
          <Image
            className="object-cover object-center rounded"
            alt={title}
            src={require(`../../assets/${img}`)}
          />
        </div>
      </div>
    </>
  );

  const Component = () => (
    <section className="min-h-screen relative overflow-hidden" id="prevention">
      <Fade bottom cascade>
      <div className="container px-5 mx-auto mt-20  ">
        <div
          aria-hidden="true"
          className="absolute hidden sm:block  opacity-90 top-10 -left-20 "
        >
          <Virus width={200} height={200} color={"true"} />
        </div>

        <div className="flex flex-col text-left sm:text-center w-full mb-4">
          <h2 className="text-2xl text-corona  font-bold  mb-1">Covid-19</h2>
          <h1 className="sm:text-3xl text-4xl font-bold mb-4 leading-relaxed text-corona-green">
            What Should We Do
          </h1>
          <p className="lg:w-3/6 md:w-3/4 mx-auto font-gelion leading-8">
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type has caused
          </p>
        </div>
      </div>
      </Fade>

      <div className="lg:p-10">
        {Data.map((item, i) => (
          <Fade left={i % 2 === 0} right={i % 2 !== 0} duration={2000} key={i}>
          <Content
            key={i}
            i={i}
            title={item.title}
            description={item.description}
            img={item.img}
          />
          </Fade>
        ))}
        <Fade bottom cascade>
        <div
          aria-hidden="true"
          className="absolute hidden sm:block  bottom-80 md:right-20"
        >
          <Virus width={100} height={100} color={"true"} />
        </div>
        <div
          aria-hidden="true"
          className="absolute hidden sm:block bottom-10 -right-10 opacity-50"
        >
          <Virus width={200} height={200} />
        </div>
        </Fade>
      </div>
    </section>
  );
  return (
    <>
      <Component />
    </>
  );
};

export default WhatShouldWeDo;
