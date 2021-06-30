import React from 'react'
import {Card, CardGroup} from 'react-bootstrap'

const HomeList = () => {
    return (
        <div className="mt-4">
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://www.fedex.com/content/dam/fedex/eu-europe/images/fy21_shutterstock.jpg" />
    <Card.Body>
      <Card.Title><h4>Cross Borders with Confidence</h4></Card.Title>
      <Card.Text>
      Find accurate Harmonized Tariff Codes,
      estimates of your duties and taxes, and notification if you’re shipping to a denied party.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.fedex.com/content/dam/fedex/us-united-states/Small-Business-Center/images/2020/Q2/b_394224863_20171204_MK_3878_188896084_1790157592_291645044.jpg" />
    <Card.Body>
      <Card.Title><h4>Find peace of mind with the details.</h4></Card.Title>
      <Card.Text>
        UPS tracking solutions show the progress of your shipment every step of the way, across town or around the world.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.fedex.com/content/dam/fedex/eu-europe/images/727x463_EUVAT21.jpg" />
    <Card.Body>
      <Card.Title><h4>Ship Just a Few Times a Week? No Problem.</h4></Card.Title>
      <Card.Text>
        We took the guesswork out, and put the easy in.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
    )
}

export default HomeList
