import './index.scss';
import React, { useState } from 'react';
import { getData, setData } from '../../Backend/dataStore'

interface Props {

}

export interface Place {
    placeDistance: number;
    placePriceRate: number;
    placeName: string;
    placeAvailability: string;
    marker: marktype;
}

export interface Data {
    places: Place[];
}

export interface marktype {
    lat: number,
    lng: number,
    type: number
}


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        // Call the search function here, passing the updated search term
        performSearch(event.target.value);
    };

    const performSearch = (term: string) => {
        let data: Data = getData();
        let places = data.places;
        places.sort((place1: Place, place2: Place) => {
            const name1 = place1.placeName;
            const name2 = place2.placeName;
            const name1Frag = name1.slice(searchTerm.length);
            const name2Frag = name2.slice(searchTerm.length);

            if (name1Frag.includes(searchTerm) && !(name2Frag.includes(searchTerm))) {
                return 1;
            } else if (!name1Frag.includes(searchTerm) && (name2Frag.includes(searchTerm))) {
                return -1;
            } else if (name1Frag.includes(searchTerm) && (name2Frag.includes(searchTerm))){
                return 0;
            } else if (name1.includes(searchTerm) && !(name2.includes(searchTerm))) {
                return 1;
            } else if (!(name1.includes(searchTerm)) && name2.includes(searchTerm)) {
                return -1;
            }
            return 0;
        });
        setData(data);
    };

    return (
        <div className="flex font-medium text-lg pr-7">
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search for a place"
            />
        </div>
    );
}


export default SearchBar;
