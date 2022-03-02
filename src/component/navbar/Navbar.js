import React, { useState, useEffect } from 'react';
import "./navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [slide, setSlide] = useState(false);
    const [screen, setScreen] = useState(window.innerWidth)
    const navOpen = () => {
        setSlide(!slide)
    }
    useEffect(() => {
        const changeWidth = () => {
            setScreen(window.innerWidth)
        }
        window.addEventListener("resize", changeWidth)

    }, [])


    return (

        <>
            <div className="navbar-wrapper">
                <div className="container">
                    <div className="nav-main">
                        <div className="nav-logo">
                            <Link to="/">
                            <h2>Navbar</h2>
                            </Link>
                        </div>



                        <div className="lines" onClick={navOpen} >
                            <div className="line1">  </div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>


                        {(slide || screen > 767) && (
                            <div className="nav-links">

                                <Link to="/card">Farm</Link>
                                <Link to="/win">Win</Link>
                                <Link to="/trade">Trade</Link>


                            </div>

                        )
                        }



                    </div>

                </div>

            </div>
        </>
    );
}


export default Navbar;