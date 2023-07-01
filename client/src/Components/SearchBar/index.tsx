import './index.scss';
import React, { useState } from 'react';

interface Props {

}

const FavouriteColour = () => {

    const [colour, setColour] = useState("red");

    return (
        <div>
            My favourite colour is {colour}!
        </div>
    )

}

export default FavouriteColour;
