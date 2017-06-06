import React from 'react';
import contactStore from '../stores/contactStore';
import contactAction from '../actions/contactActions';

export default class SaveForm extends React.Component {
  constructor() {
    super();
    this.state = { saveStatus: ''};
    this.changeState = this.changeState.bind(this);
  }
  
  changeState() {
    this.setState({
      saveStatus: contactStore.getSaveStatus()
    });
  }

  componentWillMount() {
    contactStore.on('change', this.changeState);
  }

  componentWillUnmount() {
    contactStore.removeListener('change', this.changeState);
  }

  saveHandler(e) {
    e.preventDefault();
    const contactName = this.nameInput.value;
    const contactNumber = this.numberInput.value;
    const userEmail = JSON.parse(localStorage.getItem('user')).email;
    contactAction.saveData(contactName, contactNumber, userEmail);
  }

  render() {
      if (!localStorage.user) {
        return (
            <img className="img-responsive center-block" src="images/contact-app.jpg" alt="Contact-app-img"/>
        );
      }
      const self = this;
        return (
            <form className="form-horizontal" onSubmit={this.saveHandler.bind(this)}>
              <div className="text-center">{this.state.saveStatus}</div>

              <div className="form-group">
                <label className="control-label col-sm-2">Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="Enter contact name" ref={ (element) => {self.nameInput = element}} required/>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2">Number</label>
                <div className="col-sm-10"> 
                  <input type="number" className="form-control" placeholder="Enter phone number" ref={ (element) => {self.numberInput = element}} required/>
                </div>
              </div>
              <div className="form-group"> 
                <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">Save</button>
                </div>
              </div>
          </form>
        );
    }
}