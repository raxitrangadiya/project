import React, { useState } from 'react';
import { NavbarItem } from './NavItem.js'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    // MDBNavbarLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
export default function App() {
    const [showBasic, setShowBasic] = useState(false);
    // console.log(NavbarItem);print nav item data in log
    let ListData = Object.entries(NavbarItem).map(([key, val], index) => {
        return <MDBNavbarItem key={index}>
            <Link className="nav-link" to={key}>{val}</Link>
        </MDBNavbarItem>
    })
return (
    <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
            <MDBNavbarBrand href='#'><img className='App-logo' src="/images/logo.png" alt="" /></MDBNavbarBrand>

            <MDBNavbarToggler
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowBasic(!showBasic)}
            >
                <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>

            <MDBCollapse navbar show={showBasic}>
                <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                    <MDBNavbarItem>
                        {/* {console.log(ListData)} */}
                    </MDBNavbarItem>

                        {ListData}

                    <MDBNavbarItem>
                        {/* <MDBDropdown>
                            <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                Account
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem link>Login</MDBDropdownItem>
                                <MDBDropdownItem link>Sign Up</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown> */}
                    </MDBNavbarItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
    </MDBNavbar>
);
}