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
  NavButtonNavigation
} from "./navbar-component/StylesNavbar";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../img/logo.png";

const DropdownContainer = styled.div`
  &[data-isdropdownopen="true"] {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80%;
    left: 6%;
    background: #4931;
    z-index: 1;
    pointer-events: auto;
    transition: 2s;
    & a {
      margin: 0 auto;
    }
  }
  &[data-isdropdownopen="false"]{
    display: none;
  }
`

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
      <DropdownContainer data-isdropdownopen={isDropdownOpen}>
            <Link to="/about">
              <NavButtonAbout>About</NavButtonAbout>
            </Link>
            <Link to="/home">
              <NavButtonHome>Home</NavButtonHome>
            </Link>
            <Link to={"/favorite"}>
              <NavButtonFavorites>favorites</NavButtonFavorites>
            </Link>
        
      </DropdownContainer>
      </div>
      <NavButtonLogOut onClick={logOut}>Log out</NavButtonLogOut>
      <div>
        <NavInput type="text" onChange={handleChange} value={id} />
        <NavButton onClick={() => props.onSearch(id)}>Add</NavButton>
      </div>
    </Navbar>
  );
}
