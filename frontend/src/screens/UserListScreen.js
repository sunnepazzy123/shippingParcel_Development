import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useDispatch, useSelector} from "react-redux"
import {listUsers, deleteUserAction } from '../actions/usersActions'


const UserListScreen = ({history  }) => {



    const dispatch = useDispatch()
    const userList  = useSelector((state)=> state.userList)
    const {loading, users, success, error } = userList


  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteUserAction(id))
    }
  }



  const createShipmentHandler = () => {
      history.push("/admin/sendPackage")
  }



  useEffect(() => {


      dispatch(listUsers())
  


  }, [])
  


  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>List Of Users</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createShipmentHandler}>
            <i className='fas fa-plus'></i> Create User
          </Button>
        </Col>
      </Row>
        <>
        {loading ? <Loader /> :

        error ? <Message variant='danger' >{error}</Message> :
        (<>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Role</th>
                <th>Address</th>
                <th>Email</th>
                <th>Subscribe</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user)=> {
                 return (
                    <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>21/1 Edwardaw Demboskiego</td>
                    <td>{user.email}</td>
                    <td>{}</td>
                    <td>
                      <LinkContainer to={`/admin/users/${user._id}`}>
                        <Button variant='light' className='btn-sm'>
                          <i className='fas fa-edit'></i>
                        </Button>
                      </LinkContainer>
                      <Button
                        variant='danger'
                        className='btn-sm'
                        onClick={() => deleteHandler(user._id)}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </td>
                  </tr>
                 )
             })}
               
            </tbody>
          </Table>

        </>
        )
        
        }
        
    
        </>
    
    </>
  )
}

export default UserListScreen
