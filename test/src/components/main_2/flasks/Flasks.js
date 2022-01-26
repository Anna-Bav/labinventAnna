import React from 'react';
import './Flasks.css'


export default function Flasks() {
    return(
        <div className='flasks'>

          <div className='flasks_1'>
            <div className='sampler'>
                <div><img src='/images/greenSquare.png'/></div>
                <div>Sampler</div>
            </div>
            <div className='flask_plus'>
                <div className='flask_plus_inner'><img src='/images/flask1.png'/></div>
                <div className='flask_plus_inner'>
                <img src='/images/flask2.png'/>
                <img src='/images/flask3.png'/>
                </div>
            </div>
          </div>

          <div className='flasks_2'>
            <div className='pump'>
                <div><img src='/images/orangeSquare.png'/></div>
                <div>Quat. Pump</div>
            </div>
            <div className='pumps'>
            <div className='pumps_inner'>
            <div className='pumpAB'><img src='/images/pump1.png'/>
            <img src='/images/pump2.png'/>
            </div>
            <div><img src='/images/valve.png'/></div>
            </div>
            <div className='mlMin'>1.000 mL/min</div>
            </div>
           </div>

        </div>
    )
}