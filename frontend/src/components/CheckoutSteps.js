import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4,  }) => {
  
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/'>
            <Nav.Link>Information</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Search Code</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/inTransit'>
            <Nav.Link>Held</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>InTransit</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/'>
            <Nav.Link>Destination</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Destination</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
