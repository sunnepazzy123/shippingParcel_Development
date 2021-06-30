import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {


    const logoutHandler = ()=>{
        
        alert("are you sure")
    }


    return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>CourierService</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/searchTracking'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Tracking
                </Nav.Link>
              </LinkContainer>
                <NavDropdown  id='username'>
                  <LinkContainer to='/services'>
                    <NavDropdown.Item>Services</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/profile'>
                    <NavDropdown.Item></NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer> 
                <LinkContainer to='/aboutUs'>
                    <Nav.Link>
                    <i className='fas fa-user'></i> About Us
                  </Nav.Link>
                  </LinkContainer>
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/packageList'>
                    <NavDropdown.Item>Packages</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/sendPackage'>
                    <NavDropdown.Item>Send Package</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
 
    )
}

export default Header
