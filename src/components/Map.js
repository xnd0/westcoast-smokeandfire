import React from "react";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// import icon from "./smoke-and-fire-icon.png";



function SetViewOnClick({ coords, zoom }) {
  const map = useMap();
  map.setView(coords, zoom);
  
  return null;
}

export default function Map(props) {
  const { index, data } = props;

  return (
    <MapContainer
      center={[
        data[index].coordinates.latitude,
        data[index].coordinates.longitude
      ]}
      zoom={data[index].zoomint}
    //   style={{ height: "90vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></TileLayer>
      
      <Marker
        position={[
          data[index].coordinates.latitude,
          data[index].coordinates.longitude
        ]}
        // icon={icon}
      >
        <Popup>TEST-FIRE</Popup>
      </Marker>

      <SetViewOnClick
        coords={[
          data[index].coordinates.latitude,
          data[index].coordinates.longitude
        ]}
        zoom={data[index].zoomint}
      />
    </MapContainer>
  );
}
