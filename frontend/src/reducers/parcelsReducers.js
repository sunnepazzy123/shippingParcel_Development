import {
    PARCELS_LIST_FAIL,
    PARCELS_LIST_SUCCESS,
    PARCELS_LIST_REQUEST,
    PARCEL_CREATE_REQUEST,
    PARCEL_CREATE_SUCCESS,
    PARCEL_CREATE_FAIL,
    PARCEL_CREATE_RESET,
    PARCEL_DELETE_FAIL,
    PARCEL_DELETE_SUCCESS,
    PARCEL_DELETE_REQUEST,
    PARCEL_EDIT_REQUEST,
    PARCEL_EDIT_SUCCESS,
    PARCEL_EDIT_FAIL,
    PARCEL_EDIT_RESET,
    PARCEL_DETAILS_REQUEST,
    PARCEL_DETAILS_SUCCESS,
    PARCEL_DETAILS_FAIL,

} from "../constants/parcelsConstant"


export const parcelListReducer = (state = {}, action) => {
    switch (action.type) {
      case PARCELS_LIST_REQUEST:
        return { loading: true }
      case PARCELS_LIST_SUCCESS:
        return { loading: false, parcels: action.payload }
      case PARCELS_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }


  export const parcelCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PARCEL_CREATE_REQUEST:
        return { loading: true }
      case PARCEL_CREATE_SUCCESS:
        return { loading: false, parcel: action.payload, success: true, }
      case PARCEL_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case PARCEL_CREATE_RESET: 
        return {}
      default:
        return state
    }
  }

  export const parcelEditReducer = (state = {}, action) => {
    switch (action.type) {
      case PARCEL_EDIT_REQUEST:
        return { loading: true }
      case PARCEL_EDIT_SUCCESS:
        return { loading: false, parcel: action.payload, success: true, }
      case PARCEL_EDIT_FAIL:
        return { loading: false, error: action.payload }
      case PARCEL_EDIT_RESET:
        return {}
      default:
        return state
    }
  }


  export const parcelDetailsReducer = (state = {}, action) => {
    switch (action.type) {
      case PARCEL_DETAILS_REQUEST:
        return { loading: true }
      case PARCEL_DETAILS_SUCCESS:
        return { loading: false, parcel: action.payload, success: true, }
      case PARCEL_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }


  export const parcelDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case PARCEL_DELETE_REQUEST:
        return { loading: true }
      case PARCEL_DELETE_SUCCESS:
        return { loading: false, parcel: action.payload }
      case PARCEL_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }