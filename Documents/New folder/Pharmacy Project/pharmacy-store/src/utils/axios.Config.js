import Axios from 'axios'


// set authorization token
export const setAuthToken = (token) => {
    if (token) {
        // Apply authorization token to every request if logged in
        Axios.defaults.headers.common['Authorization'] = token
    } else {
        // Delete auth header
        delete Axios.defaults.headers.common['Authorization']
    }
}