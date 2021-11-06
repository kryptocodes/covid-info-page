import React, { useState } from "react";
import Image from "next/image";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [menu, setMenu] = useState(false);
  const Data = [
    {
      name: "Overview",
      link: "/",
    },
    {
      name: "Contagion",
      link: "/contagion",
    },
    {
      name: "Symptoms",
      link: "/symptoms",
    },
    {
      name: "Prevention",
      link: "/prevention",
    },
  ];

  const NavBarComponent = () => (
    <>
      <header className="text-gray-600 lg:mx-40">
        <div className="container mx-auto p-5 flex   ">
          <a className="md:flex items-center text-corona-green sm:block uppercase mb-4 md:mb-0">
            <Image
              src={require("../../assets/logo.png")}
              alt="logo"
              className="h-100 w-100 object-cover flex mx-auto "
            />
            <span className="ml-3 text-xl text-uppercase">Covid-19</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap p-4 items-center justify-center hidden md:block">
            {Data.map((v, i) => (
              <a key={i} className="mr-5 hover:text-corona">
                {v?.name}
              </a>
            ))}

            <button className="bg-transparent rounded-full border-2 border-corona px-4 p-2 text-corona hover:bg-corona hover:text-white  ">
              Contact
            </button>
          </nav>

          <div className="block md:hidden lg:hidden  ml-auto">
            <button
              onClick={() => setMenu(!menu)}
              className="flex items-center mx-auto px-3 py-2 text-corona"
            >
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

          {menu ? <div className="md:hidden w-full mt-20 absolute text-left overflow-hidden " id="mobile-menu">
          <div style={{backgroundColor:'#FFF9F9'}} className="pb-3 p-4 space-y-1">
            {Data.map((v,i) => 
            <span key={i}>
           
            <a
              className="block py-5 rounded-md text-lg font-medium"
            >
             {v?.name}
            </a>

            </span>
          )}
          </div>
        </div> : "" }
        </div>
      </header>
    </>
  );

  return (
    <>
      <NavBarComponent />
    </>
  );
};

export default NavBar;
