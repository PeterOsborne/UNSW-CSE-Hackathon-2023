import { GoogleMap, useLoadScript, Marker, StreetViewService, DirectionsRenderer } from "@react-google-maps/api"
import { useEffect, useMemo, useRef } from "react";
import React, { useState } from 'react';
import SearchBar from '../../Components/SearchBar/index'
import { ButtonGroup, ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';
import classNames from 'classnames';
import { MarkerF, InfoWindow } from '@react-google-maps/api'

import './style.scss';
import ScrollBox from '../../Components/ScrollBox';
import ListSpotWindow from "../../Components/ListSpotWindow";
import { NavBar } from "../../Components/NavBar";
import { DistanceEtaLabel } from "../../Components/DistanceEtaLabel";
//import { Console } from "console";
import { LookingToBox } from "../../Components/LookingToBox";
import { getPlaceList } from "../../Backend/places";
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
    mapRef: (GoogleMap | null),
    setMapRef: (map: any | null) => void;
    dirRes: google.maps.DirectionsResult
}


const Mapback = (props: MapProps) => {



    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyC5Uuuwshx9rQwt9Mn7mFbmjTfg7iehvcY',
    });



    if (!isLoaded) return <div>loading...</div>;




    const handleMarkerClick = (id: number, lat: number, lng: number) => {
        props.mapRef?.panTo({ lat, lng });

        // setInfoWindowData({ id, address });
        // setIsOpen(true);
    };

    const onMapLoad = (map: any) => {
        console.log(typeof (map))
        props.setMapRef(map);
        const bounds = new google.maps.LatLngBounds();

        if (props.markers && props.markers.length > 0) {
            props.markers.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
        }


        map.setMapTypeId('roadmap');


        // map.fitBounds(bounds);
    };

    const onMapClick = (e: any) => {
        props.clicked({ lat: e.latLng?.lat(), lng: e.latLng?.lng(), type: 1 })
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
                    {props.markers.map(({ lat, lng, type }, index) => (
                        <MarkerF position={{ lat, lng }}
                            animation={google.maps.Animation.DROP}
                            icon={{
                                path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
                                // path: "M510.11,306.745c-0.134-0.189-13.482-18.958-24.994-36.68c-5.733-8.825-5.992-13.96-1.152-22.885 c10.979-20.25,22.637-42.153,22.754-42.372c2.583-4.856,0.853-10.885-3.913-13.629c-2.172-1.253-53.664-30.432-93.075-11.376 c-7.617,3.682-15.153,8.31-22.399,13.758c-8.493,6.385-20.497,13.238-29.437,9.639l-1.722-0.694 c-6.871-2.767-13.886-5.591-21.014-8.388l-2.516-15.327c-2.397-14.598-11.921-26.854-25.475-32.784l-45.304-19.822 c-3.792-1.658-7.073-4.312-9.488-7.671c-6.898-9.597-17.133-15.854-28.82-17.615c-11.688-1.763-23.31,1.198-32.733,8.336 l-3.857,2.923c-4.47,3.385-8.194,7.543-11.07,12.355l-27.182,45.5c-47.081,8.249-79.935,24.532-101.077,38.87 c-32.982,22.368-45.821,45.055-46.351,46.009c-1.71,3.081-1.71,6.825,0,9.906c1.369,2.463,33.962,59.323,130.659,81.565 c2.606,41.714,55.461,63.56,57.766,64.493c1.226,0.495,2.524,0.744,3.822,0.744s2.596-0.248,3.822-0.744 c2.225-0.9,51.577-21.297,57.324-60.25c8.011-1.637,16.023-3.665,23.984-5.956c15.38,14.194,43.938,27.729,47.364,29.326 c1.367,0.637,2.838,0.956,4.31,0.956c1.515,0,3.031-0.338,4.43-1.012c2.757-1.33,4.771-3.826,5.487-6.802 c0.285-1.182,6.328-26.549,6.747-47.052c0.664-0.265,1.337-0.534,1.998-0.799l6.911-2.762c7.846-3.126,19.22,3.565,28.255,9.742 c10.295,7.036,21.556,12.783,32.565,16.617c7.043,2.452,14.267,3.473,21.427,3.472c34.866-0.003,68.052-24.245,69.723-25.484 C512.339,317.544,513.332,311.271,510.11,306.745z M193.406,134.976c1.526-2.555,3.502-4.761,5.876-6.559l3.857-2.923 c5.001-3.789,11.17-5.359,17.374-4.424c6.203,0.935,11.635,4.256,15.297,9.351c4.551,6.331,10.732,11.329,17.876,14.454 l45.303,19.821c7.195,3.148,12.249,9.654,13.521,17.402l0.604,3.675c-32.292-11.688-66.231-21.167-99.361-21.167 c-13.898,0-26.934,0.682-39.178,1.892L193.406,134.976z M193.554,390.186c-10.873-5.338-41.323-22.488-41.323-47.02 c0-13.774,0.355-24.028,4.94-30.545c5.091-7.236,16.985-10.753,36.358-10.753c41.298,0,41.298,15.545,41.298,41.298 C234.828,367.922,204.468,384.889,193.554,390.186z M323.054,349.649c-6.564-3.502-14.283-7.937-20.934-12.491 c8.131-2.826,16.146-5.813,23.987-8.843C325.431,335.776,324.201,343.469,323.054,349.649z M423.434,323.6 c-9.331-3.25-18.932-8.156-27.76-14.191c-8.492-5.806-28.382-19.4-47.32-11.85l-6.934,2.771 c-26.922,10.77-57.041,22.805-86.532,29.369c-0.689-10.796-2.742-20.532-8.728-28.885c-9.456-13.196-26.178-19.342-52.629-19.342 c-26.867,0-43.721,6.169-53.041,19.412c-5.145,7.312-7.222,15.907-8.069,24.625c-14.21-3.505-26.789-7.808-37.844-12.491 c5.655-2.688,10.949-6.176,15.696-10.423c4.198-3.755,4.558-10.203,0.802-14.401c-3.756-4.197-10.202-4.559-14.401-0.802 c-8.165,7.304-18.651,11.402-29.613,11.615c-8.495-5.152-15.499-10.272-21.114-14.893c-12.046-9.912-19.576-18.957-23.492-24.278 c12.823-17.446,64.657-74.833,191.3-74.833c44.336,0,92.397,19.352,134.799,36.426l1.723,0.694 c14.263,5.743,30.854,1.62,49.312-12.256c6.192-4.654,12.592-8.591,19.021-11.7c21.591-10.441,50.73-0.153,65.162,6.315 c-4.423,8.275-11.202,20.92-17.738,32.975c-8.426,15.539-7.834,28.614,1.979,43.718c6.851,10.548,14.334,21.451,19.407,28.743 C471.996,319.085,444.673,330.993,423.434,323.6z",
                                fillColor: type === 1 ? 'blue' : 'orange',
                                fillOpacity: 0.8,
                                strokeWeight: 0,
                                scale: 2,

                                anchor: new google.maps.Point(0, 20),
                            }}

                            onClick={() => {
                                handleMarkerClick(index, lat, lng);

                            }} />



                    ))}
                    <DirectionsRenderer directions={props.dirRes} />
                    {/* {props.dirRes && <DirectionsRenderer directions={props.dirRes} />} */}
                </GoogleMap>


            </div>
        </>
    );
};








