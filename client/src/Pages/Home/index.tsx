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
interface PropsLookingToBox {
    option: number //if 0 then rent, if 1 then offer
}


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



const LookingToBox = (props: PropsLookingToBox) => {

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

    const [value, setValue] = React.useState('distance');
    function handleChange(e: any) {
        setValue(e.target.value);
        if (value === "distance") {
            items.sort((place1: Place, place2: Place) => place1.placeDistance - place2.placeDistance);
        } else if (value === "price") {
            items.sort((place1: Place, place2: Place) => place1.placePriceRate - place2.placePriceRate);
        } else if (value === "alphabetically") {
            items.sort((place1: Place, place2: Place) => {
                if (place1.placeName < place2.placeName) {
                    return -1;
                }
                if (place1.placeName > place2.placeName) {
                    return 1;
                }
                return 0;
            });
        }
    }

    if (props.option == 0) {
        return (
            <>
                <div className="flex flex-col bg-white rounded-lg pl-7 pr-7 pt-2 pb-2">
                    <div className="flex justify-end">
                        <div className="flex font-medium text-lg pr-7">
                            Sort by: 
                        </div>

                        <div className="flex justify-end p-1">
                            <form method="post">
                                <label>
                                    <select value={value} name="selectedSort" onChange={handleChange} className="font-medium">
                                        <option value="distance">Distance</option>
                                        <option value="price">Price</option>
                                        <option value="alphabetically">Alphabetically</option>
                                    </select>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>



                <div className="">
                    <div className={classNames("rentSpot")}>
                        <ScrollBox items={items} onSelect={(selected: Place, index: number) => {
                            setSelected(selected);

                        }}></ScrollBox>
                    </div>
                </div>
            </>
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
                <LookingToBox option={menuOption} />

            </div>
        </div>
    )
}