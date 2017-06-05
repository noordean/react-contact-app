import contactDispatcher from '../dispatcher/contactDispatcher';

class contactActions {
  loadContacts(userEmail) {
    $.post('http://localhost:3333/api/get', { user: userEmail }, (Data) => {
    contactDispatcher.dispatch({
      type: 'LOAD_CONTACTS',
      data: Data
      });
    });
  }

  saveData(Name, Contact, userEmail) {
    $.post('http://localhost:3333/api/save', { name: Name, number: Contact, user: userEmail }, (Data) => {
      contactDispatcher.dispatch({
        type: 'SAVE_DATA',
        message: Data.message
      });
    });
  }

  deleteContact(Name, userEmail) {
    $.post('http://localhost:3333/api/delete', { name: Name, user: userEmail }, (Data) => {
      contactDispatcher.dispatch({
        type: 'DELETE_DATA',
        message: Data.message
      });
    });
  }

  updateContact(Id, newName, newNumber, userEmail) {
    $.post('http://localhost:3333/api/update', { id: Id, name: newName, number: newNumber, user: userEmail }, (Data) => {
      contactDispatcher.dispatch({
        type: 'UPDATE_DATA',
        message: Data.message
      });
    });
  }
}

export default new contactActions();
