import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactList(props) {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  }

  const renderContactList = props.contacts.map((contact) => {
    return (
      <div className="item" key={contact.id}>
        <i className="user icon"></i>
        <div>
          <div className='header'>{contact.name}</div>
          <div className="description">{contact.email}</div>
        </div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px", cursor:"pointer" }}
          onClick={() => {
            deleteContactHandler(contact.id);
          }}
        ></i>
      </div>
    );
  });

  return (
    <div className="main">
      <br />
      <h2>
        Current User
        <span id="storeButton">{props.contacts.length === 1 ? <Link to="/store">
          <button className="ui button blue middle floated">Go to Store</button>
        </Link>:<button className="ui button blue middle floated" onClick={()=>{
          alert("Enter your details")
        }}>Go to Store</button>}</span>
      </h2>
      <div className="ui relaxed divided list">{renderContactList}</div>
    </div>
  );
}
