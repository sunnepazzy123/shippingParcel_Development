import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import {createParcelAction, parcelDetailsAction, updateParcelAction} from '../actions/parcelsActions'
import {useDispatch, useSelector} from 'react-redux'
import { randomBytes } from 'crypto'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {PARCEL_EDIT_RESET} from '../constants/parcelsConstant'




const EditPackageScreen = ({match, history }) => {

  const parcelId = match.params.id
  const [parcelName, setParcelName] = useState('')
  const [senderName, setSenderName] = useState('')
  const [senderAddress, setSenderAddress] = useState('')
  const [recieverName, setRecieverName] = useState('')
  const [recieverAddress, setRecieverAddress] = useState('')
  const [accountType, setAccountType] = useState('')
  const [mode, setMode] = useState('')
  const [arrivalTime, setArrivalTime] = useState('')
  const [arrivalDate, setArrivalDate] = useState('')
  const [departureTime, setDepartureTime] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [accountNumberAddress, setAccountNumberAddress] = useState('')
  const [transitAddress, setTransitAddress] = useState('')
  const [accountName, setAccountName] = useState('')
  const [instituteName, setInstituteName] = useState('')
  const [transitDate, setTransitDate] = useState('')

  const trackingCode = randomBytes(3).toString('hex')

  //get list of parcel from the reducer
  const parcelDetails = useSelector((state) => state.parcelDetails)
  const { loading, error, parcel } = parcelDetails
  //get updated Parcel from the reducer
  const parcelEdit = useSelector((state) => state.parcelEdit)
  const {loading: loadingUpdate,
      success: successUpdate,
      error: errorUpdate
   }  = parcelEdit


  const dispatch = useDispatch()
 

  useEffect(()=>{

    if(successUpdate){
      dispatch({ type: PARCEL_EDIT_RESET })
      history.push('/admin/packageList')
    }else{

    if(!parcel || parcel._id !== parcelId){
        dispatch(parcelDetailsAction(parcelId))
    }else{
       
            setParcelName(parcel.parcelName)
            setSenderName(parcel.senderName)
            setSenderAddress(parcel.senderAddress)
            setRecieverAddress(parcel.recieverAddress)
            setRecieverName(parcel.recieverName)
            setTransitAddress(parcel.transit.transitAddress )
            setTransitDate(parcel.transit.transitDate)
            setMode(parcel.transit.mode)
            setArrivalTime(parcel.transit.arrival.time)
            setArrivalDate(parcel.transit.arrival.date)
            setDepartureTime(parcel.transit.departure.time)
            setDepartureDate(parcel.transit.departure.date)
            setAccountName(parcel.accountDetail.accountName)
            setAccountNumberAddress(parcel.accountDetail.accountNumberAddress)
            setMode(parcel.transit.mode)
            setAccountType(parcel.accountDetail.accountType)
            setInstituteName(parcel.accountDetail.instituteName)

    }
    

  }
    
}, [dispatch, parcelId, parcel, successUpdate, history])


const parcelInterface = {
  _id: parcelId,
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




const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateParcelAction(parcelInterface))
    history.push('/admin/packageList')
  }

  return (
    <>
     <Link to='/admin/packageList' className='btn btn-light my-3'>
        Go Back
      </Link>
    {loading ? <Loader /> : 
     error ? <Message variant="danger">{error}</Message> : 
     (
      <FormContainer>
      <h1>Update Package</h1>
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
            placeholder='Enter Transit Time'
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
          <Form.Control as="select" onChange={(e) => setAccountType(e.target.value)} value={accountType} >
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
          <Form.Control as="select" onChange={(e)=> setMode(e.target.value)}  value={mode}>
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
          Update Package
        </Button>
      </Form>
    </FormContainer>

     )
    }
   
   
   </>
  )
}

export default EditPackageScreen
