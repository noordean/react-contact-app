import mongoose from 'mongoose';

class DatabaseClass {

  constructor() {
    mongoose.connect('mongodb://noordean:ibrahim5327@ds161190.mlab.com:61190/nurudb');
    const db = mongoose.connection;
    db.on('connected', () => {
      console.log('database connected');
    });

    const phoneBookSchema = new mongoose.Schema({
      name: String,
      number: String
    });
    this.phoneBook = mongoose.model('phone-book', phoneBookSchema);
  }

  saveContact(Name, phoneNumber) {
    const contactToSave = new this.phoneBook({
      name: Name,
      number: phoneNumber
    });
    contactToSave.save((err) => {
      if (err) {
        throw new Error(err);
      }
      console.log('data saved!');
    });
  }

  getAllContacts() {
    const result = this.phoneBook.find({}).exec();
    return result;
  }

  getContact(Name) {
    const result = this.phoneBook.find({ name: Name }).exec();
    return result;
  }
}

export default new DatabaseClass();
