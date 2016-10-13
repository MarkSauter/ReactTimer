var React = require('react');
var PropTypes = React.PropTypes;
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Clock = require('Clock');

class Countdown extends React.Component {

  render () {
    return (
      <div>
        <Clock totalSeconds={129}/>
        <CountdownForm/>
        <Controls/>
      </div>
    );
  }

};

module.exports = Countdown;
