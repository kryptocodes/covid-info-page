import React from 'react'
import NavBar from './NavBar';

interface BaseProps {
  children: React.ReactNode
}

const Base: React.FC<BaseProps> = ({children}) => {
        return (
            <React.Fragment>
                <NavBar/>
                {children}
            </React.Fragment>

        );
}

export default Base