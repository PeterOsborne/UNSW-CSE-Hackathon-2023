import React, { useState } from 'react';
import './index.scss';

/* 
This window is where sellers will put their spots up for renting
*/

interface Props {

}

const ListSpotWindow = () => {

  return (
    <div className="bg-white border-4 rounded-lg">

      <div className="flex flex-col">
        <div className="flex">Lease a parking spot</div>
      </div>

      <div className="grid-cols-2">
        <div className="">Parking Type</div>
        <div>driveway</div>
        <div>Spot Availability</div>
        <div>Spot Price</div>
      </div>

      <div className="flex flex-col">
        <div className="flex">Post parking spot!</div>
      </div>
    </div>
  );
};

export default ListSpotWindow;