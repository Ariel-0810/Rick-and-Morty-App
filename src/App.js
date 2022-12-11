import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css"
import About from "./components/about/About";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import Detail from "./components/detail/Detail.jsx"
import Form from "./components/form/Form.jsx"
import Favorites from "./components/favorites/Favorites";


function App () {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = 'mia0810';
  
  function login(userData) {
     if (userData.password === password && userData.username === username) {
        setAccess(true);
        navigate('/home');
     }
     else {
      alert('usuario o contraseña incorrectos');
     }
  }

 

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }
  const onClose = (id) => {
    setCharacters(characters.filter(e => e.id !== id))
  };
  


  useEffect(() => {
    !access && navigate('/');
  }, [access]);

   return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
      </div>
      <Routes>
        <Route path="/" element={<Form login={login}/>}/>
        <Route path="/home" element= {<Cards characters={characters} onClose={onClose} />}/>
        <Route path="/about" element= {<About />}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
      </div>
  );
}

export default App;
