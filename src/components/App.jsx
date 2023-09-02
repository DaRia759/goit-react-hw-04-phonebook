import React, { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ListContacts from './ContactList/ContactList';
import ContactsItem from "./ContactsItem/ContactItem";
import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('storedContacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const handleAddContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (checkNameToSame(name)) {
      alert(`${name} is already in contacts`);
    } else {
      addNewContact(newContact);
    }
  };

  const checkNameToSame = name => {
    const lowerCaseNewName = name.toLowerCase();
    return contacts.some(
      contact => contact.name.toLowerCase() === lowerCaseNewName
    );
  };

  const addNewContact = newContact => {
    setContacts(contacts => [newContact, ...contacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  useEffect(() => {
    localStorage.setItem('storedContacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1 className={css.h1}>Phonebook</h1>
      <Form onAddContact={handleAddContact} />
      <h2 className={css.h2}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ListContacts>
        <ContactsItem
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      </ListContacts>
    </div>
  );
};

export default App;
