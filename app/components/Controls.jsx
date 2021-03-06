var React = require('react');
var PropTypes = React.PropTypes;

class Controls extends React.Component {

  onStatusChange = (newStatus) => {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  }
  render () {
    var {status} = this.props;
    var renderStartStopButton = () => {
      if (status === 'started') {
        return (<button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>);
      } else {
        return (<button className="button primary" onClick={this.onStatusChange('started')}>Start</button>);
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }

}
Controls.propTypes = {
  status: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired
};

module.exports = Controls;
