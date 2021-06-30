import React from 'react'
import {Card} from 'react-bootstrap'
import Message from '../components/Message'

const ParcelTrackInfo = ({searchTracking}) => {

    const {msg} = searchTracking
  
    return (
        <div>
     {msg ? <Message variant='danger' >No Parcel Found</Message> : (
  <Card border="info" style={{ width: '24rem' }}>
    <Card.Header>Parcel Information</Card.Header>
    <Card.Body>
      <Card.Title>Parcel Name: {searchTracking.parcelName}</Card.Title>
      <Card.Text>Sender Name: {searchTracking.senderName}</Card.Text>
      <Card.Text>Sender Address: {searchTracking.senderAddress}</Card.Text>
      <Card.Text>Reciever Name: {searchTracking.recieverName}</Card.Text>
      <Card.Text>Reciever Address: {searchTracking.recieverAddress}</Card.Text>
      <Card.Text>Transit Mode: {searchTracking.transit.mode}</Card.Text>
      <Card.Text>Transit Address: {searchTracking.transit.transitAddress}</Card.Text>
      <Card.Text>Departure Time: {searchTracking.departureTime}</Card.Text>
      <Card.Text>Arrival Time: {searchTracking.arrivalTime}</Card.Text>
    </Card.Body>
  </Card>
        )}
 </div>
    )
}

export default ParcelTrackInfo
