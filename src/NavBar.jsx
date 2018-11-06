import React, { Component } from 'react';
import './NavBar.css';
import { Navbar, NavbarBrand, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
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
                        Créer son graphique
                       
                    </NavItem>
                    <NavItem className="links">
                        Tous les graphiques
                    </NavItem>
                    <NavItem className="links"><NavLink to="Society">
                        A propos
                        </NavLink>
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