import React from 'react';
import './popup.css'


const Popup = ({ open, setOpen }) => {



    return (
        <>
            {open && (
                <div className='popup-parent'>


                    <div className='container popup-main'>
                        

                            <div className="pop-content">
                                <div className="popup-wrapper">
                                    <div className="pop-heading">
                                        <h3>Setting</h3>
                                        <a onClick={e => setOpen(false)} >
                                            <img src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png" />
                                        </a>
                                    </div>

                                </div>
                                

                                <div className="pop-scrool">
                                <div className="popup-container">

                                    <div className='popup-row1'>
                                        <p>GLOBLE</p>
                                    </div>
                                    <div className='popup-row2'>
                                        <p>Dark Mode</p>

                                    </div>
                                    <div className='popup-row3'>
                                        <div className="default-text">
                                            <p>Default Transtation Speed</p>

                                        </div>
                                        <div className="popup-btn">
                                            <button>Standard(5)</button>
                                            <button>Fast(5)</button>
                                            <button>Insant(5)</button>

                                        </div>

                                    </div>
                                    <hr />
                                </div>

                                <div className="popup-container">

                                    <div className='popup-row1'>
                                        <p>Swap and Liquidity</p>
                                    </div>
                                    <div className='popup-row2'>
                                        <p>Slippage Tolerance</p>

                                    </div>
                                    <div className='popup-row3'>
                                        <div className="popup-btn2">
                                            <button>0.1%</button>
                                            <button>0.5%</button>
                                            <button>1.0%</button>
                                            <button>0.50%</button>

                                        </div>

                                    </div>

                                </div>

                                <div className="popup-container">


                                    <div className='popup-row2'>
                                        <p>Dark Mode</p>

                                    </div>
                                    <div className='popup-row3'>
                                        <div className="default-text">
                                            <p>Tx deadline (mins)</p>

                                        </div>
                                        <div className="default-text">
                                            <p>Expert Mode</p>
                                            <label className='switch' >
                                                <input type="checkbox" />
                                                <span className='slider'></span>
                                            </label>

                                        </div>
                                        <div className="default-text">
                                            <p>Disable Multihops</p>
                                            <label className='switch' >
                                                <input type="checkbox" />
                                                <span className='slider'></span>
                                            </label>

                                        </div>
                                        <div className="default-text">
                                            <p>Subgraph Health Indicator</p>
                                            <label className='switch' >
                                                <input type="checkbox" />
                                                <span className='slider'></span>
                                            </label>

                                        </div>
                                        <div className="default-text">
                                            <p>Flippy sounds</p>
                                            <label className='switch' >
                                                <input type="checkbox" />
                                                <span className='slider'></span>
                                            </label>

                                        </div>

                                    </div>

                                </div>
                                </div>



                            </div>

                        
                    </div>

                </div>
            )
            }

        </>


    );
}


export default Popup;