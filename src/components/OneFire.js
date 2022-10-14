import React from "react";


import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";


export default function OneFire(props) {
    let { mylat, mylong, mytitle } = props;

    console.log('-- OneFire Button Triggered --')

    let url = 'https://eonet.gsfc.nasa.gov/api/v3/events?category=wildfires';

    // -- NASA event id number: -- //
    // -- will map to iterate for display all -- //
    // -- adjust for different wildfires (events) -- //
    let i = 0;

    const position = [40, -120]

    // -- Fetch -- // 
    fetch(url)
        .then(response => response.json())
        .then(data => (
            console.log("0-wildfire title: ", data.events[i].title),
            console.log("1", data.events[i]),
            console.log("2", data.events[i].geometry),
            console.log("3", data.events[i].geometry[i].coordinates),
            console.log("4-latitude", data.events[i].geometry[i].coordinates[i]),
            console.log("5-longitude", data.events[i].geometry[i].coordinates[(i + 1)]),

            mylat = data.events[i].geometry[i].coordinates[i],
            mylong = data.events[i].geometry[i].coordinates[(i + 1)],
            mytitle = data.events[i].title,

            console.log('OneFire Latitude (mylat): ', mylat),
            console.log('OneFire Longitude: (mylong): ', mylong),
            console.log('For the Above ^ wildfire name (mytitle) is: ', mytitle)
        )
        )
        .catch(error => console.log(error));

        
};