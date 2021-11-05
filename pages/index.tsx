import { NextPage } from 'next';
import React from 'react'
import Base from '../src/components/shared/Base';
import Hero from '../src/components/shared/landing/hero';


const index: React.FC<NextPage> = ({}) => {
    return (
      <>
        <Base>
          <Hero />
        </Base>
      </>
    );
}

export default index