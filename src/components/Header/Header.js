import React from 'react';
import * as ReactBootStrap from 'react-bootstrap'
const Header = () => {
    return (
        <div>
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
                <ReactBootStrap.Navbar.Brand href="/home">SOCIAL BUDDY</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                       

                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>
                        <ReactBootStrap.Nav.Link href="/home">Home</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/post">Post</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link eventKey={2} href="/about">
                           About
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="/contact">Contact</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>

        </div>
    );
};

export default Header;