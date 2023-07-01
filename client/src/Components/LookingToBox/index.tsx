import { useEffect, useState } from "react";
import ScrollBox from "../ScrollBox";
import ListSpotWindow from "../ListSpotWindow";
import classNames from 'classnames';
import React from "react";
import SearchBar from "../SearchBar";

import { getPlaceList } from "../../Backend/places"
import { GoogleMap } from "@react-google-maps/api";
import { getData, setData } from "../../Backend/dataStore";
interface PropsLookingToBox {
    option: number //if 0 then rent, if 1 then offer
    haveMadeNewSpot: marktype[]
    mapref: GoogleMap | null,
    changelastmarker: () => void;
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
            console.log("distance");
            console.log(places);
            places.sort((place1: Place, place2: Place) => place1.placeDistance - place2.placeDistance);
            console.log(places);
        } else if (value === "distance") {
            console.log("price");
            places.sort((place1: Place, place2: Place) => place1.placePriceRate - place2.placePriceRate);
        } else if (value === "alphabetically") {
            console.log("alpha");
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
    };

    if (props.option == 0) {
        return (
            <>
                <div className="flex flex-col bg-white rounded-lg pl-7 pr-7 pt-2 pb-2">
                    <div className="flex justify-end">
                        <SearchBar />
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