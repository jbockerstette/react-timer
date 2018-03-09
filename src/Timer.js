import React, { Component } from 'react';
import TimerControls from './TimerControls';
import Display from './Display';
import './Timer.css';

function get2DigitStr(sec) {
  return `${sec < 10 ? `0${sec}` : sec}`;
}

class Timer extends Component {
  constructor(props) {
    super(props);
    this.timerID = 0;
    this.state = {
      secondsRemaining: 0,
      msg: 'Be Back At 00:00'
    };
    this.handleTimerButtonClicked = this.handleTimerButtonClicked.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  getMinutes() {
    const { secondsRemaining } = this.state;
    return Math.floor(secondsRemaining / 60);
  }

  getSeconds() {
    const { secondsRemaining } = this.state;
    const min = this.getMinutes();
    return secondsRemaining - min * 60;
  }

  handleTimerButtonClicked(seconds) {
    const now = new Date();
    const backAt = new Date(now.getTime() + seconds * 1000);
    const msg = `Be Back At ${backAt.getHours()}:${get2DigitStr(
      backAt.getMinutes()
    )}`;
    clearInterval(this.timerID);
    this.timerID = setInterval(this.updateTime, 1000);

    this.setState({ secondsRemaining: seconds, msg });
  }

  updateTime() {
    const { secondsRemaining } = this.state;
    this.setState({ secondsRemaining: secondsRemaining - 1 });
    if (secondsRemaining === 1) {
      clearInterval(this.timerID);
    }
  }

  render() {
    return (
      <div className="timer">
        <TimerControls onTimer={this.handleTimerButtonClicked} />
        <Display
          minutes={`${this.getMinutes()}`}
          seconds={`${get2DigitStr(this.getSeconds())}`}
          msg={this.state.msg}
        />
      </div>
    );
  }
}

export default Timer;
