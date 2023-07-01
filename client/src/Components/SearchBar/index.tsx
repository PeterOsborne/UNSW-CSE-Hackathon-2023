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
