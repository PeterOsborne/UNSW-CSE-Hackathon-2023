import { GoogleMap, useLoadScript, Marker, StreetViewService } from "@react-google-maps/api"
import { useMemo } from "react";
import React, { useState } from 'react';
import SearchBar from '../../Components/SearchBar/index'
import { ButtonGroup, ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';

import './style.scss';
import ScrollBox from '../../Components/ScrollBox';
import ListSpotWindow from "../../Components/ListSpotWindow";
import LookingToBox from "../../Components/LookingToBox/index"





var mapOptions = {
    zoom: 15,
    center: { lat: -33.916758, lng: 151.225967 },
    mapContainerClassName: 'actual_maps',
    mapTypeControlOptions: {
        mapTypeIds: ['satellite', 'roadmap'], // Enable satellite and roadmap options
    },
    mapTypeId: 'satellite', // Set the default map type to satellite

};

const Mapback = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyC5Uuuwshx9rQwt9Mn7mFbmjTfg7iehvcY',
    });

    if (!isLoaded) return <div>loading...</div>;



    return (
        <>
            <div className="background">
                <GoogleMap {...mapOptions}
                    options={{
                        zoomControl: true,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false
                    }}
                >
                    <Marker position={mapOptions.center} />
                </GoogleMap>


            </div>
        </>
    );
};





export default function Home() {
    const [menuOption, setMenuOption] = useState(0);


    return (
        <div className='home-container'>
            <div className='menu'>
                <p>
                    Looking to:
                </p>
                <ToggleButtonGroup type="radio" name="options" defaultValue={0} onChange={(e) => setMenuOption(e)}>
                    <ToggleButton id="rent-spot" variant="dark" value={0}>
                        Rent a Spot
                    </ToggleButton>
                    <ToggleButton id="offer-spots" variant="dark" value={1}>
                        Offer a spot
                    </ToggleButton>
                </ToggleButtonGroup>

                <LookingToBox option={menuOption} />
            </div>





            <div className='map-container'>
                <Mapback />
            </div>
        </div>
    )
}