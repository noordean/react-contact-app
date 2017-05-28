import React from 'react';

export default class ViewContacts extends React.Component {
    constructor() {
        super();
        this.state = { result: [] }
    }
    componentDidMount() {
      $.post("http://localhost:3333/api/get", (data) => {
        const contactList = [];
        data.forEach((contact, index) => {
            contactList.push(<tr key={index}><td>{contact.name}</td><td>{contact.number}</td></tr>);
        });
        this.setState({
            result: contactList
        });
      });
    }
    render() {
        return (
            <div>
              <h4>Phone-Book</h4>
              <table className="table table-hover">
                <tbody>
                  {this.state.result}
                </tbody>
              </table>
            </div>
        );
    }
}