export default function Home() {

    const [mapRef, setMapRef] = useState<any | null>(null);
    const [menuOption, setMenuOption] = useState(0);
    // const [directionsResponse, SetDirRes] = useState<google.maps.DirectionsResult | null>(null);
    const [directionsResponse, SetDirRes] = useState<google.maps.DirectionsResult>({} as google.maps.DirectionsResult);


    //have made new spot


    const [markers, setMarkers] = useState<marktype[]>(getPlaceList().map((mark) => mark.marker));
    // const [startmkr, setstartmkr] = useState<google.maps.LatLng>

    // var start = new google.maps.LatLng(-33.9176124300634, 151.2314678405397);
    // var end = 

    // const startRef = useRef<google.maps.LatLng |null >()
    // const endRef = useRef()

    async function calRoute(end: marktype) {



        const directionService = new google.maps.DirectionsService()


        var directionsRenderer = new window.google.maps.DirectionsRenderer();

        // const haight = new 
        // const des = new google.maps.LatLng(end.lat, end.lng);

        const res = await directionService.route({
            origin: { lat: -33.9176124300634, lng: 151.2314678405397 },
            destination: { lat: end.lat, lng: end.lng },
            travelMode: google.maps.TravelMode.DRIVING
        })

        SetDirRes(res)
    }

    function clearRoute() {
        SetDirRes({} as google.maps.DirectionsResult)

    }




    return (
        <div className='home-container'>
            <div className='map-container'>
                <Mapback markers={markers} clicked={function (place: marktype): void {
                    if (markers.length == 0 || markers[markers.length - 1].type === 0) {
                        setMarkers(markers => [...markers, place]);
                    } else {
                        setMarkers(markers => [...markers.slice(0, markers.length - 1), place]);
                    }

                }} mapRef={null} setMapRef={function (map: GoogleMap | null): void {
                    setMapRef(map);
                }} dirRes={directionsResponse} />
            </div>
            <NavBar toggleMap={function (isSat: boolean): void {
                if (mapRef) {
                    console.log("Change")
                    if (isSat) {
                        mapRef.setMapTypeId('roadmap');
                    } else {
                        mapRef.setMapTypeId('satellite');
                    }
                }
            }} />

            <div className='menu'>
                <div className=""> {/* flex flex-col content-center items-center */}
                    <p className="flex text-3xl font-medium p-2 justify-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]"> {/* bg-white rounded-md w-4/12  */}
                        Looking to:
                    </p>
                </div>
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
                <LookingToBox option={menuOption} haveMadeNewSpot={markers} mapref={mapRef} changelastmarker={function (): void {
                    var mark = markers[markers.length - 1];
                    mark.type = 0;
                    console.log("hello");
                    setMarkers(markers => ([...markers, mark]));
                }} selectBox={function (end: marktype): void {
                    clearRoute()
                    if (mapRef) {
                        calRoute(end)
                        if (!directionsResponse) {

                        }

                    }

                }} />

            </div>
            <DistanceEtaLabel />
            
        </div>
    )
}