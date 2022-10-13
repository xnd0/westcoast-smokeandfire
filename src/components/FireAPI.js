import React from "react";
// import React, { useState } from "react";

// Link for just state of CA
// https://inciweb.nwcg.gov/feeds/rss/incidents/state/5/ 

export default function FireAPI() {
    console.log('connected FireAPI')

    let url = 'https://eonet.gsfc.nasa.gov/api/v3/events?category=wildfires'

    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    

}