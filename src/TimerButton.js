import React from 'react';
import './TimerButton.css';

const TimerButton = props => (
  <button className="timer__button">{props.children}</button>
);

export default TimerButton;
