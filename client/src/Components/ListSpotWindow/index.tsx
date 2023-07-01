import React, { useState } from 'react';
import './index.scss';
import ParkingTypeDropDown from '../ParkingTypeDropDown';

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

      <div className="grid grid-cols-2">
        <div className="p-2">Parking Type</div>
        <div className="p-2"><ParkingTypeDropDown /></div>
        <div className="p-2">Spot Availability</div>
        <div className="p-2">(spotAvaialbiulty here)</div>
        <div className="p-2">Spot Price</div>
        <div className="p-2">(spotprice here)</div>
      </div>

      <div className="flex flex-col">
        <div className="flex">Post parking spot!</div>
      </div>
    </div>
  );
};

export default ListSpotWindow;