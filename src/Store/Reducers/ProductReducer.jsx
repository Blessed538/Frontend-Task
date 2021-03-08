import { GETPRODUCT, PUTPRODUCT, TRL } from './../Action/actionTypes';

const initialState = {
  products: [],
  selectedProduct: null,
  trl: null,
  isLoading: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETPRODUCT:
      return {
        ...state,
        isLoading: true,
        products: action.payload.data,
      };
    case PUTPRODUCT:
      return {
        ...state,
        isLoading: true,
        selectedProduct: action.payload.data,
      };
    case TRL:
      return {
        ...state,
        isLoading: true,
        trl: action.payload.data,
      };

    default:
      return state;
  }
};
