

import {
    ERRORS,
    SET_CURRENT_USER
} from '../../Types/index'

import Axios from 'axios'
import jwt_decode from 'jwt-decode'
// @ import utility
import { setAuthToken } from '../../../utils/axios.Config'


//@Login Action
export const login = (userData, remember) => (dispatch) => {
    return Axios.post('http://localhost:8000/login', userData)
        .then((res) => {
            //@ if check remember me(checkbox) save token to local storage
            if (remember === 'remember') {
                const { token } = res.data
                localStorage.setItem('jwtToken', token)
                //@ Set token to Auth header
                setAuthToken(token)
                // Decode token to get user data then dispatch it as payload 
                const decoded = jwt_decode(token)
                //set current user data
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: decoded
                })
            }else{
                const { token } = res.data
                 //@ Set token to Auth header
                 setAuthToken(token)
                 // Decode token to get user data then dispatch it as payload 
                 const decoded = jwt_decode(token)
                 //set current user data
                 dispatch({
                     type: SET_CURRENT_USER,
                     payload: decoded
                 })
            }
        })
        .catch(err => {
            dispatch({
                type: ERRORS,
                payload: err.response.data
            })
        })
}