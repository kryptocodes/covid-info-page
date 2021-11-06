import React from "react";
import Stats from "../Map/Stats";

import dynamic from "next/dynamic";




const sortData = (data:any) => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

const LiveData: React.FC<any> = () => {
    const [mapCenter, setMapCenter] = React.useState({ lat: 20.80746, lng: 40.4796 });
    const [mapZoom, setMapZoom] = React.useState(3);
    const [mapCountries, setMapCountries] = React.useState([]);
    const [data, setData] = React.useState<any[]>([]);    
    React.useEffect(() => {
       fetch('https://disease.sh/v3/covid-19/countries')
       .then(response => response.json())
       .then(data => 
           {
           let sortedData = sortData(data);
           setData(sortedData);
           setMapCountries(sortedData.slice(0, 10) as any);
          })
        
    }, [])

    const MapWithNoSSR = dynamic(() => import("../Map/MapBox"), {
        ssr: false
    });
  const Component = () => (
 
      <div className="w-full justify-end flex ml-auto mr-8">
        <Stats data={data} />
      </div>
   
  );

 

  return (
    <>
<div className="w-full mb-10">
  <div className="w-full  ">

  
  <div className="sm:absolute right-0 sm:mr-8 w-full sm:w-2/6 sm:-mt-4 " style={{zIndex:9999}} >
    
  <Component />
    </div>
    <MapWithNoSSR
          center={mapCenter}
          zoom={mapZoom}
          countries={mapCountries}
          caseType={'cases'}
        />
  
  
   
  </div>
</div>
   
    </>
  );
};

export default LiveData;
