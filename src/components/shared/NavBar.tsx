import React, { useState } from "react";
import Image from "next/image";

import Head from "next/head";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [menu, setMenu] = useState(false);
  let Location: any = undefined;
  if (typeof window !== "undefined") {
    Location = window.location.hash;
  }

  const Data = [
    {
      name: "Overview",
      link: "#overview",
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

  const NavBarComponent = () => (
    <>
      <header className="text-gray-600 xl:mx-40">
        <div className="container mx-auto p-5 flex">
          <a className="md:flex flex items-center text-corona-green sm:block uppercase mb-4 md:mb-0">
            <Image
              src={require("../../assets/logo.png")}
              alt="logo"
              className="h-100 w-100 object-cover flex mx-auto "
            />
            <span className="ml-3 text-xl text-uppercase font-bold">Covid-19</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap p-4 items-center justify-center hidden md:block">
            {Data.map((v, i) => (
              <a
                href={v?.link}
                key={i}
                className={`mr-5 text-corona-green font-medium font-gelion hover:text-corona ${
                  Location === v?.link ? "text-corona" : ""
                }`}
              >
                {v?.name}
              </a>
            ))}

            <button className="bg-transparent rounded-full border-2 border-corona px-6 p-2 text-corona hover:bg-corona hover:text-white  ">
              Contact
            </button>
          </nav>

          <div className="block md:hidden lg:hidden p-4  ml-auto">
            <button onClick={() => setMenu(!menu)} className="flex text-corona">
              {menu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {menu ? (
            <div
              className="md:hidden  w-full mt-24 px-4 absolute inset-0  text-left overflow-hidden z-50 "
              id="mobile-menu"
            >
              <div
                style={{ backgroundColor: "#FFF9F9" }}
                className="p-4 py-5 pb-16  space-y-1"
              >
                {Data.map((v, i) => (
                  <span key={i}>
                    <a
                      onClick={() => setMenu(!menu)}
                      href={v?.link}
                      className={`block py-5 text-corona-green font-semibold font-gelion hover:text-corona ${
                        Location === v?.link ? "text-corona" : ""
                      } `}
                    >
                      {v?.name}
                    </a>
                  </span>
                ))}
                <div className="-ml-2 pt-5">
                <a
                  href={"#contact"}
                  className="bg-transparent rounded-full  border-2 border-corona px-4  py-2 text-corona hover:bg-corona hover:text-white  "
                >
                  Contact
                </a>
              </div>
              </div>

            </div>
          ) : (
            ""
          )}
        </div>
      </header>
    </>
  );

  const HeadComponent = () => (
    <Head>
      <title>Covid-19 | BSA Assignment</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <meta name="description" content="Covid-19 | BSA Assignment" />
      <meta name="keywords" content="Covid-19, BSA Assignment" />
      <meta name="author" content="kryptocodes" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );

  return (
    <>
      <HeadComponent />
      <NavBarComponent />
    </>
  );
};

export default NavBar;
