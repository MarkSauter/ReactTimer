var React = require('react');
var PropTypes = React.PropTypes;
var {Link, IndexLink} = require('react-router');

class Nav extends React.Component {

  render () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            </li>
            <li>
              <Link to="/Countdown" activeClassName="active-link">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
                Created by <a href="https://github.com/MarkSauter" target="_blank">Mark Sauter</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}

module.exports = Nav;
