import React from 'react';

function initMap(): void {
    const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
            center: { lat: 40.76, lng: -73.983 },
            zoom: 15,
            mapTypeId: "satellite",
        }
    );

    map.setTilt(45);
}

declare global {
    interface Window {
        initMap: () => void;
    }
}
window.initMap = initMap;


export default function Home() {

    return (
        <div className='home-container'>
            <div className='map-container'>
                Yo Yo brudda
            </div>
        </div>
    )
}