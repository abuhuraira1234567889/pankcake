import React, { useState, useEffect } from 'react';
import "../images/down.png";
import Footer2 from '../footer2/Footer2';
import "./Card2.css"

const Card2 = () => {


    // const [data, setData] = useState([])
    const [state, setState] = useState(0);
    const arr2 = [

        {
            id: 1,
            img1: "https://bscinfo.wault.finance/images/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png?1632009600316",
            img2: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
            cakehead: "Cake-BNB",
            cakesubhead1: "core",
            cakesubhead2: "40X",
            apr: "36.13%",
            earn: "cake +fees",
            cakeearn: "000.0",
            show: false,
            data: "lkaCKXBaxbXBbx"

        },
        {
            id: 2,
            img1: "https://bscinfo.wault.finance/images/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png?1632009600316",
            img2: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",

            cakehead: "Cake-BNB",
            cakesubhead1: "core",
            cakesubhead2: "40X",
            apr: "36.13%",
            earn: "cake +fees",
            cakeearn: "000.0", show: false,
            data: "lkaCKXBaxbXBbx"

        },
        {
            id: 3,
            img1: "https://bscinfo.wault.finance/images/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png?1632009600316",
            img2: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",

            cakehead: "Cake-BNB",
            cakesubhead1: "core",
            cakesubhead2: "40X",
            apr: "36.13%",
            earn: "cake +fees",
            cakeearn: "000.0",
            show: false,
            data: "lkaCKXBaxbXBbx"

        },
        {
            id: 4,
            img1: "https://bscinfo.wault.finance/images/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png?1632009600316",
            img2: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",

            cakehead: "Cake-BNB",
            cakesubhead1: "core",
            cakesubhead2: "40X",
            apr: "36.13%",
            earn: "cake +fees",
            cakeearn: "000.0",
            show: false,
            data: "lkaCKXBaxbXBbx"

        },
        {
            id: 5,

            img1: "https://bscinfo.wault.finance/images/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png?1632009600316",
            img2: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",

            cakehead: "Cake-BNB",
            cakesubhead1: "core",
            cakesubhead2: "40X",
            apr: "36.13%",
            earn: "cake +fees",
            cakeearn: "000.0",
            show: false,
            data: "lkaCKXBaxbXBbx"

        }
    ]



    function showData(key) {
        state === key ? setState(0) : setState(key);
        //  alert(key)
        arr2.map((edata) => {
            if (key === edata.id) {
                console.log(edata.show, "before");
                edata.show = !edata.show;
                console.log(edata.show, "after");
                return edata;
            }



        })



    }



    return (
        <>
            <div className="card2-wrapper ">

                <div className="container card2-container">
                    {
                        arr2?.map((item, index) => {
                            return (
                                <div className="card2" key={index}>

                                    <div className="container card2-body-container">
                                        <div className="card2-header">

                                            <div className='card2-img'>
                                                <img key={item.id} className='card2-img1' src={item.img1} alt="" />
                                                <img key={item.id} className='card2-img2' src={item.img2} alt="" />
                                            </div>

                                            <div className="header-content">
                                                <h2 key={item.id} > {item.cakehead}</h2>
                                                <div className="header-para">
                                                    <p key={item.id}>{item.cakesubhead1}</p>
                                                    <h5 key={item.id}>{item.cakesubhead2}</h5>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="card2-body">
                                            <div className="body-content">
                                                <div className="apr">
                                                    <div className="apr-content">
                                                        <p>APR</p>
                                                    </div>
                                                    <div className="apr-no">
                                                        <p key={item.id}>{item.apr}</p>
                                                    </div>
                                                </div>
                                                <div className="apr">
                                                    <div className="apr-content">
                                                        <p>Earn</p>
                                                    </div>
                                                    <div className="apr-no">
                                                        <p key={item.id}>{item.earn}</p>
                                                    </div>
                                                </div>
                                                <div className='cake-earned'>
                                                    <p>CAKE Earned</p>

                                                    <div className="earned">
                                                        <div className="earned-content">
                                                            <p key={item.id}>{item.cakeearn}</p>
                                                        </div>
                                                        <div className="earbed-btn">
                                                            <p>36.13%</p>
                                                        </div>
                                                    </div>



                                                </div>
                                                <div className="body-btn">
                                                    <p>Cake-BNB</p>
                                                    <button>Connect Button</button>
                                                </div>
                                            </div>
                                            <hr />


                                        </div>
                                        <div className="deatail">

                                            <p onClick={e => showData(item.id)}>{state === item.id ? "hide" : "detail"} <img src="https://bgenchel.github.io/res/images/down-arrow.svg" alt="" /></p>


                                            {/* {state===item.id && 
                                            <div className="detail-para">
                                                <p>HEllo</p>
                                                <p>Hello</p>
                                                <p>Hello</p>
                                            </div>} */}

                                        </div>






                                    </div>
                                    {state === item.id &&
                                        <div className="detail-para">
                                            <p>HEllo</p>
                                            <p>Hello</p>
                                            <p>Hello</p>
                                        </div>}
                                </div>

                            )
                        })

                    }


                </div>

            </div>


            <Footer2 />

        </>
    );
}

export default Card2;