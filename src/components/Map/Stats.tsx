import React from 'react'

interface StatsProps {
  data: any
}


  

const Stats: React.FC<StatsProps> = ({data}) => {
   

     const Component = () => (
         <>
            <div className='bg-white p-4 w-full shadow'>
                <h1 className='text-2xl text-corona-green font-bold '>Live Reports</h1>
                {data.slice(0,7).map((country:any, i:number) => (
                    <>
                
                <div className='flex mt-4'>
                    <div className='flex-1 flex text-corona-green mb-2'>
                        <img src={country?.countryInfo?.flag} className='w-6 object-cover mt-1 h-4' alt={country?.country} /> 
                        <span className='font-bold ml-2'>  {country.country} </span>
                    </div>
                    <div className='flex text-corona-green font-medium justify-end'>
                        {country?.cases} <svg
      xmlns="http://www.w3.org/2000/svg"
      className='h-4 w-4 ml-2 mt-1'
      fill="none"
      viewBox="0 0 21 14"
    >
      <path
        fill="#F44A45"
        d="M9.348 1.383a1.5 1.5 0 012.304 0l8.298 9.957c.814.977.12 2.46-1.153 2.46H2.203C.93 13.8.236 12.317 1.05 11.34l8.298-9.957z"
      ></path>
    </svg>
                        </div>  
                </div>
                </> ))}
            </div>
         </>
     )
        return (
            <>
                <Component />
            </>
        );
}

export default Stats