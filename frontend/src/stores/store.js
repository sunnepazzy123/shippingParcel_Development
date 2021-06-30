import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    parcelListReducer,
} from "../reducers/parcelsReducers"
import {userListReducer, userRegisterReducer, userLoginReducer, userUpdateReducer,
    userDetailsReducer, userDeleteReducer, userUpdateProfileReducer} from "../reducers/usersReducers"
import {searchTrackingCodeReducer} from "../reducers/searchReducers"
import {parcelCreateReducer, parcelDeleteReducer, parcelEditReducer, parcelDetailsReducer} from '../reducers/parcelsReducers'


const reducers = combineReducers({
    parcelList: parcelListReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userUpdate: userUpdateReducer,
    searchTrackingCode: searchTrackingCodeReducer,
    registerUser: userRegisterReducer,
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    parcelCreate: parcelCreateReducer,
    parcelDelete: parcelDeleteReducer,
    parcelEdit: parcelEditReducer,
    parcelDetails: parcelDetailsReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null


const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware))  )


export default store