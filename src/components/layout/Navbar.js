import React from 'react'
import { Link } from "gatsby"
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    return (
        // Nav Container.
        <nav className="nav">
            <div className="top_section">
                <div className="top_section_items">
                    <div className="logo_container left">
                        <div className="logo">
                            <Link to='/'><h2>TITLE</h2></Link>
                        </div>
                    </div>
                    <div className="top_section_item right connect">
                        <div className="socials">
                            <div className="social_icons">
                                <div className="social_icon"><i className="fab fa-twitter"></i></div>
                                <div className="social_icon"><i className="fab fa-linkedin"></i></div>
                                <div className="social_icon"><i className="fab fa-github"></i></div>
                                <div className="social_icon"><i className="far fa-envelope"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
    
}

export default Navbar