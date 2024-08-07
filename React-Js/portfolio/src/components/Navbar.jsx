import React, { memo } from 'react';

const Navbar = ({ Navlink}) => {
  console.log("I am Re-rendering my Navbar");

  return (
    <div>
      I am a {Navlink} of Navbar
    </div>
  );
};

export default memo(Navbar);
