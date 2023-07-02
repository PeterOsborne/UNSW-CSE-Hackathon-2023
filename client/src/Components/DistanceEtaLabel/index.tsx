import { Link } from 'react-router-dom'
import './index.scss'
import React, { useState } from 'react';

interface Props {
    time: string
}

export const DistanceEtaLabel = (props: Props) => {

    return (
        <div className='etaLabel'>
            <div className='p-4'>
                <div className=' bg-white rounded-md shadow p-2'>
                    <div className='font-medium'>Remaining Time:</div>
                    <div className='flex justify-center'>
                        <div>{props.time}</div>
                    </div>
                </div>
            </div>
        </ div>
    )
}