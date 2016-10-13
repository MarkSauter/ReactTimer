var React = require('react');
var PropTypes = React.PropTypes;
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

class Countdown extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds
    });
  }

  render () {
    var {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
        <Controls/>
      </div>
    );
  }

};

module.exports = Countdown;
