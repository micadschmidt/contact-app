import React from "react";

const ContactList = (props) => {
  console.log(props);

  const renderContactList = props.contacts.map((contact) => {
    return (
      <div className="item">
        <div className="content">
          <div className="header">{contact.name}</div>
          <div>{contact.email}</div>
        </div>
      </div>
    )
  })
  return (
    <div className="ui celled list">
      Contact List
    </div>
  );
}

export default ContactList;
