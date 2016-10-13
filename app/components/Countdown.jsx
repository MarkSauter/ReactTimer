var React = require('react');
var PropTypes = React.PropTypes;
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

class Countdown extends React.Component {

  render () {
    return (
      <div className='text-center'>
        <p>Countdown.jsx</p>
        <CountdownForm/>
        <Controls/>
      </div>
    );
  }

};

module.exports = Countdown;
