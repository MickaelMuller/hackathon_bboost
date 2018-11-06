import React, { Component } from 'react';
import './navbar.css';
import { Navbar, NavbarBrand, NavItem } from 'reactstrap';
import { NavbarNav } from 'mdbreact';

class NavBar extends Component {
    render() {
        return (
            <Navbar className="navcolor" dark expand="xs" scrolling fixed='top'>
                <NavbarBrand href="/">
                    <img className='logo' src='/medias/LogoEpidemiumV2.png' alt='Logo' />
                </NavbarBrand>
                <NavbarNav left>
                    <NavItem className="links">
                        Link1
                    </NavItem>
                    <NavItem className="links">
                        Link2
                    </NavItem>
                    <NavItem className="links">
                        Link3
                    </NavItem>
                </NavbarNav>
                <NavbarNav right>
                    <NavItem>
                        <form className="form-inline md-form mt-0">
                             <input placeholder="Search..."/>
                        </form>
                    </NavItem>
                </NavbarNav>
            </Navbar>
        );
    }
}
export default NavBar;