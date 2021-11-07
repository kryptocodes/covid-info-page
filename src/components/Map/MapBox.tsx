/* eslint-disable react/jsx-key */
import React from "react";
import { MapContainer, TileLayer  } from "react-leaflet";
import { ShowDataOnMap } from "../util/ShowDataOnMap";



interface MapBoxProps {
    zoom: number;
    center: any;
    caseType: any;
    countries: any;
}

const MapBox: React.FC<MapBoxProps> = ({center,zoom, caseType, countries}) => {

 


  return (
    <>
    <div className="map">
      <MapContainer
        zoom={zoom}
        scrollWheelZoom={false}
        dragging
        center={center}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {ShowDataOnMap(countries, caseType)}
      </MapContainer>
      </div>
    </>
  );
};

export default MapBox;
