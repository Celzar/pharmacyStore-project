import {
    QUERY_CATEGORY
} from '../../Types/index'


import Axios from 'axios'

export const query_category = () => dispatch => {
    return Axios.get('http://localhost:8000/queryallcategory')
        .then(res => {
            if (res.data.success) {
                // console.log(typeof res.data.category[0])
                dispatch({ type: QUERY_CATEGORY, payload: res.data.category })
            }
        }).catch((err)=>console.log(err))
}