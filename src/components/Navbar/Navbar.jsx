import React, { useState } from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavbarToggler,
    MDBCollapse,
} from "mdbreact";
import Instructions from "../Instructions/Instructions";

import "./navbar.css";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <MDBNavbar id="navbar" color="" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text"></strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <Instructions />
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <p id="copyright">&copy; 2018</p>
                </MDBCollapse>
            </MDBNavbar>            
        </div>
    )
};

export default Navbar;