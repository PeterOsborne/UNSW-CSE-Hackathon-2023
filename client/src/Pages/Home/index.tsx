import React from 'react';
import SearchBar from '../../Components/SearchBar/index'
import { ButtonGroup } from 'react-bootstrap';

import './style.scss';

const Mapback = () => {
    return (
        <div className="background">
            {
                <p> This is the map!</p>
            }
        </div>
    );
};



export default function Home() {

    return (
        <div className='home-container'>
            <p>This will be signin button</p>
            <div className='map-container'>
                <Mapback/>
            </div>
        </div>
    )
}