/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { Popup, Circle} from "react-leaflet"


export const ShowDataOnMap = (data:any, casesType = "cases") =>
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
      <div className="container text-corona-green">
        <img
          alt={country.country}
          className="oject-fit w-auto h-auto mx-auto"
          src={country.countryInfo.flag}
        />
        <div className="text-lg font-bold">{country.country}</div>
        <div className="font-bold">
          Cases: {country.cases}
        </div>
        <div className="font-bold">
          Recovered: {country.recovered}
        </div>
        <div className="font-bold">
          Deaths: {country.deaths}
        </div>
      </div>
    </Popup>
  </Circle>
));