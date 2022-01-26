import React from 'react';
import './Worklist_1.css';
import Table from '../worklist_1/Table';


export default function Worklist_1() {
    return(
        <div className='worklist_1'>

                <div className='worklist_1_nav'>
                    <div className='worklist1Nav_1'>worklist</div>
                    <div className='worklist1Nav_2'>
                    <img src='/images/play.png'/>
                    <div>run</div>
                    </div>
                    <div className='worklist1Nav_3'><div>TO DO: </div> <div><b>23 injections</b></div></div>
                    <div className='worklist1Nav_4'>02:15:00</div>
                    <div className='worklist1Nav_5'><div><b>METHOD:</b></div><div>Method1.amx (00:00/04:30)</div></div>
                    <div className='worklist1Nav_6'>single run</div>
                    <div className='worklist1Nav_7'></div>
                </div>

                <div className='worklist_1_content'>
                    <div className='content_1'>
                        <div className='content_1Nav'>ALS</div>
                        <div className='content_1Nav'>Inlets</div>
                        <div className='content_1Nav'>Columns</div>
                    </div>
                    <div className='content_2'>
                        <div className='content_2_inner1'>
                        <img src='/images/agilent.png'/>
                        <img src='/images/initial.png'/>
                        </div>
                        <div className='content_2_inner2'>
                            <span>Control Mode</span>
                        </div>
                        <div className='content_2_inner3'>
                            <div className='on'>
                            <input type='checkbox' /> 
                            <div>On</div>
                            </div>
                            <div className='time'>
                                <div className='time_1'>
                                    <div className='flow'>
                                        <div className='flow_1'>Flow</div>
                                        <div className='flow_2'><input type='number' /> 
                                        mL/min</div>
                                    </div >
                                    <div className='flow'>
                                        <div className='flow_1'>Pressure</div>
                                        <div className='flow_2'><input type='number' />
                                        psi</div>
                                    </div>
                                </div>
                                <div className='time_2'>
                                    <div className='flow'>
                                    <div className='flow_1'>Average Velocity</div>
                                        <div className='flow_2'><input type='number' /> 
                                        cm/sec</div>
                                    </div>
                                    <div className='flow'>
                                    <div className='flow_1'>Holdup Time</div>
                                        <div className='flow_2'><input type='number' /> 
                                        min</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='content_2_inner4'>
                        <span>Post Run</span>
                        </div>
                        <div className='content_2_inner5'>
                        <div className='postRun'>
                                    <div className='flow_1'>Post Run</div>
                                        <div className='flow_2'><input type='number' /> 
                                        mL/min</div>
                                    </div>
                        </div>
                    </div>
                    <div className='content_3'>
                        <Table />
                    </div>
                </div>

                <div className='worklist_1_footer'>
                    <div className='footer_1'>
                    <img src='/images/new.png'/>
                    <img src='/images/open.png'/>
                    </div>
                    <div className='footer_2'>
                        <button>Save</button>
                        <button>Save as</button>
                        <button>Cancel</button>
                    </div>
                </div>
        </div>
          
        
    )
}