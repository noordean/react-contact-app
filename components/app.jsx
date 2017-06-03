import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout.jsx';
import SaveForm from './saveForm.jsx';
import ViewContact from './viewContacts.jsx';
import EditContact from './editContact.jsx';
import NotFound from './notfound.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

ReactDOM.render(
 <Router history={hashHistory}>
   <div>
   <Route path="/" component={Layout}>
     <IndexRoute component={SaveForm}/>
     <Route path="contacts" component={ViewContact}/>
     <Route path="editcontact/:id" component={EditContact}/>
   </Route>  
   <Route path="*" component={NotFound}/>
   </div>
 </Router>,
    document.getElementById("container")
);