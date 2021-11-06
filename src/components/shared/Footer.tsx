import React from "react";
import Image from "next/image"

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
    const Data = [
        {
          name: "Overview",
          link: "/"
        },
        {
          name: "Contagion",
          link: "/contagion"
        },
        {
          name: "Symptoms",
          link: "/symptoms"
        },
        {
          name: "Prevention",
          link: "/prevention"
        } 
    
      ]
  const Contact = () => (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <h1 className="text-corona-green font-bold text-center text-2xl  md:text-4xl">
            Have Question in mind? <br /> Let us help you
          </h1>
        </div>

        <div className="flex  shadow w-full sm:w-1/2 lg:w-1/2 mx-auto mt-4 items-center bg-white rounded-lg overflow-hidden px-2 py-4 rounded-full justify-between">
          <input
            className="text-base text-gray-400 flex-grow outline-none px-2 "
            type="text"
            placeholder="snmonydemo@gmail.com"
          />
          <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
            <button className="bg-corona text-white text-base rounded-full px-4 py-2 font-thin">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );

const FooterContent = () => (
    <>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <Image src={require('../../assets/logo.png')} alt="logo" width={50} height={50} />
      <span className="ml-3 text-xl">Covid-19</span>
    </a>
    <span className="md:inline-flex grid grid-col-1 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4 ">
        {Data.map((item, index) => (
        <a key={index} className="ml-3 text-gray-500">
            {item.name}
        </a>))}
   </span>



    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
  <div className="text-center text-gray-500 -mt-4 mb-4">
  {new Date().getFullYear()} @ All rights reserved by Kryptocodes
  </div>
</footer>
    </>
)

  return (
    <>
      <section>
        <Contact />
        <FooterContent />
      </section>
    </>
  );
};

export default Footer;
