import './index.scss';
import React, { useState } from 'react';

interface Props {

}

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        // Call the search function here, passing the updated search term
        performSearch(event.target.value);
    };

    const performSearch = (term: string) => {
        // Implement your search logic here

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
