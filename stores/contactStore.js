import { EventEmitter } from 'events';
import contactDispatcher from '../dispatcher/contactDispatcher';

class contactStore extends EventEmitter {
  constructor() {
    super();
    this.contacts = [];
  }

  loadContacts(data) {
    this.contacts = data;
    this.emit('change');
  }

  getContacts() {
    return this.contacts;
  }

  handleDispatcher(action) {
    switch (action.type) {
      case 'LOAD_CONTACTS':
        this.loadContacts(action.data);
        break;
    }
  }
}

const contacts = new contactStore();
contactDispatcher.register(contacts.handleDispatcher.bind(contacts));
export default contacts;


