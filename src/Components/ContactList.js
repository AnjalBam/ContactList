import React, { Component } from 'react';
import Person from './Person';
import { Consumer } from './Context';

const ContactList = ({contacts}) =>{
  return (
    <section id='Contact-List'>
      <div className='container'>
        <div className='row'>
        <Consumer>
          {
            value => {
              return(
                value.contacts.map((contact, i) => <Person key={i} contact={contact} OnClickHanlder={value.OnClickHanlder} />)
              )
            }
          }
        </Consumer>
        </div>
      </div>
    </section>
  )
}
export default ContactList;
