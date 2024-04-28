import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AddContact from "./AddContact";
import ContactList from "../components/ContactList";
import {useRef} from 'react'
export default function AddContactApp() {
  const LOCAL_STORAGE_KEY = "contacts";
  const idCounter = useRef(1);
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    const newContact = { id: idCounter.current++, ...contact };
    setContacts([...contacts, newContact]);
  };


  useEffect(() => {
    const retrieveContacts = JSON.parse(
      sessionStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    // stringify - Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
    sessionStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  return (
    <div className="ui container">
      <AddContact addContactHandle={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}