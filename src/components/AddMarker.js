import React, { useState, useEffect } from 'react';

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// import fireicon from "./images/fire-icon.png";

const newicon = new L.icon({
    iconUrl: require("./images/fire-icon.png"),
    iconSize: [30, 30]
  });


export default function AddMarker() {

    const position = [40, -120]

    return(
        <Marker position={position} icon={newicon}>
      <Popup>
       "AddMarker" Component <br /> A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    )


}