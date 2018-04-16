import React from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

export class Navbar extends React.Component {
  render() {
    return(
      <Router>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">FCK</a>

            </div>
            <ul className="nav navbar-nav navbar-left">
              <li><Link to = "/about">About</Link></li>
              <li><Link to = "/players">Players</Link></li>
              <li><Link to = "/addplayer">Addplayer</Link></li>

            </ul>
            <ul className="nav navbar-nav navbar-right">
            <li><a>Home</a></li>

            </ul>
          </div>
        </nav>
      </Router>
    )
  }
}
