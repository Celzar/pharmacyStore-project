import {
    QUERY_INVENTORY
} from '../../Types/index'

import Axios from 'axios'

export const query_inventory = () => dispatch => {
    return Axios.get('http://localhost:8000/inventory/query')
        .then(res => {
            if (res.data.success) {
                dispatch({ type: QUERY_INVENTORY, payload: res.data.inventory })
            }
        }).catch((err) => console.log(err))
}