import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Counter = (props) => {
  return (
    <div>
      <span>Current Count:</span>
      <span>{props.count}</span>
    </div>
  );
};

const mapStateToProps = state => (
  {
    count: state.count,
  }
);

export default withRouter(connect(mapStateToProps, null)(Counter));
