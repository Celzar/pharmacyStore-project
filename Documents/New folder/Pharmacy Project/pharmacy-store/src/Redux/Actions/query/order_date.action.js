import {
    QUERY_ORDER_DATE
} from '../../Types/index'

import Axios from 'axios'

export const query_order_date = () => dispatch => {
    return Axios.get('http://localhost:8000/order/date/query')
        .then(res => {
            if (res.data.success) {
                dispatch({ type: QUERY_ORDER_DATE, payload: res.data.date })
            }
        }).catch((err) => console.log(err))
}