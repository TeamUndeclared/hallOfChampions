import React from 'react';

import Nav from '../Nav/Nav'
import "../../Assets/scss/main.scss"
import './Floor.scss';
import Profile from '../Auth/profile/Profile-sm';

function Floor() {
// hamburger nav goes here with conditinal admin link and form link ect
  // Do stuff 
  return (
    <div id="floor" className="Floor">
      <Profile/>
      <Nav />
    </div>
  );
}

export default Floor;
