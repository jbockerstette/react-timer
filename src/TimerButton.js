import React from 'react';
import PropTypes from 'prop-types';
import './TimerButton.css';

const TimerButton = props => (
  <button onClick={props.onClick} className="timer__button">
    {props.children}
  </button>
);

TimerButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default TimerButton;
