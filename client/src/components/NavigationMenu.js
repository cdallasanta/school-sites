import React from 'react';
import {Link} from 'react-router-dom';

const NavigationMenu = props => {
  function toggleContact() {
    console.log("here")
    const content = document.getElementById("nav-contact")
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }

  return(
    <div id="navMenu">
      <Link to={`/districts/${props.district_id}/selector`}>Select a different School</Link><br />
      <Link to={`/districts/${props.district_id}`}>District Page</Link><br />
      <Link to={`/districts/${props.district_id}/calendar`}>District Calendar</Link><br />
      <a href="#" onClick={toggleContact}>School Info</a><br />
      <div id="nav-contact" className="collapsible">
        Phone: {props.school.phone}<br />
        Address: {props.school.address}<br />
        <a href={props.school.homepage_url}>Homepage</a>
      </div>
    </div>
  )
}

export default NavigationMenu;