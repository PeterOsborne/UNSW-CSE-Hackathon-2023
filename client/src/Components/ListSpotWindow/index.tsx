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

      <div className="grid-cols-2">
        <div className="">Parking Type</div>
        <div className=""><ParkingTypeDropDown /></div>
        <div className="">Spot Availability</div>
        <div className="">(spotAvaialbiulty here)</div>
        <div className="">Spot Price</div>
        <div className="">(spotprice here)</div>
      </div>

      <div className="flex flex-col">
        <div className="flex">Post parking spot!</div>
      </div>
    </div>
  );
};

export default ListSpotWindow;