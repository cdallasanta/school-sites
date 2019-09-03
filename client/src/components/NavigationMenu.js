import React from 'react';
import {Link} from 'react-router-dom';

const NavigationMenu = props => {
  function toggleContact() {
    const content = document.getElementById("nav-contact")
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  }

  return(
    <div id="navMenu">
      <Link to={`/districts/${props.district_id}/selector`}>Select a different School</Link><br />
      <Link to={`/districts/${props.district_id}`}>District Page</Link><br />
      <Link to={`/districts/${props.district_id}/calendar`}>District Calendar</Link><br />
      <a href="#" onClick={toggleContact}>School Info</a><br />
      <div id="nav-contact" className="collapsible collapsed">
        Phone: {props.school.phone}<br />
        Address: {props.school.address}<br />
        <a href={props.school.homepage_url} target="_">Homepage</a>
      </div>
    </div>
  )
}

export default NavigationMenu;