import React from 'react';
import {Link} from 'react-router';
import Login from './googleLogin.jsx';

export default class Header extends React.Component {
   Logout(event) {
       event.preventDefault();
       localStorage.removeItem('user');
       location.reload();
       location.href = '';
   }

  render() {
    const logout = <a className="nav" href="" onClick={this.Logout.bind(this)}>Log Out</a>;
    const InOrOut = localStorage.user ? logout : Login;
    const viewcontacts = <Link to="contacts">View Contacts</Link>;
    const empty = <div/>
    const showViewContact = localStorage.user ? viewcontacts : empty;
    const hiUser = localStorage.user ? <a className="nav">Hi {JSON.parse(localStorage.getItem('user')).name.split(' ')[0]}!</a> : empty;
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Contact App</Link>
              </div>
                <ul className="nav navbar-nav navbar-right">
                  <li className="active">{showViewContact}</li>
                  <li className="active">{hiUser}</li>
                  <li className="active">{InOrOut}</li>
                </ul>
            </div>
          </nav>
        );
    }
}