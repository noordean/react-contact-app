import React from 'react';
import { Link } from 'react-router';
import contactStore from '../stores/contactStore';
import contactAction from '../actions/contactActions';

export default class ViewContacts extends React.Component {
    constructor() {
        super();
        this.state = { contacts: contactStore.getContacts(), deleteMessage: contactStore.getDeleteMessage() };
        this.changeState = this.changeState.bind(this);
    }

    changeState() {
      this.setState({
        contacts: contactStore.getContacts(),
        deleteMessage: contactStore.getDeleteMessage()
      });
    }

    componentWillMount() {
      contactStore.on('change', this.changeState);
    }

    componentDidMount() {
      contactAction.loadContacts(JSON.parse(localStorage.getItem('user')).email);
    }

    componentWillUnmount() {
      contactStore.removeListener('change', this.changeState);
    }
    
    deleteContactHandler(name, userEmail) {
      const ask = confirm('You are about to delete ' + name);
      if (ask) {
        contactAction.deleteContact(name, userEmail);
        contactAction.loadContacts(userEmail);
      }
    }
    render() {
      if (!localStorage.user) {
        return (
            <img className="img-responsive center-block" src="images/contact-app.jpg" alt="Contact-app-img"/>
        );
      }
        const contactList = [];
        this.state.contacts.forEach((contact, index) => {
            contactList.push(<tr key={index} ><td>{contact.name}</td><td>{contact.number}</td><td><Link to={"editcontact/" + contact._id}><button className="btn btn-info">Edit</button></Link></td><td><button className="btn btn-danger" onClick={this.deleteContactHandler.bind(this, contact.name, JSON.parse(localStorage.getItem('user')).email)}>Delete</button></td></tr>);
        });
        return (
            <div>
              <h4>Phone-Book</h4>
              <table className="table table-hover">
                <tbody>
                  {contactList}
                </tbody>
              </table>
            </div>
        );
    }
}