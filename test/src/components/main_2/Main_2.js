import React from 'react';
import './Main_2.css';
import Nav from './nav/Nav';
import Flasks from './flasks/Flasks';
import Worklist from './worklist/Worklist';


export default function Main_2() {
    return(
        <div className='main_2'>
            <Nav />
            <div className='fl_work'>
            <Flasks />
            <Worklist />
            </div>
        </div>
    )
}