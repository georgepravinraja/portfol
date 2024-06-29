import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <button className="nav-toggle" onClick={toggleNavbar}>
                ☰
            </button>
            <ul className={`navlist ${isOpen ? "open" : ""}`}>
                <li className="navitem">
                    <Link className="navlink" to="/" onClick={toggleNavbar}>Home</Link>
                </li>
                <li className="navitem">
                    <Link className="navlink" to="/about" onClick={toggleNavbar}>About</Link>
                </li>
                <li className="navitem">
                    <Link className="navlink" to="/services" onClick={toggleNavbar}>Services</Link>
                </li>
                <li className="navitem">
                    <Link className="navlink" to="/portfolio" onClick={toggleNavbar}>Portfolio</Link>
                </li>
                <li className="navitem">
                    <Link className="navlink" to="/contact" onClick={toggleNavbar}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
