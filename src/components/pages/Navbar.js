import React from 'react'
import '../css/Navbar.css'
import logo from "../../logo.svg";
import { Link } from 'react-scroll';

export default function Navbar() {
    return (
        <nav className='nav'>
            <div className='nav-content'>
                <img
                    src={logo}
                    className="nav-logo"
                    alt="Logo"
                />
                <ul className='nav-items'>
                    <li className='nav-item'>
                        <Link
                            className='nav-link'
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={300}
                        >
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            className='nav-link'
                            activeClass="active"
                            to="properties"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={300}
                            exact={true}
                        >
                            Properties
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            className='nav-link'
                            activeClass="active"
                            to="performance"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={300}
                            exact={true}
                        >
                            Performance
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            className='nav-link'
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={300}
                            exact={true}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
