import axios from "axios"
import {
    SEARCH_TRACKING_FAIL,
    SEARCH_TRACKING_SUCCESS,
    SEARCH_TRACKING_REQUEST
 } from "../constants/searchConstants"

export const searchTrackingActions = (trackingCode) => async (
    dispatch
  ) => {
    try {
      dispatch({ type: SEARCH_TRACKING_REQUEST })
  
      const { data } = await axios.post(`/api/parcels/searchTracking`, {trackingCode} )

      dispatch({
        type: SEARCH_TRACKING_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: SEARCH_TRACKING_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }