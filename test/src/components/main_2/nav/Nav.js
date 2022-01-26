import React from 'react';
import './Nav.css'


export default function Nav() {
    return(
        <div className='nav'>
           <div className='nav_1'>
           <div><img src='/images/burger.png'/></div>
           <div>Instruments</div>
           <div>Widgets</div>
           <div>View</div>
           <div>Administration</div>
           </div>

           <div className='nav_2'>
               <div className='nav_2_name'>
               <img src='/images/icon.png'/>
               <div>Alexander</div>
               </div>
               <div className='nav_2_lang'>
               <div>ENG</div>
               <img src='/images/arrow.png'/>
               
               </div>
               <div className='nav_2_lock'>
               <img src='/images/lock.png'/>
               </div>
           </div>


        </div>
    )
}