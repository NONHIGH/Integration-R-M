import "./App.css";
import Cards from "./components/card-component/Cards.jsx";
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

  const userKey = 'drownSpeedMagic';

  // function login(userData){
  //   if(userData.password === PASSWORD && userData.email === EMAIL){
  //     localStorage.setItem('userKey', userKey)
  //     setAccess(true);
  //     navigate('/home');
  //   }
  //   else{
  //     alert('usuario o contrase;a incorrecto')
  //   }
  // }
  //   function login(userData) {
  //     const { email, password } = userData;
  //     const URL = 'http://localhost:3001/rickandmorty/login/';
  //     axios(URL + ).then(({ data }) => {
  //        const { access } = data;
  //        localStorage.setItem('userKey', userKey)
  //        setAccess(data);
  //        access && navigate('/home');
  //     });
  //  }

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const query = `?email=${email}&password=${password}`;
      const { data } = await axios(URL + query);
      const { access } = data;
      setAccess(data);
      localStorage.setItem('userKey', userKey)
      access && navigate('/home');
    } catch (error) {
      return { error: error.message };
    }
  }


  useEffect(() => {
    !access && navigate('/');
  }, [access])



  const keyOfUser = localStorage.getItem("userKey");

  const classBody = ["BodyImage", "AboutImage"];
  const location = useLocation();
  const [inLogin, setInLogin] = useState(true);
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "") {
      document.body.classList.add(classBody[0]);
      setInLogin(true);
    } else {
      document.body.classList.remove(classBody[0]);
      setInLogin(false);
    }
    if (location.pathname === '/about') {
      document.body.classList.add(classBody[1])

    } else {
      document.body.classList.remove(classBody[1])

    }

    return () => {
      document.body.classList.remove(classBody[0]);
      document.body.classList.remove(classBody[1]);
      setInLogin(false);
    };
  }, [location.pathname, inLogin]);

  const [characters, setCharacters] = useState([]);

  async function onSearch(id) {
    try {
      const endpoint = `http://localhost:3001/rickandmorty/character/${id}`;
      const { data } = await axios(endpoint);

      const characterFind = characters.find(char => char.id === Number(id));
      if (characterFind) {
        alert('Already in the list')
      }
      else if (data.id !== undefined) {
        setCharacters((character) => [...character, data])
      }

    } catch (error) {
      return { error: error.message }
    }

    // .catch((error) => {
    //   alert("Hubo un error al buscar al personaje");
    //   console.log(error);
    // });
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

        ) : (
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
                  <Favorites /> <StarBackground />
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
