import React, { useState } from 'react';
import './index.scss';
import ParkingTypeDropDown from '../ParkingTypeDropDown';
// import { getData, setData } from '../../Backend/dataStore'
import { createPlace } from '../../Backend/places'
import { Marker } from 'google-maps-react';

/* 
This window is where sellers will put their spots up for renting
*/

interface marktype {
    lat: number,
    lng: number,
    type: number,
}
interface Place {
    placeDistance: number;
    placePriceRate: number;
    placeName: string;
    placeAvailability: string;
    marker: marktype;
}
interface Props {
    markers: marktype[];
    changelastmarker: () => void;
}

const UNSW: marktype = {
    lat: -33.91668815669858,
    lng: 151.23118166932008,
    type: 0,
}

const ListSpotWindow = (props: Props) => {


    const [numerofTimes, setNumOfTimes] = useState(1)
    //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
    function calcCrow(lat1: number, lon1: number, lat2: number, lon2: number): number {
        var R = 6371; // km
        var dLat = toRad(lat2 - lat1);
        var dLon = toRad(lon2 - lon1);
        var lat1 = toRad(lat1);
        var lat2 = toRad(lat2);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    }

    // Converts numeric degrees to radians
    function toRad(Value: number): number {
        return Value * Math.PI / 180;
    }

    let [disabled, setDisabled] = useState(true);
    const [buttonColor, setButtonColor] = useState('grey');

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [availStart, setAvailStart] = useState('');
    const [availEnd, setAvailEnd] = useState('');

    function handleNameChange(event: any) {
        setName(event.target.value);
    }
    function handlePriceChange(event: any) {
        setPrice(event.target.value);
    }

    function handleAvaliabilityStartChange(event: any) {
        setAvailStart(event.target.value);
    }
    function handleAvaliabilityEndChange(event: any) {
        setAvailEnd(event.target.value);
    }


    function handleClick() {
        const currentMarker = props.markers[numOfMarkers - 1];
        const distance = Math.round(calcCrow(currentMarker.lat, currentMarker.lng, UNSW.lat, UNSW.lng) * 10) / 10;
        const avail = availStart + ' - ' + availEnd;


        let newPlace: Place = {
            placeDistance: distance,
            placePriceRate: parseInt(price),
            placeName: name,
            placeAvailability: avail,
            marker: currentMarker,
        }

        createPlace(newPlace);

        props.changelastmarker()
        setName('');
        setPrice('');
        setAvailStart('');
        setAvailEnd('');

    }

    let numOfMarkers = props.markers.length;
    if (
        props.markers[numOfMarkers - 1].type === 1
        && buttonColor === 'grey'
        && name !== ''
        && price !== ''
        && availStart !== ''
        && availEnd !== ''
    ) {
        setButtonColor('blue');
        setDisabled(false);
    }

    return (
        <div>
            <div className="bg-white border-4 rounded-lg">
                <div className="flex flex-col">
                    <div className="flex font-bold justify-center text-lg">Lease a parking spot</div>
                </div>

                <div className="grid grid-cols-2">
                    <div className="p-2 font-medium">Parking Type</div>
                    
                    <div className="relative inline-block text-center ">
                        <form method="post">
                            <label>
                                <select name="selectedSort" className=" border rounded py-2 px-3 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" >
                                    <option value="distance">Driveway</option>
                                    <option value="price">Private Spot</option>
                                    <option value="alphabetically">Car Park</option>
                                </select>
                            </label>
                        </form>
                    </div>

                    <div className="p-2 font-medium">Spot Availability</div>
                    <div className="p-2 flex flex-col">
                        {Array.from(Array(numerofTimes).keys()).map((item, index) => (
                            <div>
                                <input onChange={handleAvaliabilityStartChange} value={availStart} className="w-3/12 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="start_avail" type="text" placeholder="00:00"></input> - <input className="w-3/12 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="end_avail" type="text" placeholder="24:00" onChange={handleAvaliabilityEndChange} value={availEnd}></input>
                            </div>
                        ))}

                        <div className="flex justify-center p-3">
                            <button disabled={numerofTimes > 5} className={(numerofTimes > 5) ? "m-1 flex text-sm w-8/12 bg-blue-100  text-white font-bold py-2 px-4 rounded" : "m-1 flex text-sm w-8/12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"} onClick={() => (setNumOfTimes(numerofTimes => numerofTimes + 1))}>
                                + Add Availability
                            </button>
                            <button disabled={numerofTimes < 2} className={(numerofTimes < 2) ? "m-1 flex text-sm w-8/12 bg-blue-100  text-white font-bold py-2 px-4 rounded" : "m-1 flex text-sm w-8/12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"} onClick={() => (setNumOfTimes(numerofTimes => numerofTimes - 1))}>
                                - Remove Availability
                            </button>
                        </div>
                    </div>
                    <div className="p-2 font-medium">Spot Price</div>
                    <div className="p-2">
                        <div>
                            $ <input className="w-3/12 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="1.00" value={price} onChange={handlePriceChange}></input>/hour
                        </div>
                    </div>
                    <div className="p-2 font-medium">Spot Name</div>
                    <div className="p-2">
                        <div>
                            <input className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="12 Walnut St, NSW 2222" onChange={handleNameChange} value={name}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pt-2">
                <button style={{ backgroundColor: buttonColor }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={disabled} onClick={handleClick} >
                    Post parking spot!
                </button>
            </div>
        </div>
    );
};

export default ListSpotWindow;