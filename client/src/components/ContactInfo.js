import React from 'react';

const ContactInfo = ({contact}) => {
  function renderContact() {
    if (contact){
      return contactDiv();
    } else {
      return noContactDiv();
    }
  }

  function contactDiv() {
    debugger;
    return (
      <div>
        <img src={contact.avatar_url} alt="rep-avatar" />
        <strong>Rep Name:</strong> {contact.name}<br />
        <strong>Rep Email:</strong> {contact.email}
      </div>
    )
  }

  function noContactDiv() {
    return (
      <div>
        There is no site representative for this site. Claim it here!
      </div>
    )
  }

  return(
    renderContact()
  )
}

export default ContactInfo;