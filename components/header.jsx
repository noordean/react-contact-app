import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link className="navbar-brand" to="/">Contact App</Link>
                </div>
                <ul className="nav navbar-nav navbar-right">
                  <li className="active"><Link to="contacts">View contacts</Link></li>
                </ul>
            </div>
          </nav>
        );
    }
}