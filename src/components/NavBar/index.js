import React from 'react';
import './NavBar.css';

const NavButton = ({buttonText}) => {
  return (
    <div className='navButton'>
      <span>{buttonText}</span> 
    </div>
  )
};

function NavBar(){
  
  return (
    <div className='navBar'>
      <NavButton buttonText={'About'}/>
      <NavButton buttonText={'Projects'}/>
      <NavButton buttonText={'Experience'}/>
      <NavButton buttonText={'Contact'}/>
    </div>
  )
}



export default NavBar 
