import React, { useState, useEffect } from 'react';
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
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
