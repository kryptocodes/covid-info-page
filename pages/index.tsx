import { NextPage } from "next";
import React from "react";
import Base from "../src/components/shared/Base";
import Contagion from "../src/components/landing/contagion";
import Hero from "../src/components/landing/hero";
import Symptoms from "../src/components/landing/Symptoms";
import WhatIs from "../src/components/landing/WhatIs";
import WhatShouldWeDo from "../src/components/landing/WhatShouldWeDo";
import LiveData from "../src/components/landing/LiveData";

const index: React.FC<NextPage> = ({}) => {
  return (
    <>
      <Base>
        <Hero />
        <WhatIs />
        <Contagion />
        <Symptoms />
        <WhatShouldWeDo />
        <LiveData />
      </Base>
    </>
  );
};

export default index;
