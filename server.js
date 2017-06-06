import express from 'express';
import bodyParser from 'body-parser';
import dbClass from './database/dbclass';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
  // console.log('app running...');
});


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/api/save', (req, res) => {
  if (req.body.name === undefined || req.body.number === undefined || req.body.user === undefined) {
    res.json({ message: 'You need to specify name, number and user in the request body' });
  } else if (req.body.name === '' || req.body.number === '' || req.body.user === '') {
    res.json({ message: 'name, number and user must be supplied' });
  } else {
    const result = dbClass.getContact(req.body.name, req.body.user);
    result.then((contact) => {
      if (contact.length === 0) {
        dbClass.saveContact(req.body.name, req.body.number, req.body.user);
        res.json({ message: 'Contact saved succesfully' });
      } else {
        res.json({ message: 'Name already in your phone-book' });
      }
    });
  }
});

app.post('/api/get', (req, res) => {
  if (req.body.user === undefined || req.body.user === '') {
    res.json({ message: 'user must be supplied' });
  } else {
    const result = dbClass.getAllContacts(req.body.user);
    result.then((contacts) => {
      if (contacts) {
        res.json(contacts);
      } else {
        res.json({ message: 'Error occured!' });
      }
    });
  }
});

app.post('/api/delete', (req, res) => {
  if (req.body.name === undefined || req.body.user === undefined) {
    res.json({ message: 'name and user must be specified in the request body' });
  } else if (req.body.name === '' || req.body.user === '') {
    res.json({ message: 'name and user must be provided' });
  } else {
    dbClass.deleteContact(req.body.name, req.body.user);
    res.json({ message: 'Contact deleted!' });
  }
});

app.post('/api/update', (req, res) => {
  if (req.body.id === '' || req.body.name === '' || req.body.number === '' || req.body.user === '') {
    res.json({ message: 'id, user, name or number cannot be empty'});
  } else if (req.body.id === undefined || req.body.name === undefined || req.body.number === undefined || req.body.user === undefined) {
    res.json({ message: 'id, user, name and number must be specified in the request body' });
  } else {
    dbClass.updateContact(req.body.id, req.body.name, req.body.number, req.body.user);
    res.json({ message: 'Phone-book updated!' });
  }
});
