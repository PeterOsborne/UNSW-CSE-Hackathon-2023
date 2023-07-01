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
import LookingToBox from "../../Components/LookingToBox/index"




interface marktype {
    lat: number,
    lng: number
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

    return (
        <>
            <div className="background">
                <GoogleMap {...mapOptions}
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




const [items, setItems] = useState<Place[]>([
    // { placeDistance: 8, placePriceRate: 3, placeName: '10 Norton St, Kingsford NSW 2032', placeAvailability: '09:00 - 16:00' },
    // { placeDistance: 6, placePriceRate: 2, placeName: '20 Milford St, Kingsford NSW 2032', placeAvailability: '09:00 - 16:00' },
    // { placeDistance: 12, placePriceRate: 1, placeName: '23 Rolfe St, Rosebury NSW 2018', placeAvailability: '09:00 - 16:00' },
    // { placeDistance: 12, placePriceRate: 1, placeName: '23 Rolfe St, Rosebury NSW 2018', placeAvailability: '09:00 - 16:00' },
    // { placeDistance: 12, placePriceRate: 1, placeName: '23 Rolfe St, Rosebury NSW 2018', placeAvailability: '09:00 - 16:00' },
    // { placeDistance: 12, placePriceRate: 1, placeName: '23 Rolfe St, Rosebury NSW 2018', placeAvailability: '09:00 - 16:00' },
    // { placeDistance: 12, placePriceRate: 1, placeName: '23 Rolfe St, Rosebury NSW 2018', placeAvailability: '09:00 - 16:00' },
    // { placeDistance: 12, placePriceRate: 1, placeName: '23 Rolfe St, Rosebury NSW 2018', placeAvailability: '09:00 - 16:00' },
    // { placeDistance: 12, placePriceRate: 1, placeName: '23 Rolfe St, Rosebury NSW 2018', placeAvailability: '09:00 - 16:00' },
    // { placeDistance: 12, placePriceRate: 1, placeName: '23 Rolfe St, Rosebury NSW 2018', placeAvailability: '09:00 - 16:00' },
    // { placeDistance: 12, placePriceRate: 1, placeName: '15 Duke St, Kengiston NSW 2033', placeAvailability: '09:00 - 16:00' }
]);

const [selected, setSelected] = useState(items[0]);

if (props.option == 0) {
    return (
        <div className="">
            <div className={classNames("rentSpot")}>
                <ScrollBox items={items} onSelect={(selected: Place, index: number) => {
                    setSelected(selected);

                }}></ScrollBox>
            </div>

        </div>
    );
}
return (
    <>
        <ListSpotWindow></ListSpotWindow>
    </>
);
};

export default function Home() {
    const [menuOption, setMenuOption] = useState(0);
    const [markers, setMarkers] = useState<marktype[]>([
        { lat: -33.90255457456635, lng: 151.27199810053114 },
        { lat: -33.910691646771085, lng: 151.23017859948988 },
        { lat: -33.916758, lng: 151.225967 }
    ]);



    return (
        <div className='home-container'>
            <div className='map-container'>
                <Mapback markers={markers} clicked={function (place: marktype): void {
                    // setMarkers(markers => [...markers, place])
                }} />
            </div>

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
                <LookingToBox option={menuOption} />

            </div>






        </div>
    )
}