var React = require('react');
var PropTypes = React.PropTypes;
var Clock = require('Clock');
var Controls = require('Controls');

class Timer extends React.Component {

  render () {

    return (
      <div>
        <Clock/>
      </div>
    );
  }

}

module.exports = Timer;
