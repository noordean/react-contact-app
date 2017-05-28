import React from 'react';

export default class SaveForm extends React.Component {
    render() {
        return (
            <form className="form-horizontal">
              <div className="form-group">
                <label className="control-label col-sm-2" for="email">Name</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" placeholder="Enter contact name"/>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="pwd">Number</label>
                <div className="col-sm-10"> 
                  <input type="password" className="form-control" id="pwd" placeholder="Enter phone number"/>
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