import React from 'react';
import PropTypes from 'prop-types';

class TimerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onSubmit(this.state.value);
        }}
        id="custom"
        name="customForm"
      >
        <input
          onChange={this.handleChange}
          type="text"
          name="minutes"
          placeholder="Enter Minutes"
        />
      </form>
    );
  }
}

TimerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default TimerInput;
