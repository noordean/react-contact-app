import React from 'react';
import contactStore from '../stores/contactStore';
import contactAction from '../actions/contactActions';

export default class EditContact extends React.Component {
  constructor(context) {
    super(context);
    this.state = {contacts: contactStore.getContacts(), updateMessage: contactStore.getUpdateMessage()}
    this.changeState = this.changeState.bind(this);
 }

  changeState() {
      this.setState({
        contacts: contactStore.getContacts(),
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

  updateHandler(e) {
    e.preventDefault();
    const contactName = this.nameInput.value;
    const contactNumber = this.numberInput.value;
    contactAction.updateContact(this.props.params.id, contactName, contactNumber);
    this.context.router.replace('contacts');
  }
  
  render() {
      const choosenContact = this.state.contacts.filter((contact) => {
          return contact._id === this.props.params.id;
      });
      const self = this;
        return (
            <form className="form-horizontal" onSubmit={this.updateHandler.bind(this)}>
              <div className="form-group">
                <label className="control-label col-sm-2">Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" defaultValue={choosenContact[0].name} ref={ (element) => {self.nameInput = element}} required/>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2">Number</label>
                <div className="col-sm-10"> 
                  <input type="number" className="form-control" defaultValue={choosenContact[0].number} ref={ (element) => {self.numberInput = element}} required/>
                </div>
              </div>
              <div className="form-group"> 
                <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">Update</button>
                </div>
              </div>
          </form>
        );
    }
}

 EditContact.contextTypes = {
    router: React.PropTypes.object.isRequired
 }