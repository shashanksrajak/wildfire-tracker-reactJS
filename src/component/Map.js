import GoogleMapReact from "google-map-react";

import LocationMarker from "./LocationMarker";

import LocationInfoBox from "./LocationInfoBox";

import { useState } from "react";

const Map = (props) => {
  const [locationInfo, setLocationInfo] = useState();
  const center = {
    lat: 36.1971,
    lng: -121.49723,
  };
  const zoom = 6;

  const markers = props.eventData.map((event) => {
    if (event.categories[0].id === 8) {
      return (
        <LocationMarker
          key={event.id}
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: event.id, title: event.title })}
        />
      );
    }
    return null;
  });

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.MAPKEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

export default Map;
