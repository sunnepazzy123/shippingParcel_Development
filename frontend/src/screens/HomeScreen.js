import React from 'react'
import CarouselHero from '../components/CarouselHero'
import SearchCode from '../components/SearchCode'
import HomeList from '../components/HomeList'
import { Row, Col } from 'react-bootstrap'



const HomeScreen = () => {
    return (
        <div>
            <Row>
                <Col>
                    <CarouselHero />
                    <SearchCode />
                    <HomeList />
                </Col>
            </Row>
        </div>
    )
}

export default HomeScreen
