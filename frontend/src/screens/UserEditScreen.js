import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import {useDispatch, useSelector } from 'react-redux'
import {getUserDetails, updateUserProfile, updateUserAction} from '../actions/usersActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { USER_UPDATE_RESET } from '../constants/usersConstant'


const UserEditScreen = ({match, history}) => {
    const userId = match.params.id
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  //check the user details
  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userUpdate = useSelector((state) => state.userUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate


  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    }else if(!password || !confirmPassword) {
      setMessage('Fields cannot be empty')
    } else {
      dispatch(updateUserAction({ id: user._id, name, email, password, isAdmin }))    
    }
  }



  useEffect(() => {
    //check if we have a succes update 
    if (successUpdate) {
        dispatch({ type: USER_UPDATE_RESET })  //reset state
        history.push('/admin/userlist')
      } else {      
        if (!user || !user.name || user._id !== userId ) {
            dispatch(getUserDetails(userId))
        } else {
            setName(user.name)
            setEmail(user.email)
            setIsAdmin(user.isAdmin)
        }
    }
    
  }, [dispatch, history, user])

  return (
      <>
    <Link to='/admin/userlist' className='btn btn-light my-3'>
        Go Back
      </Link>
    <Row>
    <Col>
    <FormContainer>
    <h2>Update User</h2>
      {message && <Message variant='danger'>{message}</Message>}
      {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='isadmin'>
              <Form.Check
                type='checkbox'
                label='Is Admin'
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

        <Button type='submit' variant='primary'>
          Update User
        </Button>
     
      </Form>
       )}
    </FormContainer>
       </Col>
       </Row>
       </>
  )
}

export default UserEditScreen
