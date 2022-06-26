import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Logo from "../img/LogoName.png";
import "../index.css";
import {logout, reset} from "../features/auth/authSlice"
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const navigate = useNavigate()
  const dispatch = useDispatch()
 
  const {user} = useSelector((state)=> state.auth)





  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
}


  return (
    <MDBNavbar expand="lg" className="d-flex navWrapper py-4 border-bottom">
      <MDBContainer fluid>

        <Link to="/">
          <MDBNavbarBrand>
            <img src={Logo} className="logo" alt="Elana Logo" />
          </MDBNavbarBrand>
        </Link>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav right fullWidth={false} >
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link to="/IndividualPage" className="link">
                  <p onClick={() => setShowNav(!showNav)}>Individuals</p>
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link to="/PractitionerPage" className="link">
                  <p onClick={() => setShowNav(!showNav)}>Practitioner</p>
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link to="/about" className="link">
                  <p onClick={() => setShowNav(!showNav)}>About</p>
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link to="/choosingACategory" className="link">
                  <p onClick={() => setShowNav(!showNav)}>Browse</p>
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <a
                  className="link"
                  href="https://www.elana.health/blog"
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  <p onClick={() => setShowNav(!showNav)}>Blog</p>
                </a>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <a
                  className="link"
                  href="https://www.elana.health/post/what-is-pelvic-wellness-and-why-does-it-matter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p onClick={() => setShowNav(!showNav)}>What is pelvic health?</p>
                </a>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link to="/practitionerSignUp" className="link">
                  <p onClick={() => setShowNav(!showNav)}>Join</p>
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="last-nav-item">
              <MDBNavbarLink>
                <Link to="/practitionerLogin" className="link">
                {user ? <p onClick={() => {
                    setShowNav(!showNav);
                    onLogout()
                  }}>Logout</p>: <p onClick={() => setShowNav(!showNav)}>Login</p>}
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>

      </MDBContainer>
    </MDBNavbar>
  );
};


