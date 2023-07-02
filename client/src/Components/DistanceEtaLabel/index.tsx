import { Link } from 'react-router-dom'
import './index.scss'
import React, { useState } from 'react';

export const DistanceEtaLabel = () => {

    return (
<div className='etaLabel'>
    <div className='p-4'>
        <div className=' bg-white rounded-md shadow p-2'>
            <div className='font-medium'>Remaining Distance:</div>
            <div className='flex justify-center'>
                <div>3.6</div>km
            </div>
        </div>
    </div>
</ div>
    )
}