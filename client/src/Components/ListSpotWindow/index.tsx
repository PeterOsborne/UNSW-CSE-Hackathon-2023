import React, { useState } from 'react';
import './index.scss';
import ParkingTypeDropDown from '../ParkingTypeDropDown';

/* 
This window is where sellers will put their spots up for renting
*/

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
interface Props {
    markers: marktype[];
}

const ListSpotWindow = (props: Props) => {
    let [disabled, setDisabled] = useState(true);
    const [buttonColor, setButtonColor] = useState('grey');
    const handleButtonClick = () => {

        setButtonColor('blue');
        setDisabled(false);
    };
    function handleClick() {
        console.log("CLICKED");
    }


    return (
        <div>
            <div className="bg-white border-4 rounded-lg">
                <div className="flex flex-col">
                    <div className="flex font-bold justify-center text-lg">Lease a parking spot</div>
                </div>

                <div className="grid grid-cols-2">
                    <div className="p-2 font-medium">Parking Type</div>
                    <div className="p-2"><ParkingTypeDropDown /></div>
                    <div className="p-2 font-medium">Spot Availability</div>
                    <div className="p-2 flex flex-col">
                        <div>
                            <input className="w-3/12 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="start_avail" type="text" placeholder="00:00"></input> - <input className="w-3/12 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="start_avail" type="text" placeholder="24:00"></input>
                        </div>
                        <div className="flex justify-center p-3">
                            <button onClick={handleButtonClick} className="flex text-sm w-8/12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                + Add Availability
                            </button>
                        </div>
                    </div>
                    <div className="p-2 font-medium">Spot Price</div>
                    <div className="p-2">
                        <div>
                            $ <input className="w-3/12 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="start_avail" type="text" placeholder="1.00"></input>/hour
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