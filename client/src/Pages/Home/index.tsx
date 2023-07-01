import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { useMemo } from "react";
import { useState } from 'react';
import SearchBar from '../../Components/SearchBar/index'
import { ButtonGroup, ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';


import './style.scss';
import ScrollBox from '../../Components/ScrollBox';

const Mapback = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyC5Uuuwshx9rQwt9Mn7mFbmjTfg7iehvcY',
    });

    if (!isLoaded) return <div>loading...</div>;

    const mapOptions = {
        zoom: 10,
        center: { lat: 44, lng: -80 },
        mapContainerClassName: 'actual_maps',
        mapTypeControlOptions: {
            mapTypeIds: ['satellite', 'roadmap'], // Enable satellite and roadmap options
        },
        mapTypeId: 'satellite', // Set the default map type to satellite
    };

    return (
        <>
            <div className="background">
                <GoogleMap {...mapOptions} />
            </div>
        </>
    );
};

interface PropsLookingToBox {
    option: number //if 0 then rent, if 1 then offer
}

const LookingToBox = (props: PropsLookingToBox) => {
    if (props.option == 0) {
        return (
            <>
                <p>
                    this is for rent a spot
                </p>
                <ScrollBox />
            </>
        );
    }
    return (
        <p>
            This is for offering a spot
        </p>
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




            <p>This will be signin button</p>
            <div className='map-container'>
                <p> This is the map!</p>
                <Mapback />
            </div>
        </div>
    )
}