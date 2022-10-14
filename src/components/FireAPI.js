import React from "react";
import { data } from "./Data";
// import React, { useState } from "react";

// Link for just state of CA
// https://inciweb.nwcg.gov/feeds/rss/incidents/state/5/ 

export default function FireAPI() {
    console.log('connected FireAPI')

    let url = 'https://eonet.gsfc.nasa.gov/api/v3/events?category=wildfires'

    // let fireeventarray = []
    fetch(url)
        .then(response => response.json())

        // .then(data => console.log(data))
        .then(data => (
            // fireeventarray.map(data.events),
            console.log(data.events[0].title),
            console.log(data.events),
            // console.log(fireeventarray),
            console.log(data.events[0].title)
        )
        )

        .catch(error => console.log(error))
};