import React from "react";
// import ReactDOM from "react-dom";
import { useState } from "react";
import { useEffect } from "react";
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import {Link} from 'react-router-dom';
// for local storage
// whenever value change it helps to render again
// npm i uuidv4
// import { uuid } from "uuidv4";
// import uuidv4 from 'uuid/v4';
// import Header from "./Components/Header";
import AddContact from "./AddContact";
import ContactList from "../components/ContactList";
// import "./App.css";
import {useRef} from 'react'
export default function AddContactApp() {
  const LOCAL_STORAGE_KEY = "contacts";
  const idCounter = useRef(1);
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    // console.log(contact);
    // setContacts([...contacts, contact]);
    // setContacts([...contacts, {id:uuid(),...contact}]);
    const newContact = { id: idCounter.current++, ...contact };
    setContacts([...contacts, newContact]);
    // const newContact = { id: uuid(), ...contact };
    // setContacts((prevContacts) => [...prevContacts, newContact]);
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
  // const contacts = [
  //   {
  //     id: "1",
  //     key: "1",
  //     name: "Dipesh",
  //     email: "malvia@gamil.com",
  //   },
  //   {
  //     id: "2",
  //     key: "2",
  //     name: "Nikesh",
  //     email: "nicks@gamil.com",
  //   },
  // ];

  return (
    <div className="ui container">
      {/* <Router> */}
        {/* header should be constant through the application */}
        {/* <Header /> */}
        {/* <Routes> */}

          {/* <Route path="/add" Component={AddContact} /> */}
          {/* <Route path="/" Component={ContactList} /> */}


          {/* using component for components will give performance issue so instead of this we use render */}
          {/* <Route path="/" exact Component={()=><ContactList contacts={contacts} getContactId={removeContactHandler} />} /> */}

          {/* <Route path="/" exact render={(props)=>(<ContactList {...props} contacts={contacts} getContactId={removeContactHandler} />)} /> */}

          {/* passing props */}
          {/* <Route path="/add" Component={()=><AddContact addContactHandle={addContactHandler} />} /> */}

          {/* <Route path="/add" Component={AddContact} /> */}
        {/* </Routes> */}

        {/* without using routes */}
        {/* <Route path="/add" Component={AddContact} />
        <Route path="/" Component={ContactList} /> */}

      {/* </Router> */}
      {/* <Header /> */}
      <AddContact addContactHandle={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}