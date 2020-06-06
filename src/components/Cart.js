import React from 'react';
import { connect } from 'react-redux';

const Cart = (props) => {
  console.log('here', props.cartProps);
  return (
    <div>
      <h4>cart here</h4>
      {/* <h4>{props.cartProps}</h4> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.basketState,
});

export default connect(mapStateToProps)(Cart);
