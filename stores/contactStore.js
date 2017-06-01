import { EventEmitter } from 'events';
import contactDispatcher from '../dispatcher/contactDispatcher';

class contactStore extends EventEmitter {
  constructor() {
    super();
    this.contacts = [];
    this.saveStatus = '';
  }

  loadContacts(data) {
    this.contacts = data;
    this.emit('change');
  }

  checkSaveStatus(message) {
      this.saveStatus = message;
      this.emit('change');
  }
  
  getSaveStatus() {
    return this.saveStatus;
  }

  getContacts() {
    return this.contacts;
  }

  handleDispatcher(action) {
    switch (action.type) {
      case 'LOAD_CONTACTS':
        this.loadContacts(action.data);
        break;
      case 'SAVE_DATA':
        this.checkSaveStatus(action.message);
        break;
    }
  }
}

const contacts = new contactStore();
contactDispatcher.register(contacts.handleDispatcher.bind(contacts));
export default contacts;


