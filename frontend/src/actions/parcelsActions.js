import axios from "axios"
import {
    PARCELS_LIST_FAIL,
    PARCELS_LIST_SUCCESS,
    PARCELS_LIST_REQUEST,
    PARCEL_CREATE_SUCCESS,
    PARCEL_CREATE_REQUEST,
    PARCEL_CREATE_FAIL,
    PARCEL_CREATE_RESET,
    PARCEL_DELETE_FAIL,
    PARCEL_DELETE_SUCCESS,
    PARCEL_DELETE_REQUEST,
    PARCEL_DETAILS_REQUEST,
    PARCEL_DETAILS_SUCCESS,
    PARCEL_DETAILS_FAIL,
    PARCEL_EDIT_SUCCESS,
    PARCEL_EDIT_REQUEST,
    PARCEL_EDIT_FAIL
 } from "../constants/parcelsConstant"

export const listParcels = () => async (
    dispatch
  ) => {
    try {
      dispatch({ type: PARCELS_LIST_REQUEST })
  
      
      const { data } = await axios.get(`/api/parcels`)
  
      dispatch({
        type: PARCELS_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PARCELS_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }


  export const createParcelAction = (parcelInterface) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PARCEL_CREATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
    
      const { data } = await axios.post(`/api/parcels`, {parcelInterface}, config)
      // console.log(data)
  
      dispatch({
        type: PARCEL_CREATE_SUCCESS,
        payload: data,
      })

    
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        // dispatch(logout())
      }
      dispatch({
        type: PARCEL_CREATE_FAIL,
        payload: message,
      })
    }
  }

  export const updateParcelAction = (parcelInterface) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PARCEL_EDIT_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      console.log(parcelInterface)
  
      const { data } = await axios.put(
        `/api/parcels/${parcelInterface._id}`,
        {parcelInterface},
        config
      )
  
      dispatch({
        type: PARCEL_EDIT_SUCCESS,
        payload: data,
      })
      dispatch({ type: PARCEL_DETAILS_SUCCESS, payload: data })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        // dispatch(logout())
      }
      dispatch({
        type: PARCEL_EDIT_FAIL,
        payload: message,
      })
    }
  }

  
  export const parcelDetailsAction = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PARCEL_DETAILS_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
      console.log("from action=>", id)
    
      const { data } = await axios.get(`/api/parcels/${id}`, config)
    
      dispatch({
        type: PARCEL_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        // dispatch(logout())
      }
      dispatch({
        type: PARCEL_DETAILS_FAIL,
        payload: message,
      })
    }
  }
  export const deleteParcelAction = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PARCEL_DELETE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
    
      const { data } = await axios.delete(`/api/parcels/${id}`, config)
      console.log(data)
  
      dispatch({
        type: PARCEL_DELETE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        // dispatch(logout())
      }
      dispatch({
        type: PARCEL_DELETE_FAIL,
        payload: message,
      })
    }
  }

