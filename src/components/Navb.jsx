import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Nav.css'




function Navb() {
  return (
    <div>
      <div className='header'>
        <Navbar className="topnav">
          <Container style={{ width: '100%' }}>
            <Navbar.Brand >
              <img
                src="icon.jpg"
                width="45"
                height="45"
                className="d-inline-block align-top imgposition App-logo"
                alt="tpbazar logo"
              />
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text style={{ color: 'white' }}>
                Welcome : {"  "}
              </Navbar.Text>
              <NavDropdown title="Rakesh" id="basic-nav-dropdown" style={{ color: 'white' }}>
                <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#"> Edit</NavDropdown.Item>
                <NavDropdown.Item href="#">Logout</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default Navb