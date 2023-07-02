import { useEffect, useState } from "react";
import ScrollBox from "../ScrollBox";
import ListSpotWindow from "../ListSpotWindow";
import classNames from 'classnames';
import React from "react";
import SearchBar from "../SearchBar";

import { Data, getPlaceList } from "../../Backend/places"
import { GoogleMap } from "@react-google-maps/api";
import { getData, setData } from "../../Backend/dataStore";
interface PropsLookingToBox {
    option: number //if 0 then rent, if 1 then offer
    haveMadeNewSpot: marktype[]
    mapref: GoogleMap | null,
    changelastmarker: () => void;
    selectBox: (end: marktype) => void;
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

export const LookingToBox = (props: PropsLookingToBox) => {

    const [items, setItems] = useState<Place[]>(getPlaceList());



    const [selected, setSelected] = useState(items[0]);

    const [value, setValue] = React.useState('distance');


    function handleChange(e: any) {
        let data = getData();
        let places = data.places;
        setValue(e.target.value);
        if (value === "price") {
            places.sort((place1: Place, place2: Place) => place1.placeDistance - place2.placeDistance);
        } else if (value === "distance") {
            places.sort((place1: Place, place2: Place) => place1.placePriceRate - place2.placePriceRate);
        } else if (value === "alphabetically") {
            places.sort((place1: Place, place2: Place) => {
                if (place1.placeName < place2.placeName) {
                    return -1;
                }
                if (place1.placeName > place2.placeName) {
                    return 1;
                }
                return 0;
            });
        }
        setData(data);
    }

    const handelSelect = (selected: Place, index: number) => {
        setSelected(selected);
        props.mapref?.panTo({ lat: selected.marker.lat, lng: selected.marker.lng })
        props.selectBox(selected.marker);
    };

    if (props.option == 0) {
        return (
            <>
                <div className="flex flex-col bg-white rounded-lg pl-7 pr-7 pt-2 pb-2 drop-shadow-lg">
                    <div className="flex justify-end">
                        <div className="flex pr-12">
                            <SearchBar update={function (data: Data): void {
                                setItems(data.places);
                            }} />
                        </div>
                        <div className="flex flex-row font-medium text-lg pr-7">
                            <div className="flex justify-center items-center">
                                Sort by:
                            </div>

                        </div>

                        <div className="flex justify-end p-1">
                            <form method="post">
                                <label>
                                    <select value={value} name="selectedSort" onChange={handleChange} className="border rounded py-2 px-3 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 font-medium">
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
                        <ScrollBox items={items} onSelect={handelSelect}></ScrollBox>
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <ListSpotWindow markers={props.haveMadeNewSpot} changelastmarker={function (): void {
                props.changelastmarker()
            }} ></ListSpotWindow>
        </>
    );
};