import { useState } from "react";
import {
  NavInput,
  NavButton,
  NavButtonAbout,
  NavButtonHome,
  Navbar,
  NavButtonLogOut,
  NavLogo,
  NavButtonFavorites,
  NavButtonNavigation,
  DropdownContent
} from "./navbar-component/StylesNavbar";
import { Link, useNavigate } from "react-router-dom";
// import styled, {keyframes} from 'styled-components'

import Logo from "../img/logo.png";



export default function SearchBar(props) {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("userKey");
    navigate("/");
  };

  const [id, setId] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setId(value);
  };
  

  const [isDropdownOpen, setIsOpenDrowpdown] = useState(false)

  const toggleDropdownOpen = ()=>{
    setIsOpenDrowpdown(true)
  }
  const toggleDropdownClose = ()=>{
    setIsOpenDrowpdown(false)
  }


  return (
    <Navbar>
      <NavLogo src={Logo} alt="" />
      <div
      
        onMouseOver={toggleDropdownOpen}
        onMouseLeave={toggleDropdownClose}
        style={{position:"relative", color:'#fff',}}
      > <NavButtonNavigation>Navigation</NavButtonNavigation>
      <DropdownContent isDropdownOpen={isDropdownOpen}>
            <Link to="/about">
              <NavButtonAbout>About</NavButtonAbout>
            </Link>
            <Link to="/home">
              <NavButtonHome>Home</NavButtonHome>
            </Link>
            <Link to={"/favorite"}>
              <NavButtonFavorites>favorites</NavButtonFavorites>
            </Link>
        
      </DropdownContent>
      </div>
      <NavButtonLogOut onClick={logOut}>Log out</NavButtonLogOut>
      <div>
        <NavInput type="text" onChange={handleChange} value={id} />
        <NavButton onClick={() => props.onSearch(id)}>Add</NavButton>
      </div>
    </Navbar>
  );
}
