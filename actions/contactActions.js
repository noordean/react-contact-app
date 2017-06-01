import contactDispatcher from '../dispatcher/contactDispatcher';

class contactActions {
  loadContacts() {
    $.post("http://localhost:3333/api/get", (Data) => {
      contactDispatcher.dispatch({
        type: 'LOAD_CONTACTS',
        data: Data
      });
    });
  }
}

export default new contactActions();
