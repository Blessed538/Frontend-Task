import { GETPRODUCT, PUTPRODUCT } from './actionTypes';
import { config } from './../../Utils/ApiRequest';
import axios from 'axios';

export const GetProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${config.fetchUrl}/product/${id}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin',
      },
    });
    if (res) {
      console.log(res);
      dispatch({ type: GETPRODUCT, payload: res });
    }
  } catch (error) {}
};

export const ProductUpdate = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${config.fetchUrl}/product/${id}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin',
      },
    });
    if (res) {
      console.log(res);
      dispatch({ type: PUTPRODUCT, payload: res });
    }
  } catch (error) {}
};
