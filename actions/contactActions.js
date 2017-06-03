import contactDispatcher from '../dispatcher/contactDispatcher';

class contactActions {
  loadContacts() {
    $.post('http://localhost:3333/api/get', (Data) => {
    contactDispatcher.dispatch({
      type: 'LOAD_CONTACTS',
      data: Data
      });
    });
  }

  saveData(Name, Contact) {
    $.post('http://localhost:3333/api/save', { name: Name, number: Contact }, (Data) => {
      contactDispatcher.dispatch({
        type: 'SAVE_DATA',
        message: Data.message
      });
    });
  }

  deleteContact(Name) {
    $.post('http://localhost:3333/api/delete', { name: Name }, (Data) => {
      contactDispatcher.dispatch({
        type: 'DELETE_DATA',
        message: Data.message
      });
    });
  }

  updateContact(Id, newName, newNumber) {
    $.post('http://localhost:3333/api/update', { id: Id, name: newName, number: newNumber }, (Data) => {
      contactDispatcher.dispatch({
        type: 'UPDATE_DATA',
        message: Data.message
      });
    });
  }
}

export default new contactActions();
