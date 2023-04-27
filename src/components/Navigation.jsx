import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo1 from '../Assets/Logo1.png'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import css from'../styles/Footer.module.css'
// import css from "../styles/index.module.css"
function Navigation() {
  const [expanded, setExpanded] = useState(false);
  return (
    // style={{border:'none'}}
    <Navbar expanded={expanded} collapseOnSelect expand="lg" style={{background:'#f7ac7f',backgroundImage:"linear-gradient(135deg, #f7ac7f 0%, #ffffff 54%, #98f57f 100%)",padding:"0px",fontWeight:"bold",fontSize:'1.2rem'}}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{border:"none"}}><img src={Logo1} alt="" width={110} height={60}/></Navbar.Brand>
        <Navbar.Toggle className={css.toogle} onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav " >
          <Nav className="me-auto text-black m-auto " >
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/">Home</Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/About">About</Nav.Link>
           {/* <Nav.Link as={Link} to="/District">District</Nav.Link> */}
            <NavDropdown title="District" id="collasible-nav-dropdown" className='' >
              <NavDropdown.Item  onClick={() => setExpanded(false)} as={Link} to="/District/?Garo%20Hills">Garo Hills</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/District/?Jaintia%20Hills">Jaintia Hills</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/District/?East%20Khasi%20Hills">East Khasi Hills</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/District/?Shillong">Shillong</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/ContactForm">Contact</Nav.Link>
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