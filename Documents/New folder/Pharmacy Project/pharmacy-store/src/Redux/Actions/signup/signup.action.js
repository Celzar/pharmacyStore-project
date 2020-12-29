
import {
    ERRORS,
} from '../../Types/index'

// import libraries

import Axios from 'axios'


//@Signup for normal users
export const signUp = (userData, history) => dispatch => {
    return Axios.post('http://localhost:8000/signup', userData)
        .then((res) => {
            // if (res.data.payload) {
            //     dispatch({ type: SIGNUP, payload: res.data.payload })
            // }
            if (res.data.success) {

                alert('add new user successfully')

                return history.push('/login')
            }
        })
        .catch((err) => {

            dispatch({ type: ERRORS, payload: err.response.data })
        })
}
