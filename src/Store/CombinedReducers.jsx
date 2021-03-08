import { combineReducers } from 'redux';
import { productReducer } from './Reducers/ProductReducer';

export default combineReducers({
  product: productReducer,
});
