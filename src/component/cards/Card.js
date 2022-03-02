import React, { useState } from 'react';
import Footer2 from '../footer2/Footer2';
import Popup from '../popup/Popup';
import "./card.css"

const Card = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
        
            <Popup open={open} setOpen={setOpen} />

            <div className="card-parent">

                <div className='container card-form' action="">

                    <div className='card-content'>
                        <div className='content-img'>
                            <img src="https://www.freeiconspng.com/uploads/trend-graph-chart-diagrams-arrow-7.png" alt="" />
                        </div>
                        <h2>Swap</h2>
                        <div className='card-content-text'>

                            <a onClick={e => setOpen(true)} >
                                <img className='swap-img' src="https://png.pngtree.com/element_our/png/20181227/settings-glyph-black-icon-png_292947.jpg" alt="" />
                            </a>
                            <a >
                                <img className='swap-img' src="https://www.freeiconspng.com/uploads/clock-event-history-schedule-time-undo-icon--7.png" alt="" />
                            </a>
                            <a >
                                <img className='swap-img' src="https://www.freeiconspng.com/uploads/arrow-refresh-reload-icon-30.png" alt="" />
                            </a>


                        </div>


                    </div>
                    <div className='trade-token'>
                        <p>Trade token in an Instant</p>
                    </div>
                    <br />
                    <hr />
                    <div className='card-content-wrapper'>
                        <div className='card-field1'>
                            <img src="https://w7.pngwing.com/pngs/65/309/png-transparent-bitcoin-com-cryptocurrency-logo-zazzle-bitcoin-text-trademark-logo.png" alt="" />

                            <h4>BNB</h4>

                        </div>
                        <div className='card-input'>
                            <input type="text" />
                        </div>


                        <div className='card-field1'>

                            <img src="https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png" alt="" />
                            <h4>Cake</h4>

                        </div>
                        <div className='card-input'>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='silipag'>
                        <p className='silipag-text1'>Silipage Tolerence</p>
                        <p className='silipag-text2'>0.5%</p>

                    </div>

                    <button className='card-btn'>Connect Wallet</button>


                </div>


            </div>
            <Footer2 />


        </>
    );

}


export default Card;