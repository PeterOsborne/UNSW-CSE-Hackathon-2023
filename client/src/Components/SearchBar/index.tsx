import './index.scss';
import React, { useState } from 'react';

interface Props {

}

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle the form submission, e.g., perform search
        console.log('Search term:', searchTerm);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Enter your search term"
            />
            <button type="submit">Search</button>
        </form>
    );
}


export default SearchBar;
