import React from "react";
import Image from "next/image"

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
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

  const NavBarComponent = () => (
    <>
      <header className="text-gray-600 mx-40">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row  ">
          <a className="flex items-center text-gray-900 mb-4 md:mb-0">
            <Image src={require('../../assets/logo.png')} width={50} height={50} />
            <span className="ml-3 text-xl text-uppercase" >Covid-19</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center justify-center">
            {Data.map((v,i) => 
            <a key={i} className="mr-5 hover:text-corona">{v?.name}</a>
            )}
          </nav>
            <button className="bg-transparent rounded-full border-2 border-corona px-8 text-corona hover:bg-corona hover:text-white  ">
              Contact
            </button>
        </div>
      </header>
    </>
  );

  return <>
    <NavBarComponent />
  </>;
};

export default NavBar;
