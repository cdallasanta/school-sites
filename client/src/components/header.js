import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


  return(
    <header>
      <Link to="/login">Log in</Link> or <Link to="/signup">Sign up</Link>
    </header>
  )
}

export default Header;