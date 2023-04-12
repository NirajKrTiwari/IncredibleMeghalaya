import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo1 from '../Assets/Logo1.png'
import {Link} from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll";

// import css from "../styles/index.module.css"
function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{background:'#FAACA8',backgroundImage:" linear-gradient(19deg, #e9cac9 0%, #DDD6F3 100%)",padding:"0px"}}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{border:"none"}}><img src={Logo1} alt="" width={110} height={60}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto text-black">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link  as={Link} to="/About">About</Nav.Link>
           {/* <Nav.Link as={Link} to="/District">District</Nav.Link> */}
            <NavDropdown title="District" id="collasible-nav-dropdown">
              <NavDropdown.Item  as={Link} to="/District/?Garo Hills">Garo Hills</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/District/?Jaintia Hills">Jaintia Hills</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/District/?East Khasi Hills">East Khasi Hills</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/District/?Shillong">Shillong</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;