import {combineReducers } from 'redux'

//@import Reducers
// import signUp from '../Reducers/'
import ErrorsReducer from './Errors.Reducers'
import LoginReducer from './login.Reducer'
// import QueryCategoryReducer from './category.query.reducer'
import Storemanagement from './store.management'

export default combineReducers({
    ErrorsReducer,
    LoginReducer,
    // QueryCategoryReducer,
    Storemanagement
})

 