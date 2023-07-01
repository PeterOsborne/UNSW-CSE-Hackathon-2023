import './index.scss';
import React, { useState } from 'react';

interface Props {

}

const ScrollBox = () => {
    const [parkSpots, setParkSpots] = useState([
        { id: 1, title: '10 Brown St' },
        { id: 2, title: '5 Mayfair Ave' },
        { id: 3, title: '20 Green Rd' }
    ]);

    //if shit do shit

    return (
        <div>
            <div className="overflow-y-scroll">
                <p>this is my scrollbar</p>
            </div> 
        </div>
    )

}

export default ScrollBox;