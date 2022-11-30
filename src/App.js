import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"
import About from "./components/about/About";
//import Card from "./components/card/Card.jsx";
import Cards from "./components/cards/Cards.jsx";
//import SearchBar from "./components/searchBar/SearchBar.jsx";
//import characters from "./data.js"
import Nav from "./components/nav/Nav.jsx";
import Detail from "./components/detail/Detail.jsx"
import Form from "./components/form/Form.jsx"




function App () {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '1password';
  
  function login(userData) {
     if (userData.password === password && userData.username === username) {
        setAccess(true);
        navigate('/home');
     }
  }
  const location = useLocation()
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

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

  // const onSearch = () => {

  //   // const example = {
  //   //   name: 'Morty Smith',
  //   //   species: 'Human',
  //   //   gender: 'Male',
  //   //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  //  //};
  //  setCharacters([...characters, example])
  // }

  const onClose = (id) => {
    setCharacters(characters.filter(e => e.id !== id))
  };
  
  const handleSubmit = (evento) => {
    evento.preventDefault()
    props.login(userData)
  }

   return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
      </div>
      <Routes>
        <Route path="/" element={<Form login={login} onSubmit={handleSubmit}/>}/>
        <Route path="/home" element= {<Cards characters={characters} onClose={onClose} />}/>
        <Route path="/about" element= {<About />}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>
      </Routes>
      {/* <div className="divCard">
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div> */}
 
    </div>
  );
}

export default App;
