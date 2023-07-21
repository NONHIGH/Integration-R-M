import "./App.css";
import Cards from "./components/card-component/Cards.jsx";
import "./layout/footerApp.css";
import StarBackground from "./components/background";
import NavBar from "./components/navbar-component/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import About from "./components/about-component/About";
import Detail from "./components/detail-component/Detail";
import Form from "./components/form-component/Form";
import { useNavigate } from "react-router-dom";
import Favorites from "./components/favorites-component/Favorites";

function App() {

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = 'angelones1_25@gmail.com'
  const PASSWORD = 'Carade12'

  const userKey = 'drownSpeedMagic';

  function login(userData){
    if(userData.password === PASSWORD && userData.email === EMAIL){
      localStorage.setItem('userKey', userKey)
      setAccess(true);
      navigate('/home');
    }
    else{
      alert('usuario o contrase;a incorrecto')
    }
  }

  useEffect(()=>{
    !access && navigate('/');
  },[access])



  const keyOfUser = localStorage.getItem("userKey");

  const classBody = "BodyImage";
  const location = useLocation();
  const [inLogin, setInLogin] = useState(true);
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "") {
      document.body.classList.add(classBody);
      setInLogin(true);
    } else {
      document.body.classList.remove(classBody);
      setInLogin(false);
    }

    return () => {
      document.body.classList.remove(classBody);
      setInLogin(false);
    };
  }, [location.pathname, inLogin]);

  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    const existinting = characters.find(
      (character) => character.id === Number(id)
    );

    if (existinting) {
      alert("Este texto ");
      return;
    }
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((anteriores) => [...anteriores, data]);
        } else {
          window.alert("¡No existe este id de personaje!");
        }
      }
    );
  }

  function onClose(id) {
    setCharacters(
      characters.filter((character) => {
        return Number(id) !== character.id;
      })
    );
  }

  return (
    <div className="App">
      {!inLogin && <NavBar onSearch={onSearch} />}

      <Routes>

      {!keyOfUser ? (
        
        <Route path="/" element={<Form login={login}></Form>} />
        
        ):(
          <>
          <Route
          path="/home"
          element={
            <>
              <Cards characters={characters} onClose={onClose}>
                {" "}
              </Cards>{" "}
              <StarBackground />
            </>
          }
        />

        <Route 
        path="/favorite"
        element={
          <>
          <Favorites/> <StarBackground />
          </>
        }
        />
        <Route
        path="/about"
        element={
          <>
              <About></About>{" "}
            </>
          }
          />


        <Route
          path="/detail/:id"
          element={
            <>
              <Detail></Detail> <StarBackground />
            </>
          }
          />

        <Route path="*" element={<Navigate to={"/home"}></Navigate>} />
        </>
          
          )}
        
        
        
      </Routes>
    </div>
  );
}

export default App;
