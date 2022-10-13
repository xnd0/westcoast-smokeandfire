// import React from "react";

import React, { useState, useEffect } from 'react';

export default function APItest() {
    console.log("APItest begin RUN")


    try {
        const response = fetch(
            //   `https://www.googleapis.com/books/v1/volumes?q=test`
            //   `https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/Current_WildlandFire_Perimeters/FeatureServer/0/query?where=1%3D1&outFields=*&geometry=-164.264%2C27.391%2C-88.854%2C50.861&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json`
            // `https://inciweb.nwcg.gov/feeds/rss/incidents/state/5/`
            `https://eonet.gsfc.nasa.gov/api/v3/events?category=wildfires`
        );

        console.log(response)

    } catch (err) {
        console.error(err);
    }



}

