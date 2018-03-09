import React, { Component } from 'react';
import TimerControls from './TimerControls';
import Display from './Display';
import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.timerID = 0;
    this.state = {
      secondsRemaining: 0
    };
    this.handleTimerButtonClicked = this.handleTimerButtonClicked.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.getSecondsStr = this.getSecondsStr.bind(this);
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

  getSecondsStr() {
    const sec = this.getSeconds();
    return `${sec < 10 ? `0${sec}` : sec}`;
  }

  getMessage() {
    const min = this.getMinutes();
    const sec = this.getSecondsStr();
    return `Be Back At ${min}:${sec}`;
  }

  handleTimerButtonClicked(seconds) {
    this.setState({ secondsRemaining: seconds });
    clearInterval(this.timerID);
    this.timerID = setInterval(this.updateTime, 1000);
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
          seconds={`${this.getSecondsStr()}`}
          msg={this.getMessage()}
        />
      </div>
    );
  }
}

export default Timer;
