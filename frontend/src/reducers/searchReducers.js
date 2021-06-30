import {
    SEARCH_TRACKING_FAIL,
    SEARCH_TRACKING_SUCCESS,
    SEARCH_TRACKING_REQUEST
} from "../constants/searchConstants"


export const searchTrackingCodeReducer = (state = {}, action) => {
    switch (action.type) {
      case SEARCH_TRACKING_REQUEST:
        return { loading: true }
      case SEARCH_TRACKING_SUCCESS:
        return { loading: false, searchTracking: action.payload }
      case SEARCH_TRACKING_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }