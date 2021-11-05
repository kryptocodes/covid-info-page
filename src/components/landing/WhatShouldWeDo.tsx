import React from "react";
import Image from "next/image";

interface WhatShouldWeDoProps {
    i: number;
    title: string;
    description: string;
}

const WhatShouldWeDo: React.FC<any> = ({}) => {
    const Data = [
        {
            title: "Wear Masks",
            description: "Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic 'outside the box' thinking. Objectively "
        },
        {
            title: "Wash Hands",
            description: "Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic 'outside the box' thinking. Objectively "
        },
        {
            title: "Use nose -  rag",
            description: "Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic 'outside the box' thinking. Objectively "
        },
        {
            title: "Avoid contacts",
            description: "Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic 'outside the box' thinking. Objectively "
        }
        ]

  const Content:React.FC<WhatShouldWeDoProps> = ({i,title,description}) => (
    <>
      <div className="container mx-auto flex px-5 pl-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center p-20">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-corona bg-opacity-20 text-corona mb-4 flex-shrink-0">
              0{i+1}
          </div>
         
          <h1 className="text-4xl text-corona-green mb-4">{title}</h1>
          <p className="mb-8 leading-relaxed text-sm w-5/6">
            {description}
          </p>
        
        </div>
        <div className={`lg:max-w-lg lg:w-1/3 md:w-1/2 w-5/6 mb-10 p-5 md:mb-0 ${i % 2 == 0 ? 'order-last' : 'order-first'}`}>
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={require("../../assets/wear_mask.png")}
          />
        </div>
      </div>
    </>
  );

  const Component = () => (
    <section>
      <div className="container px-5  mx-auto mt-20  ">
        <div className="flex flex-col text-center w-full mb-4">
          <h2 className="text-lg text-corona  font-medium title-font mb-1">
            Covid-19
          </h2>
          <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-corona-green">
            What Should We Do
          </h1>
          <p className="lg:w-3/6 mx-auto text-gray-500 leading-relaxed text-base">
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type has caused
          </p>
        </div>
      </div>
      <div className="p-10">
          {Data.map((item,i) => <Content key={i} i={i} title={item.title} description={item.description}/>)}
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
