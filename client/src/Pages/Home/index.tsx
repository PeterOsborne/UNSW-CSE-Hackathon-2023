import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { useMemo } from "react";
import SearchBar from '../../Components/SearchBar/index'
import { ButtonGroup } from 'react-bootstrap';

import './style.scss';

const Mapback = () => {
    return (
        <>
            <div className="background">
                {
                    <div className='map-component-container'>
                        <div>yoooo</div>
                        <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} mapContainerClassName='map-container'></GoogleMap>
                    </div>
                }
            </div>
        </>
    );
};



export default function Home() {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, });
    if (!isLoaded) return <div>loading...</div>

    return (
        <div className='home-container'>
            <p>This will be signin button</p>
            <div className='map-container'>
                <Mapback />
            </div>
        </div>
    )
}