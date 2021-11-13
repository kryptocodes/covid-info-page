import React from "react";
import Stats from "../Map/Stats";

import dynamic from "next/dynamic";
import { SortData } from "../util/sortData";
import Fade from "react-reveal/Fade";


const LiveData: React.FC<any> = () => {
  const [mapCenter, setMapCenter] = React.useState({
    lat: 20.80746,
    lng: 40.4796,
  });
  const [mapZoom, setMapZoom] = React.useState(3);
  const [mapCountries, setMapCountries] = React.useState([]);
  const [data, setData] = React.useState<any[]>([]);

  //API TO FETCH THE DATA
  React.useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        let sortedData = SortData(data);
        setData(sortedData);
        setMapCountries(sortedData.slice(0, 10) as any);
      });
  }, []);

  const MapWithNoSSR = dynamic(() => import("../Map/MapBox"), {
    ssr: false,
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
          <Fade bottom>
          <div
            className="sm:absolute right-0 sm:mr-8 w-full sm:w-2/6 sm:-mt-4 z-9999"
          >
            <Component />
          </div>
          </Fade>
          <MapWithNoSSR
            center={mapCenter}
            zoom={mapZoom}
            countries={mapCountries}
            caseType={"cases"}
          />
        </div>
      </div>
    </>
  );
};

export default LiveData;
