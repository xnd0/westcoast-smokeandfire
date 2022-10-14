// import React from 'react';

import React, { useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import Map from "./Map";
import { data } from "./Data";

import FireAPI from "./FireAPI";
import APItest from "./APItest";
import OneFire from "./OneFire";


export default function MainPage() {

    const [index, setIndex] = useState(0);

    return (
        <div className='App-main'>
            <div className='main-leftside'>
                <p>(leftside)</p>
                <p>search:</p>
                <button onClick={FireAPI}> Active Wildfires </button>
                <button onClick={APItest}> APItest </button>
                <button onClick={OneFire}> console.log OneFire API data </button>
            </div>

            <div className='main-center'>
                <Map data={data} index={index} />
            </div>

            <div className='main-rightside'>
                <p>(rightside)</p>
                <p>goto:</p>
                {data.map(({ name }, idx) => (
                    <button onClick={() => setIndex(idx)}>{`${name}`}</button>
                ))}
            </div>
        </div>
    );
};