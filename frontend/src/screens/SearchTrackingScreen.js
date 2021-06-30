import React, {useEffect, useState} from 'react'
import SearchCode from '../components/SearchCode'
import CheckoutSteps from '../components/CheckoutSteps'
import ParcelTrackInfo from '../components/ParcelTrackInfo'
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import Loader from '../components/Loader'


const SearchTrackingScreen = () => {

    const {searchTracking, loading} = useSelector(state => state.searchTrackingCode)

    return (
        <div>
           
        <SearchCode /> 
        <CheckoutSteps step1 step2 step3 /> 
        { loading &&  <Loader />  }

        {searchTracking && 
        
            <ParcelTrackInfo searchTracking={searchTracking} /> 

        }
        </div>
    )
}

export default SearchTrackingScreen
