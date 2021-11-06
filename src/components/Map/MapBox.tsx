/* eslint-disable react/jsx-key */
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import numeral from "numeral";

interface MapBoxProps {
    zoom: number;
    center: any;
    caseType: any;
    countries: any;
}

const MapBox: React.FC<MapBoxProps> = ({center,zoom, caseType, countries}) => {

  const showDataOnMap = (data:any, casesType = "cases") =>
  data.map((country:any) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={'#CC1034'}
      fillColor={'#CC1034'}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * 200
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));


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
        {showDataOnMap(countries, caseType)}
      </MapContainer>
      </div>
    </>
  );
};

export default MapBox;
