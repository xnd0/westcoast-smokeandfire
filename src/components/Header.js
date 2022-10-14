import React from 'react';
import firelogo from './images/smoke-and-fire-icon.png'


export default function Header() {

    return (
        <div className='App-header flex-apart'>
            
                <div className='App-header'>
                <img src={firelogo} alt="fire and smoke logo image" height={30} width={30} />
                <p>westcoast smoke and fire map</p>
                </div>
                <p>Header</p>
            

        </div>
    );
};