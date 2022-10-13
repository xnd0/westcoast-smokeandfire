// import React from "react";

export default function OneFire() {
    console.log('OneFire Button Trigger')

    let url = 'https://eonet.gsfc.nasa.gov/api/v3/events?category=wildfires'


    fetch(url)
        .then(response => response.json())
        .then(data => (
            console.log("1", data.events[0]),
            console.log("2", data.events[0].geometry),
            console.log("3", data.events[0].geometry[0].coordinates)
            // console.log(data.events[0].geometry.coordinates[1])

        ))
        .catch(error => console.log(error))
}