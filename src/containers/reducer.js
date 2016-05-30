import {handleActions} from 'redux-actions';
import {actionNames} from './action';

const initialState = {
  number:1,
};

const appReaducer = handleActions({
  [actionNames.ADD_ONE]: (state, action) =>{
    const info = action.payload;
    return Object.assign({}, state, {
      number:info
    })
  },
  [actionNames.FIND_DATE]: {
    next(state, action) {
      const {result} = action.payload;
      return Object.assign({}, state, {
        number: state.number,
        result,
      })
    },
    throw(state, action) {
      const {result}  = action.payload;
      return Object.assign({}, state, {
        number: state.number,
        result,
      })
    }
  },


}, initialState);

export default appReaducer;
