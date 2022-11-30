import { useState } from "react";
import styled from "styled-components";

const DivSearch = styled.div`
  background-color: darkcyan;
  border-radius: 0.5em;
  padding: 1em;
  display: flex;
  justify-content: right;
`;

const Btn = styled.button`
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

const BtnRnd = styled.button`
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

const Input = styled.input`
  border-radius: 0.5em;
  margin-left: 0.5em;
  padding: 0.5em;
  border: solid #06d6a0;
  color: #370617;
  font-weight: 700;
  font-size: 1em;
  &:hover {
    background-color: #ffd60a;
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
      <Input type="search" value={character} onChange={handleChange} />
      <Btn onClick={() => onSearch(character)}>Agregar</Btn>
      <BtnRnd>Random</BtnRnd>
    </DivSearch>
  );
}
 
