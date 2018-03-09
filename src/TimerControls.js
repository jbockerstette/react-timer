import React from 'react';
import PropTypes from 'prop-types';
import TimerButton from './TimerButton';
import './TimerControls.css';
import TimerInput from './TimerInput';

const TimerControls = props => {
  const { onTimer } = props;
  return (
    <div className="timer__controls">
      <TimerButton onClick={() => onTimer(20)}>20 SECS</TimerButton>
      <TimerButton onClick={() => onTimer(5 * 60)}>WORK 5</TimerButton>
      <TimerButton onClick={() => onTimer(15 * 60)}>QUICK 15</TimerButton>
      <TimerButton onClick={() => onTimer(20 * 60)}>SNACK 20</TimerButton>
      <TimerButton onClick={() => onTimer(60 * 60)}>LUNCH BREAK</TimerButton>
      <TimerInput onSubmit={value => onTimer(60 * value)} />
    </div>
  );
};

TimerControls.propTypes = {
  onTimer: PropTypes.func.isRequired
};

export default TimerControls;
