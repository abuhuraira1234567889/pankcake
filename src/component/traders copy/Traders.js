import React, { useState } from 'react';
import "./trades.css"

const total = [
    {
        colno: "#1",
        coldata1: "$11,033,510",
        coldata2: "y0x72...a55b"


    },
    {
        colno: "#2",
        coldata1: "j10,787,999",
        coldata2: "0x2D...A9BA"


    },
    {
        colno: "#3",
        coldata1: "7,415,266",
        coldata2: "yytuytuytyt"


    },
    {
        colno: "#4",
        coldata1: "$5,234,418",
        coldata2: "0x64...8AaE"


    }

]


const strom = [
    {
        colno: "#1",
        coldata1: "10,787,999",
        coldata2: "0x2D...A9BA"


    },
    {
        colno: "#2",
        coldata1: "1,237,674",
        coldata2: "0xe3...5f0a"


    },
    {
        colno: "#3",
        coldata1: "1,166,435",
        coldata2: "0x93...4742"


    },
    {
        colno: "#4",
        coldata1: "895,702",
        coldata2: "0x23...D02c"


    }

]

const flipers = [
    {
        colno: "#1",
        coldata1: "11,033,510",
        coldata2: "0x72...a55b"


    },
    {
        colno: "#2",
        coldata1: "7,415,266",
        coldata2: "0x3e...d90c"


    },
    {
        colno: "#3",
        coldata1: "$5,234,418",
        coldata2: "0x64...8AaE"


    },
    {
        colno: "#4",
        coldata1: "$3,355,375",
        coldata2: "0xc8...212E"


    }

]
const cakers = [
    {
        colno: "#1",
        coldata1: "$1,017,724",
        coldata2: "0xbe...B2B5"


    },
    {
        colno: "#2",
        coldata1: "$877,666",
        coldata2: "0xEF...127F"


    },
    {
        colno: "#3",
        coldata1: "$455,889",
        coldata2: "0x3E...8f0D"


    },
    {
        colno: "#4",
        coldata1: "379,384",
        coldata2: "0xb9...3152"


    }

]
const Traders = () => {
    const [toggle, setToggle] = useState(1);
    const toggletab = (index) => {
        setToggle(index)
        console.log(index)
    }
    return (
        <>
            <div className="traders-wrapper">
                <div className="container">
                    <div className="trader-content">
                        <div className="trader-top">
                            <h2>Top Traders</h2>
                            <p>Since Start of competation</p>
                        </div>
                        <div className="trader-btns">
                            <button onClick={() => toggletab(1)} >Total</button>
                            <button onClick={() => toggletab(2)} >Strom</button>
                            <button onClick={() => toggletab(3)} >Flippers</button>
                            <button onClick={() => toggletab(4)} >Cakers</button>
                        </div>
                        {
                            toggle === 1 ?


                                total.map((items, index) => {
                                    return (
                                        <div className="trader-col">
                                            <h3>{items.colno}</h3>
                                            <p>{items.coldata1}</p>
                                            <p>{items.coldata2}</p>
                                        </div>
                                    )


                                })
                                :
                                console.log("ok")
                        }

                        {
                            toggle === 2 ?


                                strom.map((items, index) => {
                                    return (
                                        <div className="trader-col">
                                            <h3>{items.colno}</h3>
                                            <p>{items.coldata1}</p>
                                            <p>{items.coldata2}</p>
                                        </div>
                                    )


                                })
                                :
                                console.log("ok")
                        }
                        {
                            toggle === 3 ?


                                flipers.map((items, index) => {
                                    return (
                                        <div className="trader-col">
                                            <h3>{items.colno}</h3>
                                            <p>{items.coldata1}</p>
                                            <p>{items.coldata2}</p>
                                        </div>
                                    )


                                })
                                :
                                console.log("ok")
                        }

                        {
                            toggle === 4 ?


                                cakers.map((items, index) => {
                                    return (
                                        <div className="trader-col">
                                            <h3>{items.colno}</h3>
                                            <p>{items.coldata1}</p>
                                            <p>{items.coldata2}</p>
                                        </div>
                                    )


                                })
                                :
                                console.log("ok")
                        }






                    </div>

                </div>
            </div>






        </>
    );
}


export default Traders;