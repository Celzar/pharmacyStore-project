// @ import Types
import { ERRORS } from '../Types/index'


const initialState = {
  
}



export default (state = initialState, action) => {
    switch (action.type) {
       
        case ERRORS: return  action.payload 

        default:
            return state
    }
}