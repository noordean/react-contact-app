import { EventEmitter } from 'events';
import contactDispatcher from '../dispatcher/contactDispatcher';

class contactStore extends EventEmitter {
  constructor() {
    super();
    this.contacts = [];
    this.saveStatus = '';
    this.deleteStatus = '';
    this.updateMessage = '';
  }

  loadContacts(data) {
    this.contacts = data;
    this.emit('change');
  }

  checkSaveStatus(message) {
      this.saveStatus = message;
      this.emit('change');
  }

  showDeleteStatus(message) {
      this.deleteStatus = message;
      this.emit('change');
  }

  getDeleteMessage() {
    return this.deleteStatus;
  }

  showUpdateStatus(message) {
      this.updateMessage = message;
      this.emit('change');
  }

  getUpdateMessage() {
    return this.updateMessage;
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
      case 'DELETE_DATA':
        this.showDeleteStatus(action.message);
        break;
      case 'UPDATE_DATA':
        this.showUpdateStatus(action.message);
        break;
    }
  }
}

const contacts = new contactStore();
contactDispatcher.register(contacts.handleDispatcher.bind(contacts));
export default contacts;


