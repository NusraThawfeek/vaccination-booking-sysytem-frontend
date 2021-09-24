import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <nav className="#607d8b blue-grey">
                <div className="nav-wrapper ">
                    <a className="brand-logo"><i className="material-icons">cloud</i>Vaccination Booking system</a>
                    <ul className="right hide-on-med-and-down1">
              <li><a><i className="material-icons">more_vert</i></a></li>
                    </ul>

 
                </div>
            </nav>

        </div>
    )
}

export default Navbar
