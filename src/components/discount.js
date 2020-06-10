import React from 'react';
import { disCode } from '../actions/discountAction';
import { connect } from 'react-redux';

const discount = (props) => {
  return (
    <div>
      <div>
        <h4>Enter Discount Code</h4>
        {/* <form action='/action_page.php'></form> */}
        {/* <form onsubmit='myFunction()'> */}
        <form onSubmit={() => props.disCode('code')}>
          <label htmlFor='dcode'>Discount Code:</label>
          <input type='text' id='dcode' name='dcode' />
          <br />
          <br />
          <input type='submit' defaultValue='Submit' />
        </form>
      </div>
    </div>
  );
};

export default connect(null, { disCode })(discount);
