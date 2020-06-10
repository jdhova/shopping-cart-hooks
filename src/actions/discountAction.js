import { IMPLEMENT_DISCOUNT_CODE } from './types';

export const disCode = (code) => {
  return (dispatch) => {
    console.log('here', code);
    dispatch({
      type: IMPLEMENT_DISCOUNT_CODE,
      payload: code,
    });
  };
};
