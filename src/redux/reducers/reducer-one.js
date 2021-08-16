import {
INC,
DEC,
RESET,
} from '../action-types'

const initialState = {
   counter:0
};

const reducer = (state = initialState, action) => {
   switch(action.type) {
      case INC: {
         return {
            ...state,counter: state.counter + 1
         }
      }
      case DEC: {
         return {
            ...state,counter: state.counter - 1
         }
      }
      case RESET: {
         return {
            ...state,counter: 0
         }
      }
      default:
         return state
   }

};
export default reducer