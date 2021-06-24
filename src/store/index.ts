import {createStore, combineReducers} from 'redux';

function todo(state: number | undefined, payload){
  if (state === undefined) return 0;
  return state + 1;
}

// const initState={todo:0}
const reducer = combineReducers({todo});
export const store = createStore(reducer);
export default store;