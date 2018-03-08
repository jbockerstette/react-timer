import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = props => (
  <div className="display">
    <h1 className="display__time-left">
      {`${props.minutes}:${props.seconds}`}
    </h1>
    <p className="display__end-time">{props.msg}</p>
  </div>
);

Display.defaultProps = {
  minutes: '00',
  seconds: '00',
  msg: 'message goes here!'
};

Display.propTypes = {
  minutes: PropTypes.string,
  seconds: PropTypes.string,
  msg: PropTypes.string
};

export default Display;
