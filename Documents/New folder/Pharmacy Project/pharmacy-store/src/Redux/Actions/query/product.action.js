import {
    QUERY_PRODUCT
} from '../../Types/index'

import Axios from 'axios'

export const query_product = () => dispatch => {
    return Axios.get('http://localhost:8000/products/query')
        .then(res => {
            console.log(res.data)
            if (res.data.success) {
                dispatch({ type: QUERY_PRODUCT, payload: res.data.products })
            }
        }).catch((err) => console.log(err))
}