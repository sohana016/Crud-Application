import {DATA,ID} from './Action/action';

const initialState = {
 data:[],
 id:null,

};

export const DataReducer = (state = initialState, action) => {
  switch(action.type) {
     case DATA:
       return {
         ...state,
         data:action.payload,
       
       };
       case ID:
        return {
          ...state,
          id:action.payload,
        
        };
  
    default:
      return state;
  }
}
