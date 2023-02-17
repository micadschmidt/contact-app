import React, { useState, useEffect } from 'react';

//For a unique key necesitamos instalar un package: npm i uuidv4 //  
import { uuid } from 'uuidv4';
import './App.css';
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import userEvent from '@testing-library/user-event';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, {id: uuid(), ...contacts }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
      const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={ removeContactHandler}/>
    </div>
  );
}

export default App;
