import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { useMemo } from "react";
import React, { useState } from 'react';
import SearchBar from '../../Components/SearchBar/index'
import { ButtonGroup, ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';
import classNames from 'classnames';

import './style.scss';
import ScrollBox from '../../Components/ScrollBox';
interface PropsLookingToBox {
    option: number //if 0 then rent, if 1 then offer
}

interface Place {
    placeDistance: number;
    placePriceRate: number;
    placeName: string;
}

const Mapback = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyC5Uuuwshx9rQwt9Mn7mFbmjTfg7iehvcY',
    });

    if (!isLoaded) return <div>loading...</div>;

    const mapOptions = {
        zoom: 15,
        center: { lat: -33.916758, lng: 151.225967 },
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



const LookingToBox = (props: PropsLookingToBox) => {


    const [items, setItems] = useState<Place[]>([
        { placeDistance: 8, placePriceRate: 3, placeName: 'place 1' },
        { placeDistance: 6, placePriceRate: 2, placeName: 'place 2' },
        { placeDistance: 12, placePriceRate: 1, placeName: 'place 3' },
        { placeDistance: 12, placePriceRate: 1, placeName: 'place 4' }
    ]);

    const [selected, setSelected] = useState(items[0]);

    if (props.option == 0) {


        return (
            <>
                <div className={classNames("rentSpot")}>
                    <ScrollBox items={items} onSelect={(selected: Place, index: number) => {
                        setSelected(selected);
                    }}></ScrollBox>
                </div>

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





            <div className='map-container'>
                <Mapback />
            </div>
        </div>
    )
}