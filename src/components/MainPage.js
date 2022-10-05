// import React from 'react';

import React, { useState } from "react";
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

    let xcoord = 34;
    let ycoord = -118.5;

    return (
        <div className='App-main'>
            <div className='main-leftside'>
                <p>(left)</p>
            </div>

            <div className='main-center'>
                {/* <p>westcoast smoke and fire map</p> */}
                <div id='map'>
                    {/* <MapContainer center={[39, -125]} zoom={5} scrollWheelZoom={false}> */}
                    {/* <MapContainer center={[34, -118.5]} zoom={10} scrollWheelZoom={true}> */}
                    <MapContainer center={[xcoord, ycoord]} zoom={10} scrollWheelZoom={true}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                    </MapContainer>
                </div>
            </div>

            <div className='main-rightside'>
                <p>(right)</p>
                <button>West Coast, USA</button>
                <button>Seattle, WA</button>
                <button>Portland, OR</button>
                <button>Eugene, OR</button>
                <button>San Francisco, CA</button>
                <button>Los Angeles, CA</button>
            </div>
        </div>
    );
};