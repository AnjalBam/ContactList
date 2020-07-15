import React from 'react';
import ContactList from './ContactList';
import { Route, Switch } from 'react-router-dom';
import PersonalInfo from './PersonalInfo';

const ContactApp = ({contacts}) =>{
  return(
    <>
    <Switch>
      <Route path='/' exact component={ContactList} />
      <Route path='/Contactinfo/:fullname' component={PersonalInfo} />
    </Switch>
    </>
  )
}

export default ContactApp;
