import React from 'react';

export default class SaveForm extends React.Component {
  saveContact(e) {
    e.preventDefault();
    const contactName = this.nameInput.value;
    const contactNumber = this.numberInput.value;
    $.post("http://localhost:3333/api/save", { name: contactName, number: contactNumber }, (data) => {
      alert(data.message);
    });
  }

  render() {
      const self = this;
        return (
            <form className="form-horizontal" onSubmit={this.saveContact.bind(this)}>
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