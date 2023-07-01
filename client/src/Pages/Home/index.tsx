import { GoogleMap, useLoadScript, Marker, StreetViewService } from "@react-google-maps/api"
import { useMemo } from "react";
import React, { useState } from 'react';
import SearchBar from '../../Components/SearchBar/index'
import { ButtonGroup, ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';
import classNames from 'classnames';
import { MarkerF, InfoWindow } from '@react-google-maps/api'

import './style.scss';
import ScrollBox from '../../Components/ScrollBox';
import ListSpotWindow from "../../Components/ListSpotWindow";
import { NavBar } from "../../Components/NavBar";
//import { Console } from "console";
import { LookingToBox } from "../../Components/LookingToBox";
interface PropsLookingToBox {
    option: number //if 0 then rent, if 1 then offer
}


interface marktype {
    lat: number,
    lng: number,
    type: number
}
interface Place {
    placeDistance: number;
    placePriceRate: number;
    placeName: string;
    placeAvailability: string;
    marker: marktype;
}


var mapOptions = {
    zoom: 15,
    center: { lat: -33.916758, lng: 151.225967 },
    mapContainerClassName: 'actual_maps',
    mapTypeControlOptions: {
        mapTypeIds: ['satellite', 'roadmap'], // Enable satellite and roadmap options
    },
    // Set the default map type to satellite

};






interface MapProps {
    markers: marktype[],
    clicked: (place: marktype) => void,
}
const Mapback = (props: MapProps) => {
    const [mapRef, setMapRef] = useState<GoogleMap | null>(null);


    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyC5Uuuwshx9rQwt9Mn7mFbmjTfg7iehvcY',
    });

    if (!isLoaded) return <div>loading...</div>;



    const handleMarkerClick = (id: number, lat: number, lng: number) => {
        mapRef?.panTo({ lat, lng });

        // setInfoWindowData({ id, address });
        // setIsOpen(true);
    };

    const onMapLoad = (map: any) => {
        setMapRef(map);
        const bounds = new google.maps.LatLngBounds();

        props.markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
        map.setMapTypeId('roadmap');


        // map.fitBounds(bounds);
    };

    const onMapClick = (e: any) => {
        props.clicked({ lat: e.latLng?.lat(), lng: e.latLng?.lng(), type: 1 })
        console.log("asdasd");
    };



    return (
        <>
            <div className="background">
                <GoogleMap {...mapOptions}
                    onClick={onMapClick}
                    options={{
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false
                    }}
                    onLoad={onMapLoad}

                >
                    {props.markers.map(({ lat, lng }, index) => (
                        <MarkerF position={{ lat, lng }}
                            onClick={() => {
                                handleMarkerClick(index, lat, lng);

                            }} />
                    ))}
                </GoogleMap>


            </div>
        </>
    );
};





export default function Home() {
    const [menuOption, setMenuOption] = useState(0);

    //have made new spot


    const [markers, setMarkers] = useState<marktype[]>([
        { lat: -33.90255457456635, lng: 151.27199810053114, type: 0 },
        { lat: -33.910691646771085, lng: 151.23017859948988, type: 0 },
        { lat: -33.916758, lng: 151.225967, type: 0 }
    ]);



    return (
        <div className='home-container'>
            <div className='map-container'>
                <Mapback markers={markers} clicked={function (place: marktype): void {
                    setMarkers(markers => [...markers, place])
                }} />
            </div>
            <NavBar />

            <div className='menu'>

                <p className="text-3xl font-medium p-2">
                    Looking to:
                </p>
                <div className="p-2">
                    <ToggleButtonGroup type="radio" name="options" defaultValue={0} onChange={(e) => setMenuOption(e)}>
                        <ToggleButton id="rent-spot" variant="dark" value={0}>
                            Rent a Spot
                        </ToggleButton>
                        <ToggleButton id="offer-spots" variant="dark" value={1}>
                            Offer a spot
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <LookingToBox option={menuOption} haveMadeNewSpot={markers} />

            </div>
        </div>
    )
}