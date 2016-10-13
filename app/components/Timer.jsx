var React = require('react');
var PropTypes = React.PropTypes;
var Controls = require('Controls');

class Timer extends React.Component {

  render () {
    return (
      <div className='text-center'>
        <p>Timer.jsx</p>
        <Controls/>
      </div>
    );
  }

}

module.exports = Timer;
