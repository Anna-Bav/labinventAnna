import React from 'react';
import './Main_1.css'


export default function Main_1() {
    return(
        <div className='main_1'>
            <div className='lims'>lims</div>
            <div className='search'>
            <input  type='text' placeholder="Search"/>
            <img src='/images/search.png'/>
           </div>
           <div className='grey'></div>
           <div className='run'>
               <div>run</div>
               <div><img src='/images/on.png'/>
               <img src='/images/off.png'/></div>
               </div>

        </div>
    )
}