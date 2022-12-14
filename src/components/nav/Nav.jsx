import React from "react";
import { Link } from "react-router-dom"
import SearchBar from "../searchBar/SearchBar.jsx";

export default function Nav({onSearch}){
    return (
        <div>
            <Link to='/about'>About</Link>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}