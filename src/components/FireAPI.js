import React  from "react";
// import React, { useState } from "react";

// Link for just state of CA
// https://inciweb.nwcg.gov/feeds/rss/incidents/state/5/ 

export default function FireAPI () {
    console.log('connected FireAPI')


    
    fetch(
        "https://jsonplaceholder.typicode.com/users")
                    .then((res) => res.json())
                    .then((json) => {
                        this.setState({
                            items: json,
                            // DataisLoaded: true
                        });
                    })

}