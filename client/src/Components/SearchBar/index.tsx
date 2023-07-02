import './index.scss';
import React, { useState } from 'react';
import { getData, setData } from '../../Backend/dataStore'

interface Props {

}

interface Place {
    placeDistance: number;
    placePriceRate: number;
    placeName: string;
    placeAvailability: string;
    marker: marktype;
}

interface Data {
    places: Place[];
}

interface marktype {
    lat: number,
    lng: number,
    type: number
}


interface Props {
    update: (data: Data) => void;
}
const SearchBar = (props: Props) => {
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
            } else if (name1Frag.includes(searchTerm) && (name2Frag.includes(searchTerm))) {
                return 0;
            } else if (name1.includes(searchTerm) && !(name2.includes(searchTerm))) {
                return 1;
            } else if (!(name1.includes(searchTerm)) && name2.includes(searchTerm)) {
                return -1;
            }
            return 0;
        });
        props.update(data);
    };

    return (
        <div className='flex items-center justify-center '>
            <div className='flex pr-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
            <div className="flex font-medium text-lg pr-7">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Search for a Karping spot"
                    className='border-2 pl-2'
                />
            </div>
        </div>
    );
}


export default SearchBar;
