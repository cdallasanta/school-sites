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
    return (
      <div>
        <img src="" alt="rep-avatar" />
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