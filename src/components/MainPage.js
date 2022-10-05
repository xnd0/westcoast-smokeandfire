// import React from 'react';

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import './App.css';
// import { Icon } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";

// var map = L.map('map').setView([34.052, -118.244], 13);
// var marker = L.marker([51.5, -0.09]).addTo(map);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     // id: 'mapbox/satellite-v9',
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'pk.eyJ1IjoieG5kY21kIiwiYSI6ImNsMGxvdnF4aTB5OWMzYmw0bzRxZWEwaDQifQ.0OevUWqcsyWAe5gbtCUPvQ'
// }).addTo(map);



export default function MainPage() {

    let latitude = 34;
    let longitude = -188.5;

    const locdata = [
        {
            name: "WestCoast",
            coordinates: {
                latitude: "39",
                longitude: "-125",
                zoomint: "5",
            }
        },
        {
            name: "Seattle",
            coordinates: {
                latitude: "47",
                longitude: "-122",
                zoomint: "10",
            }
        },

        {
            name: "Los Angeles",
            coordinates: {
                latitude: "34",
                longitude: "-188.5",
                zoomint: "10",
            }
        },

    ];


    // const handleLA = () => {
    //     xcoord = 34;
    //     ycoord = -118.5;
    //     console.log(xcoord, ycoord, 'are coords')
    // }

    return (
        <div className='App-main'>
            <div className='main-leftside'>
                <p>(left)</p>
            </div>

            <div className='main-center'>
                {/* <p>westcoast smoke and fire map</p> */}
                <div id='map'>

                    <MapContainer 
                    center={[latitude, longitude]} 
                    zoom={[zoomint]} 
                    scrollWheelZoom={true}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                    </MapContainer>
                </div>
            </div>

            <div className='main-rightside'>
                <p>(right)</p>
                <button id='westcoast'>West Coast, USA</button>
                <button id='sea'>Seattle, WA</button>
                <button id='pdx'>Portland, OR</button>
                <button id='eug'>Eugene, OR</button>
                <button id='sf'>San Francisco, CA</button>
                <button id='la' onClick={handleLA}>Los Angeles, CA</button>
            </div>
        </div>
    );
};