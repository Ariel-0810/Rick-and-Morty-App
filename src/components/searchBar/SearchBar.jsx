import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DivSearch = styled.div`
  background-color: darkcyan;
  border-radius: 0.5em;
  padding: 1em;
  display: flex;
  justify-content: center;
`;

const Btn = styled.button`
color: #fff !important;
  font-size: 1em;
  font-weight: 700;
  padding: 0.5em;
  background: #318aac;
  position: relative;
  border: 2px solid #318aac;
  outline: 1px solid;
  outline-color: #370617;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
}
&:hover {
  cursor: pointer;
  box-shadow: inset 0 0 20px rgba(49, 138, 172, 0.5), 0 0 20px rgba(49, 138, 172, 0.4);
  outline-color: rgba(49, 138, 172, 0);
  outline-offset: 80px;
  text-shadow: 1px 1px 6px #fff;
  border-shadow:
  
`;

const Input = styled.input`
  border-radius: 0.5em;
  margin-left: 0.5em;
  margin-right: 0.5em; 
  padding: 0.5em;
  border: solid #06d6a0;
  color: #370617;
  font-weight: 700;
  font-size: 1em;
  &:hover {
    background-color: #ffd60a;
  }
`;

const BtnFav = styled.button`
padding: 1em;
border-radius: 3em;
  border-color: #1abc9c;
  color: black;
  background-image: -webkit-linear-gradient(left, rgba(26, 188, 156, 0.6), rgba(26, 188, 156, 0.6) 5%, #1abc9c 5%, #1abc9c 10%, rgba(26, 188, 156, 0.6) 10%, rgba(26, 188, 156, 0.6) 15%, #1abc9c 15%, #1abc9c 20%, rgba(26, 188, 156, 0.6) 20%, rgba(26, 188, 156, 0.6) 25%, #1abc9c 25%, #1abc9c 30%, rgba(26, 188, 156, 0.6) 30%, rgba(26, 188, 156, 0.6) 35%, #1abc9c 35%, #1abc9c 40%, rgba(26, 188, 156, 0.6) 40%, rgba(26, 188, 156, 0.6) 45%, #1abc9c 45%, #1abc9c 50%, rgba(26, 188, 156, 0.6) 50%, rgba(26, 188, 156, 0.6) 55%, #1abc9c 55%, #1abc9c 60%, rgba(26, 188, 156, 0.6) 60%, rgba(26, 188, 156, 0.6) 65%, #1abc9c 65%, #1abc9c 70%, rgba(26, 188, 156, 0.6) 70%, rgba(26, 188, 156, 0.6) 75%, #1abc9c 75%, #1abc9c 80%, rgba(26, 188, 156, 0.6) 80%, rgba(26, 188, 156, 0.6) 85%, #1abc9c 85%, #1abc9c 90%, rgba(26, 188, 156, 0.6) 90%, rgba(26, 188, 156, 0.6) 95%, #1abc9c 95%, #1abc9c 100%);
  background-image: linear-gradient(to right, rgba(26, 188, 156, 0.6), rgba(26, 188, 156, 0.6) 5%, #1abc9c 5%, #1abc9c 10%, rgba(26, 188, 156, 0.6) 10%, rgba(26, 188, 156, 0.6) 15%, #1abc9c 15%, #1abc9c 20%, rgba(26, 188, 156, 0.6) 20%, rgba(26, 188, 156, 0.6) 25%, #1abc9c 25%, #1abc9c 30%, rgba(26, 188, 156, 0.6) 30%, rgba(26, 188, 156, 0.6) 35%, #1abc9c 35%, #1abc9c 40%, rgba(26, 188, 156, 0.6) 40%, rgba(26, 188, 156, 0.6) 45%, #1abc9c 45%, #1abc9c 50%, rgba(26, 188, 156, 0.6) 50%, rgba(26, 188, 156, 0.6) 55%, #1abc9c 55%, #1abc9c 60%, rgba(26, 188, 156, 0.6) 60%, rgba(26, 188, 156, 0.6) 65%, #1abc9c 65%, #1abc9c 70%, rgba(26, 188, 156, 0.6) 70%, rgba(26, 188, 156, 0.6) 75%, #1abc9c 75%, #1abc9c 80%, rgba(26, 188, 156, 0.6) 80%, rgba(26, 188, 156, 0.6) 85%, #1abc9c 85%, #1abc9c 90%, rgba(26, 188, 156, 0.6) 90%, rgba(26, 188, 156, 0.6) 95%, #1abc9c 95%, #1abc9c 100%);
  background-position: 0 0;
  background-size: 100%;
  -webkit-transition: background 300ms ease-in-out;
  transition: background 300ms ease-in-out;
}
&:hover {
  background-position: 100px;
  cursor: pointer;
`;

const BtnHm = styled.button`
  border-radius: 0.5em;
  margin-left: 0.5em;
  padding: 0.5em;
  border: solid #06d6a0;
  color: #370617;
  font-weight: 700;
  font-size: 1em;
  &:hover {
    background-color: #ffd60a;
    cursor: pointer;
  }
`;


export default function SearchBar(props) {
  const { onSearch } = props;
  const [character, setCharacter] = useState("")
  const handleChange = (evento) => {
     setCharacter(evento.target.value)
  }
  
  return (
    <DivSearch>
      <div>
      <Link to='/favorites'><BtnFav>Favorites</BtnFav></Link>
      <Link to='/home'><BtnHm>Home</BtnHm></Link>
      </div>
      <Input type="search" value={character} onChange={handleChange} />
      <Btn onClick={() => onSearch(character)}>Agregar</Btn>
      </DivSearch>
  );
}
 
