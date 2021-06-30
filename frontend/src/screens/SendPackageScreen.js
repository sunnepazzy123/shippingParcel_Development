import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import {createParcelAction, listParcels} from '../actions/parcelsActions'
import { randomBytes } from 'crypto'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'


const SendPackageScreen = ({redirect, history }) => {
  const [parcelName, setParcelName] = useState('')
  const [senderName, setSenderName] = useState('')
  const [senderAddress, setSenderAddress] = useState('')
  const [recieverName, setRecieverName] = useState('')
  const [recieverAddress, setRecieverAddress] = useState('')
  const [accountType, setAccountType] = useState('')
  const [mode, setMode] = useState('')
  const [arrivalDate, setArrivalDate] = useState('')
  const [arrivalTime, setArrivalTime] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [departureTime, setDepartureTime] = useState('')
  const [accountNumberAddress, setAccountNumberAddress] = useState('')
  const [transitAddress, setTransitAddress] = useState('')
  const [accountName, setAccountName] = useState('')
  const [instituteName, setInstituteName] = useState('')
  const [transitDate, setTransitDate] = useState('')

  const trackingCode = randomBytes(3).toString('hex')

 

  const { parcel, loading, success, error } = useSelector(state => state.parcelCreate)

  
 
  const parcelInterface = {
    parcelName,senderName,senderAddress,recieverAddress,recieverName,trackingCode,
    accountDetail: {
      accountName,accountNumberAddress,accountType,instituteName
    },
    transit: {
      transitAddress,transitDate,mode,
      departure: {
        date: departureDate,
        time: departureTime
      },
      arrival: {
        date: arrivalDate,
        time: arrivalTime
      }
    },
   
  }

  



  const dispatch = useDispatch()

  useEffect(()=>{

    if(success){
       dispatch(listParcels())
    }
    
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createParcelAction(parcelInterface))
    history.push('/admin/packagelist')
  }

  return (

    <FormContainer>
      <h1>Create Package</h1>
      {loading && <Loader />}
      {error && <Message variant='danger'>{error}</Message>}
      <Form onSubmit={submitHandler}>
        <Row>  
        <div>
          <Col className="d-flex">
          <Form.Group controlId='senderName' className='mr-3'>
          <Form.Label>Parcel Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Parcel Name'
            value={parcelName}
            onChange={(e) => setParcelName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='recieverAddress'>
          <Form.Label>Enter Sender Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Sender Address'
            value={senderAddress}
            onChange={(e) => setSenderAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
          </Col>
          </div>
          <div>
          <Col className="d-flex">
          <Form.Group controlId='senderName' className='mr-3'>
          <Form.Label>Sender Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Sender Name'
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
          ></Form.Control>
           </Form.Group>

        <Form.Group controlId='recieverAddress'>
          <Form.Label>Enter Reciever Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Reciever Address'
            value={recieverAddress}
            onChange={(e) => setRecieverAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='recieverAddress' className='mx-2'>
          <Form.Label>Enter Reciever Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Reciever Name'
            value={recieverName}
            onChange={(e) => setRecieverName(e.target.value)}
          ></Form.Control>
        </Form.Group>
          </Col>
          </div>
          <div className="">       
          <Col className="d-flex">
            <Form.Group controlId='recieverAddress' className="mr-3">
          <Form.Label>Transit Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Transit Address'
            value={transitAddress}
            onChange={(e) => setTransitAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
{/* 
        <Row> */}
        <Form.Group controlId='recieverAddress' className="">
          <Form.Label>Transit Date</Form.Label>
          <Form.Control
            type='date'
            placeholder='Enter Transit Date'
            value={transitDate}
            onChange={(e) => setTransitDate(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {/* </Row> */}

  
            </Col>
          </div>
          <div className="">
          <Row>
          <Col className="d-flex">
          <Form.Group controlId='recieverAddress' className="mr-3">
          <Form.Label>Arrival Date</Form.Label>
          <Form.Control
            type='date'
            placeholder='Enter Arrival Date'
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='recieverAddress' className="">
          <Form.Label>Departure Date</Form.Label>
          <Form.Control
            type='date'
            placeholder='Enter Departure Date'
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          ></Form.Control>
        </Form.Group>
            </Col>
            </Row>
          </div>

          <div className="">
          <Row>
          <Col className="d-flex">
          <Form.Group controlId='recieverAddress' className="mr-3">
          <Form.Label>Arrival Time</Form.Label>
          <Form.Control
            type='time'
            placeholder='Enter Arrival Time'
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='recieverAddress' className="">
          <Form.Label>Departure Time</Form.Label>
          <Form.Control
            type='time'
            placeholder='Enter Departure Time'
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
          ></Form.Control>
        </Form.Group>
            </Col>
            </Row>
          </div>
          <hr />
          <div className="">
          <Col className="d-flex">
          <Form.Group controlId='recieverAddress' className="mr-3">
          <Form.Label>Account Number/Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Number/Address'
            value={accountNumberAddress}
            onChange={(e) => setAccountNumberAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1" className="">
          <Form.Label>Account Type</Form.Label>
          <Form.Control as="select" onChange={(e) => setAccountType(e.target.value)} >
           <option value="">Select</option>
            <option value="bank">Bank</option>
            <option value="crypto">CryptoCurrency</option>
          </Form.Control>
            </Form.Group>
            </Col>
          </div>
          <div className="">
          <Col className="d-flex">
          <Form.Group controlId='recieverAddress' className="mr-3">
          <Form.Label>Account Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Account Name'
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='recieverAddress' className="mr-3">
          <Form.Label>Institute Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Institute Name'
            value={instituteName}
            onChange={(e) => setInstituteName(e.target.value)}
          ></Form.Control>
        </Form.Group>
            </Col>     
          </div>
          <div className="">
            <Col className="d-flex">
            <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Mode</Form.Label>
          <Form.Control as="select" onChange={(e)=> setMode(e.target.value)} >
           <option type="text" value="">Select</option>
            <option type="text" value="inTransit">InTransit</option>
            <option type="text" value="Held">Held</option>
            <option type="text" value="Arrival">Arrival</option>
            <option type="text" value="Checking">Checking</option>
          </Form.Control>
            </Form.Group>
            </Col>
          </div>

        </Row>
            
        <Button type='submit' variant='primary'>
          Send Shipment
        </Button>
      </Form>
    </FormContainer>
  )
}

export default SendPackageScreen
