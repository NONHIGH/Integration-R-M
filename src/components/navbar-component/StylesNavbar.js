import styled, { keyframes } from "styled-components";

export const Header = styled.header`
  background-color: transparent;
  position: sticky;
  z-index: 1000;
  top: 0;
  &:hover {
    background: #000000;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  z-index: 20;
  width: 100vw;
  padding: 1%;
`;

export const NavInput = styled.input`
  margin: 5px;
  padding: 16px;
  border: 0;
  border-bottom: 3px solid #5ef;
  border-radius: 20px;
  background: transparent;
  color: #fff;
  &:hover {
    border: 1px solid #0d0404;
    background: #404542;
    outline: 0;
  }
  &:focus {
    outline: 0;
    background: #404542;
  }
`;

const neon = keyframes`
    0% {
        background-position: 0 0;
    }
    50% {
        background-position: 400% 0;
    }
    100%{
        background-position: 0 0;
    }
`;

export const NavButton = styled.button`
  margin: 6px;
  background: #22078200;
  cursor: pointer;
  border: 0;
  padding: 10px 22px;
  color: #fff;
  font-weight: bold;
  position: relative;
  border-radius: 12px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      #28d534,
      #1bab25,
      #127919,
      #1dca29,
      #28d534,
      #1bab25,
      #127919,
      #1dca29
    );
    background-size: 800%;
    border-radius: 10px;
    filter: blur(8px);
    animation: ${neon} 20s linear infinite;
  }
  &:focus {
    outline: 0;
  }
`;

export const NavButtonHome = styled.button`
  margin: 6px;
  background: #22078200;
  cursor: pointer;
  border: 0;
  padding: 10px 22px;
  color: #fff;
  font-weight: bold;
  position: relative;
  border-radius: 12px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      #007bff,
      #1e90ff,
      #3399ff,
      #3f51b5,
      #4285f4,
      #2196f3,
      #1976d2,
      #0d47a1
    );
    background-size: 800%;
    border-radius: 10px;
    filter: blur(8px);
    animation: ${neon} 20s linear infinite;
  }
  &:focus {
    outline: 0;
  }
`;

export const NavButtonAbout = styled.button`
  margin: 6px;
  background: #22078200;
  cursor: pointer;
  border: 0;
  padding: 10px 22px;
  color: #fff;
  font-weight: bold;
  position: relative;
  border-radius: 12px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      #ff9900,
      #ff8000,
      #ff6600,
      #ff4d00,
      #ff9900,
      #ff8000,
      #ff6600,
      #ff4d00
    );
    background-size: 800%;
    border-radius: 10px;
    filter: blur(8px);
    animation: ${neon} 20s linear infinite;
  }
  &:focus {
    outline: 0;
  }
`;

export const NavButtonLogOut = styled.button`
height: 20%;
margin: 6px;
background: #22078200;
cursor: pointer;
border: 0;
padding: 10px 22px;
color: #fff;
font-weight: bold;
position: relative;
border-radius: 12px;
&:hover::before{
  background: linear-gradient(45deg, #ff3333, #ff6666, #ff9999, #ffcccc, #ff3333, #ff6666, #ff9999, #ffcccc);

}
&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    #28d534,
    #1bab25,
    #127919,
    #1dca29,
    #28d534,
    #1bab25,
    #127919,
    #1dca29
  );
  background-size: 800%;
  border-radius: 10px;
  filter: blur(8px);
  animation: ${neon} 20s linear infinite;
}
&:focus {
  outline: 0;
}
`;
export const NavButtonFavorites = styled.button`
margin: 6px;
background: #22078200;
cursor: pointer;
border: 0;
padding: 10px 22px;
color: #fff;
font-weight: bold;
position: relative;
border-radius: 12px;

&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    #28d534,
    #1bab25,
    #127919,
    #1dca29,
    #28d534,
    #1bab25,
    #127919,
    #1dca29
  );
  background-size: 800%;
  border-radius: 10px;
  filter: blur(8px);
  animation: ${neon} 20s linear infinite;
}
`;

export const NavButtonNavigation = styled.button`
margin: 6px;
background: #22078200;
cursor: pointer;
border: 0;
padding: 10px 22px;
color: #92999f;
font-weight: bold;
position: relative;
border-radius: 12px;

&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    #00ffff,
    #40ffff,
    #28ffff,
    #19e5e6,
    #00ffff,
    #40ffff,
    #28ffff,
    #19e5e6
  );
  background-size: 800%;
  border-radius: 10px;
  filter: blur(8px);
  animation: ${neon} 20s linear infinite;
}
`;

export const NavLogo = styled.img`
  height: 50px;
  width: 150px;
  cursor: pointer;
`

export const DropdownContent = styled.div`
display: ${(props) => (props.isDropdownOpen ? "flex" : "none")};
flex-direction: column;
position: absolute;
top: 80%;
background: #4931;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
border-radius: 10px;
animation: ${neon} 20s linear infinite;
z-index: 1;
pointer-events: ${(props) => (props.isDropdownOpen ? "auto" : "none")}; /* Ajusta los eventos del contenido oculto */
transition:  2s; /* Agrega una transición suave */

& a{
  margin: auto;
}
`;