var React = require('react');
var PropTypes = React.PropTypes;

class Clock extends React.Component {

  formatSeconds (totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);

    if (seconds < 10) { seconds = '0' + seconds }
    if (minutes < 10) { minutes = '0' + minutes }

    return minutes + ':' + seconds;
  }

  render () {
    var {totalSeconds} = this.props;

    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }

}
Clock.propTypes = {
  totalSeconds: React.PropTypes.number
};
Clock.defaultProps = {
  totalSeconds: 0
};

module.exports = Clock;
