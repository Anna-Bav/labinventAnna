import React from 'react';
import './Worklist.css';
import Worklist_1 from '../worklist/worklist_1/Worklist_1'
import Worklist_2 from '../worklist/worklist_2/Worklist_2'

export default function Worklist() {
    return(
        <div className='worklist'>
            <Worklist_1 /> 
          
            <Worklist_2 />
            
          
        </div>
    )
}