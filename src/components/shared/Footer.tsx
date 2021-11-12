import React from "react";
import Image from "next/image";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const Data = [
    {
      name: "Overview",
      link: "#",
    },
    {
      name: "Contagion",
      link: "#contagion",
    },
    {
      name: "Symptoms",
      link: "#symptoms",
    },
    {
      name: "Prevention",
      link: "#prevention",
    },
  ];
  const Contact = () => (
    <section id="contact">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <h1 className="text-corona-green font-bold text-center text-2xl  md:text-4xl">
            Have Question in mind? <br /> Let us help you
          </h1>
        </div>

        <div className="flex  shadow w-full sm:w-1/2 lg:w-1/2 mx-auto mt-4 items-center bg-white rounded-lg overflow-hidden px-2 py-4 rounded-full justify-between">
          <input
            className="text-base text-gray-400 flex-grow outline-none px-2"
            type="text"
            placeholder="snmonydemo@gmail.com"
          />
          <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
            <button className="bg-corona text-white text-base rounded-full px-4 py-2 font-thin">
              Send
            </button>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute hidden sm:block  top-0 sm:right-20  w-[50px] h-[20px] opacity-50"
        >
          <Image
            src={require("../../assets/path1471.png")}
            height={"100px"}
            width={"100px"}
            className="sm:w-[10px] sm:h-[10px] "
            alt="path1471"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute hidden sm:block sm:top-20 -right-20 opacity-50"
        >
          <Image
            src={require("../../assets/path1471.png")}
            height={200}
            width={200}
            className="sm:w-[50x] sm:h-[52px] "
            alt="hero"
          />
        </div>
      </div>
    </section>
  );

  const FooterContent = () => (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={require("../../assets/logo.png")}
              alt="logo"
              width={50}
              height={50}
            />
            <span className="ml-3 text-xl uppercase text-corona-green font-bold">
              Covid-19
            </span>
          </a>
          <span className="md:inline-flex grid grid-col-1 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4 ">
            {Data.map((item, index) => (
              <a
                href={item?.link}
                key={index}
                className="ml-3 hover:text-corona text-corona-green"
              >
                {item.name}
              </a>
            ))}
          </span>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-corona-green">
            <a className="">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>

            <a className="ml-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 23 16"
              >
                <path
                  fill="#F44A45"
                  d="M9.581 10.991l5.942-3.07-5.942-3.105v6.175zM11.852.408c1.375 0 2.701.02 3.978.062 1.285.033 2.226.07 2.824.11l.896.05.209.024c.13.008.225.02.282.037.057.008.151.024.282.049.14.025.258.057.356.098.099.041.213.094.344.16.131.065.258.147.38.245.123.09.242.197.357.32.049.049.11.126.184.233.082.098.2.335.356.712.164.376.274.79.331 1.24.066.524.115 1.084.148 1.682.04.589.065 1.051.073 1.387v2.161a25.99 25.99 0 01-.22 3.56c-.058.45-.16.86-.308 1.228-.147.36-.278.61-.392.748l-.172.21a3.357 3.357 0 01-.356.33 2.64 2.64 0 01-.38.234 22.56 22.56 0 01-.345.147c-.098.041-.216.074-.356.098-.13.025-.229.046-.294.062l-.283.037-.196.012c-2.054.155-4.62.233-7.698.233-1.694-.016-3.167-.04-4.42-.073a107.082 107.082 0 01-2.455-.099l-.601-.049-.442-.049a6.174 6.174 0 01-.675-.123 4.084 4.084 0 01-.626-.257 2.486 2.486 0 01-.688-.504 3.5 3.5 0 01-.196-.22c-.074-.107-.193-.349-.356-.725a4.833 4.833 0 01-.32-1.24 30.546 30.546 0 01-.16-1.67 49.13 49.13 0 01-.06-1.4v-2.16a25.991 25.991 0 01.22-3.56c.058-.45.16-.856.307-1.216.148-.368.279-.622.393-.76l.172-.21c.115-.122.233-.229.356-.319.123-.098.25-.18.38-.245.132-.066.246-.119.344-.16.099-.04.213-.073.344-.098.14-.025.238-.041.295-.05a1.48 1.48 0 01.282-.036c.131-.016.2-.025.209-.025C6.209.482 8.775.41 11.852.41z"
                ></path>
              </svg>
            </a>
            <a className="ml-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 21 18"
              >
                <path
                  fill="#035755"
                  d="M20.113 4.502c-.082 1.932-1.44 4.596-4.076 7.992-2.725 3.528-5.025 5.292-6.9 5.292-1.162 0-2.144-1.077-2.946-3.23-.36-1.309-.9-3.281-1.62-5.916-.59-2.145-1.232-3.217-1.928-3.217-.147 0-.667.311-1.559.933L.14 5.153c.196-.172.638-.565 1.326-1.179.687-.622 1.22-1.096 1.596-1.424C4.337 1.42 5.324.823 6.019.758c.778-.074 1.404.155 1.879.687.474.524.806 1.355.994 2.492.36 2.35.63 3.876.81 4.58.45 2.038.942 3.057 1.474 3.057.417 0 1.047-.66 1.89-1.977.827-1.318 1.273-2.324 1.338-3.02.107-1.138-.34-1.706-1.338-1.706-.466 0-.961.106-1.485.319.982-3.217 2.86-4.78 5.635-4.69 2.054.065 3.02 1.4 2.897 4.002z"
                ></path>
              </svg>
            </a>
            <a className="ml-3">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </span>
        </div>
        <div className="text-center text-gray-500 -mt-4 mb-4">
          {new Date().getFullYear()} @ All rights reserved by Kryptocodes
        </div>
      </footer>
    </>
  );

  return (
    <>
      <section className="relative overflow-hidden">
        <Contact />
        <FooterContent />
      </section>
    </>
  );
};

export default Footer;
