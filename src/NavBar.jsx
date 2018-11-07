import React, { Component } from 'react';
import './NavBar.css';
import { Navbar, NavbarBrand, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { NavbarNav } from 'mdbreact';

class NavBar extends Component {
    render() {
        return (
            <Navbar className="navcolor" expand="xs" scrolling fixed='top'>
                <NavbarBrand href="/" >
                    <img className='logo' src='/medias/LogoEpidemiumV2.png' alt='Logo' />
                </NavbarBrand>
                <NavbarNav left >
                    <NavItem className="links" ><NavLink to="/">
                        Créer son graphique
                        </NavLink>
                    </NavItem>
                    <NavItem className="links"><NavLink to="GraphPage">
                        Tous les graphiques
                        </NavLink>
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
                    <img className="img-spaced" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALrSURBVEhL7ZTZTxNRFMbvP+WDLyhRIQSQNSE1iKmAG4lRQ4IYY0yA4BI1BiuQKBIFSYxWlraUnWgphrVACygVaKF0Z6bFDl3ns3cclpIGfDC+wEm+3NzMzPc7d849hxzFIY4Fjd6zaPL6JqadbHGpxpCQpRzbq3cfjaumujeBFYkkQle6j/deYq5qvLF5zmySvQ6YpRdDIoIQa0YqPLIa8ByHYCiCZrkRyRI1TmQpt9XaaYLn5QtYjh8TVrrf/Zzq2m0tFruH4Th/Ds5LhWCnZ3kRQYhGoQu5y0phy0zH5pdB0LA5OdypHts22A+SXtCDzlYD1qurYE1Jgq/tMxCJwObgIiKCkIRMBVtWOQqLohe2nAy4S28ibLEIsKERO/Iu98eFnMxW4mGNDq4PnwRzpqoCEYYBzwPK3hWcvdDjERF/IDSjpDw1mloMYGtlsJ5JxEZjA/hgEP5AGIYfTAykX7OG2Z5xOK8Uw5EvQUA3KSRlXPaipFwrnJD6ighC5Mplf3uXCVuiBo6pefha5QhMTggf09gN4X0++DrawHWrgXAYoTAP/TyDjh7ztg/1FRGEuGrrhMIfJEeRVIDQNd7zvaK+IoKQtdOJwsf/WtRXRPynk+yuiapvBQtLHkSiN4Tnov9d0Q6uS41wMBRTk01/WKwUEFpcFOrHfhuFdtQevyZbt+vug3GhP2hsDvRF+yYN7vIyaJQz6BpYjYHQK1z5bBJuxh/NhgenVsGWloL1+/fQ36FHprQ39nZJrvZ7h8fsgnnYsgr3rRuw52bBouxDWcXIvs2Ymt9NM46enEdkwwv2yWNYk0/B/b4Fz+unORFBCMP6edoP3oZXQn+w9XV426wX+oYa7QfZUnTmYW6BFRINzs3CIS2ArbhopybMVy1vz8uB63oJdN065JcMxhhQHQShSsxW4Wn9DDZ+BYWx4pa37cwus7QwtNQk9z+SzfyMN1mp/nYKU2UX9U0NDK25vhs9jIg4isMXhPwGqU/ztGXfJdcAAAAASUVORK5CYII=" alt="changer langue"/>
                </NavbarNav>
            </Navbar>
        );
    }
}
export default NavBar;