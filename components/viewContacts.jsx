import React from 'react';
import contactStore from '../stores/contactStore';
import contactAction from '../actions/contactActions';

export default class ViewContacts extends React.Component {
    constructor() {
        super();
        this.state = { contacts: contactStore.getContacts() };
        this.changeState = this.changeState.bind(this);
    }

    changeState() {
      this.setState({
        contacts: contactStore.getContacts()
      });
    }

    componentWillMount() {
      contactStore.on('change', this.changeState);
    }

    componentDidMount() {
      contactAction.loadContacts();
    }

    componentWillUnmount() {
      contactStore.removeListener('change', this.changeState);
    }

    render() {
        const contactList = [];
        this.state.contacts.forEach((contact, index) => {
            contactList.push(<tr key={index}><td>{contact.name}</td><td>{contact.number}</td></tr>);
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