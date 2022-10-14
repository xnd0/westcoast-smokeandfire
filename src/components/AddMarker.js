import React, { useState, useEffect } from 'react';

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// import fireicon from "./images/fire-icon.png";

const newicon = new L.icon({
    iconUrl: require("./images/fire-icon.png"),
    iconSize: [30, 30]
});


export default function AddMarker(props) {

    // -- Arbitrary Fire Position -- //
    const position1 = [40, -120]
    const position2 = [44, -122]
    const position3 = [46, -115]
    const position4 = [35, -128]
    const position5 = [32, -130]

    return (
        <useMap>
        <Marker position={position1} icon={newicon}>
            <Popup>
                "AddMarker" Component <br /> Arbitrary popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        <Marker position={position2} icon={newicon}>
            <Popup>
                "AddMarker" Component <br /> Arbitrary popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        <Marker position={position3} icon={newicon}>
            <Popup>
                "AddMarker" Component <br /> Arbitrary popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        <Marker position={position4} icon={newicon}>
            <Popup>
                "AddMarker" Component <br /> Arbitrary popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        <Marker position={position5} icon={newicon}>
            <Popup>
                "AddMarker" Component <br /> Arbitrary popup. <br /> Easily customizable.
            </Popup>
        </Marker> 
        </useMap>
    )

    // -- API lat/long source -- //

    // let { mylat, mylong, mytitle, position } = props;

    // console.log('-- AddMarker Button Triggered --')

    // let url = 'https://eonet.gsfc.nasa.gov/api/v3/events?category=wildfires';

    // // -- NASA event id number: -- //
    // // -- will map to iterate for display all -- //
    // // -- adjust for different wildfires (events) -- //
    // let i = 0;

    // // -- Fetch -- // 
    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => (
    //         console.log("0-wildfire title: ", data.events[i].title),
    //         console.log("1", data.events[i]),
    //         console.log("2", data.events[i].geometry),
    //         console.log("3", data.events[i].geometry[i].coordinates),
    //         console.log("4-latitude", data.events[i].geometry[i].coordinates[i]),
    //         console.log("5-longitude", data.events[i].geometry[i].coordinates[(i + 1)]),

    //         mylat = data.events[i].geometry[i].coordinates[i],
    //         mylong = data.events[i].geometry[i].coordinates[(i + 1)],
    //         mytitle = data.events[i].title,
    //         position = [mylat, mylong],

    //         console.log('OneFire Latitude (mylat): ', mylat),
    //         console.log('OneFire Longitude: (mylong): ', mylong),
    //         console.log('For the Above ^ wildfire name (mytitle) is: ', mytitle),
    //         console.log('position is: ', position)
    //     )
    //     )
    //     .catch(error => console.log(error));



    // return(
    //     <Marker position={position} icon={newicon}>
    //   <Popup>
    //    "AddMarker" Component <br /> A pretty CSS3 popup. <br /> Easily customizable.
    //   </Popup>
    // </Marker>
    // )

}