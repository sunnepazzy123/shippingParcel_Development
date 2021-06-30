import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {useDispatch, useSelector} from 'react-redux'
import { listParcels, deleteParcelAction, } from '../actions/parcelsActions'


const PackagesListScreen = ({history  }) => {

  const dispatch = useDispatch()

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteParcelAction(id))
      dispatch(listParcels())
    }
  }

  const {loading, error, parcels} = useSelector(state =>  state.parcelList)
 
  const createShipmentHandler = () => {
    history.push('/admin/sendPackage')
  }



  useEffect(()=>{
    dispatch(listParcels())
  }, [dispatch,  ])

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>List Of Parcels Shipment</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createShipmentHandler}>
            <i className='fas fa-plus'></i> Create Shipment
          </Button>
        </Col>
      </Row>
       
       {loading ? <Loader /> : 
        error ? <Message variant='danger'>{error}</Message>
        :(
        
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>Tracking Code</th>
                <th>Parcel NAME</th>
                <th>Sender Name</th>
                <th>Sender Address</th>
                <th>Reciever Name</th>
                <th>Reciever Address</th>
                <th>Transit Mode</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
            {parcels && parcels.map((parcel)=>  (
              <tr key={parcel._id}>
              <td>{parcel.trackingCode}</td>
              <td>{parcel.parcelName}</td>
              <td>{parcel.senderName}</td>
              <td>{parcel.senderAddress}</td>
              <td>{parcel.recieverName}</td>
              <td>{parcel.recieverAddress}</td>
              <td>{parcel.transit && parcel.transit.mode}</td>
              <td>
                <LinkContainer to={`/admin/parcels/${parcel._id}`}>
                  <Button variant='light' className='btn-sm'>
                    <i className='fas fa-edit'></i>
                  </Button>
                </LinkContainer>
                <Button
                  variant='danger'
                  className='btn-sm'
                  onClick={() => deleteHandler(parcel._id)}
                >
                  <i className='fas fa-trash'></i>
                </Button>
              </td>
            </tr>

            ))}
                
            </tbody>
          </Table>
    
        </>
        ) }
    
    </>
  )
}

export default PackagesListScreen
