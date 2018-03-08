import React from 'react';
import TimerControls from './TimerControls';
import Display from './Display';
import './Timer.css';

const Timer = () => (
  <div className="timer">
    <TimerControls />
    <Display />
  </div>
);

export default Timer;
