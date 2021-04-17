import React from "react";
import Searchbox from './Searchbox';
import {GiHamburgerMenu} from 'react-icons/gi';
import logo from './images/codav-favicon.png';


function Header(props) {
  return (
    <header>
      <div style={{width:'220px',display:"flex", alignItems:'center', justifyContent:'space-between'}}>
        <GiHamburgerMenu id='burger-icon'/>
        <img src={logo} alt="" height="40px" width="40px" style={{marginLeft:'40px'}} />
        <h1>Keeper</h1>
      </div>
      <Searchbox/>
      {/* <button >dark</button> */}
    </header>
  );
}

export default Header;
