import React, { useContext } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../css/misestilos.css'
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContex";

const Header = () => {
    const { itemCount } = useContext(CartContext);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm bg-light py-3 justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="p-2 text-dark text-decoration-none">
                            Store
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="p-2 text-dark text-decoration-none">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Cart" className="p-2 text-dark text-decoration-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                            Cart ({itemCount})
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;