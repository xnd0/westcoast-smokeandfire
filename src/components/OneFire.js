// import React from "react";

export default function OneFire(props) {
    let { mylat, mylong } = props;

    console.log('OneFire Button Trigger')

    let url = 'https://eonet.gsfc.nasa.gov/api/v3/events?category=wildfires';

    // let mylat = 0;
    // let mylong = 0;

    fetch(url)
        .then(response => response.json())
        .then(data => (
            console.log("0", data.events[0].title),
            console.log("1", data.events[0]),
            console.log("2", data.events[0].geometry),
            console.log("3", data.events[0].geometry[0].coordinates),
            console.log("4-latitude", data.events[0].geometry[0].coordinates[0]),
            console.log("5-longitude", data.events[0].geometry[0].coordinates[1]),

            mylat = data.events[0].geometry[0].coordinates[0],
            mylong = data.events[0].geometry[0].coordinates[1],
            
            console.log('OneFire Latitude (mylat): ', mylat),
            console.log('OneFire Longitude: (mylong)', mylong)               
        )
        )
        .catch(error => console.log(error))

}