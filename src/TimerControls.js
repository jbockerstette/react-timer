import React from 'react';
import TimerButton from './TimerButton';
import './TimerControls.css';

const TimerControls = () => (
  <div className="timer__controls">
    <TimerButton>20 SECS</TimerButton>
    <TimerButton>WORK 5</TimerButton>
    <TimerButton>QUICK 15</TimerButton>
    <TimerButton>SNACK 20</TimerButton>
    <TimerButton>LUNCH BREAK</TimerButton>
    <form id="custom" name="customForm">
      <input type="text" name="minutes" placeholder="Enter Minutes" />
    </form>
  </div>
);

export default TimerControls;
