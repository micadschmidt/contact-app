import React from 'react';
import './App.css';
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Dipesh",
      email: "malvia@gmail.com",
    },
    {
      id: "2",
      name: "Dimmas",
      email: "dimmas@gmail.com",
    },
  ];
  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
