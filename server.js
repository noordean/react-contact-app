import express from 'express';
import bodyParser from 'body-parser';
import dbClass from './database/dbclass';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3333, () => {
  console.log('app running...');
});

app.post('/api/save', (req, res) => {
  dbClass.saveContact(req.body.name, req.body.number);
  res.json({ message: 'Contact saved succesfully' });
});

app.post('/api/get', (req, res) => {
  const result = dbClass.getAllContacts();
  result.then((contacts) => {
    if (contacts) {
      res.json(contacts);
    } else {
      res.json({ error: 'Error occured!' });
    }
  });
});
