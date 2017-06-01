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
}

export default new contactActions();
