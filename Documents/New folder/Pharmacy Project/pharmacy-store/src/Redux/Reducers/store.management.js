import {
    QUERY_PRODUCT,
    QUERY_CATEGORY,
    QUERY_INVENTORY,
    QUERY_ORDERS,
    QUERY_ORDER_DATE
} from '../Types/index'



let initialState = {
    product: [],
    category: [],
    order_date: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case QUERY_PRODUCT: return { ...state, product: action.payload }

        case QUERY_CATEGORY: return { ...state, category: action.payload }

        case QUERY_ORDER_DATE: return { ...state, order_date: action.payload }
        
        

        default: return state

    }
}