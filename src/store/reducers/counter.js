import { DECREASE, INCREASE } from "../types/counter";


const initialState = {
   counter: 0,
}

export const counterReducer = (state = initialState, action) => {
   switch (action.type) {
      case INCREASE:
         return {
            ...state,
            counter: action.payload
         }
      case DECREASE:
         return {
            ...state,
            counter: action.payload
         }
      default:
         return state;
   }
}