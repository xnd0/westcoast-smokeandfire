// import React from 'react';

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import Map from "./Map";
import { data } from "./Data";



export default function MainPage() {


    const [index, setIndex] = useState(0);

    return (
        <div className='App-main'>
            <div className='main-leftside'>
                <p>(left)</p>
            </div>

            <div className='main-center'>
                    <Map data={data} index={index} />
            </div>

            <div className='main-rightside'>
                <p>(right)</p>
                {data.map(({ name }, idx) => (
                    <button onClick={() => setIndex(idx)}>{`${name}`}</button>
                ))}
            </div>
        </div>
    );
};