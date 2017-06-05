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
      number: String,
      user: String
    });
    this.phoneBook = mongoose.model('phone-book', phoneBookSchema);
  }

  saveContact(Name, phoneNumber, userEmail) {
    const contactToSave = new this.phoneBook({
      name: Name,
      number: phoneNumber,
      user: userEmail
    });
    contactToSave.save((err) => {
      if (err) {
        throw new Error(err);
      }
    });
  }

  getAllContacts(userEmail) {
    const result = this.phoneBook.find({ user: userEmail }).exec();
    return result;
  }

  getContact(Name, userEmail) {
    const result = this.phoneBook.find({ name: Name, user: userEmail }).exec();
    return result;
  }

  deleteContact(Name, userEmail) {
    this.phoneBook.findOneAndRemove({ name: Name, user: userEmail }, (err) => {
      if (err) {
        throw new Error(err);
      }
    });
  }

  updateContact(id, Name, Numba) {
    this.phoneBook.findOneAndUpdate({ _id: id }, { name: Name, number: Numba }, (err) => {
      if (err) {
        throw new Error(err);
      }
    });
  }
}

export default new DatabaseClass();
