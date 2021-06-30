import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import {useDispatch} from 'react-redux'
import {searchTrackingActions, } from "../actions/searchAcions"
import Message from '../components/Message'


const SearchCode = ({redirect, history }) => {
  const [searchCode, setSearchCode] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
 
  const submitHandler = async (e)=>{
      e.preventDefault()
      setSearchCode(searchCode)
      if(searchCode) {
        dispatch(searchTrackingActions(searchCode))
        setSearchCode("")  
        setMessage(null)   
      }else{
        setMessage("Enter Your Tracking Code")
      }
  }

  return (
    <FormContainer>
      <h1>Track a package </h1>  
      <Form onSubmit={submitHandler}>
        {message && <Message variant='danger' >{message}</Message> }
        <Form.Group controlId='searchCode'>    
          <Form.Label>Enter Tracking Code</Form.Label>  
          <Form.Control
            type='text'
            placeholder='Enter Tracking Code'
            value={searchCode}
            onChange={(e) => setSearchCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Track
        </Button>
      </Form>  
    </FormContainer>
  )
}

export default SearchCode
