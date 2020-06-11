import { IMPLEMENT_DISCOUNT_CODE } from './types';

export const disCode = () => {
  return (dispatch) => {
    console.log('here');
    dispatch({
      type: IMPLEMENT_DISCOUNT_CODE,
    });
  };
};
