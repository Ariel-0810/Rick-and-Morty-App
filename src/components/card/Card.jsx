import React, { useState, useEffect } from "react";
import { addPersonage } from '../../redux/actions.js';
import { deletePersonage } from '../../redux/actions.js';
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


export function Card(props) {
   const [isFav, setIsFav] = useState(false);

  function handleFavorite (){
    if(isFav){
      setIsFav(false);
     props.deletePersonage(props.id)
    } else {
      setIsFav(true);
      props.addPersonage(props)
    }
  }

  useEffect(() => {
   props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [props.myFavorites]);


   return (
      <div className={styles.card}>
         {
         isFav ? (
         <button onClick={handleFavorite}>❤️</button>
         ) : (
         <button onClick={handleFavorite}>🤍</button>
         )
         }   
         <button onClick={props.onClose}>X</button>
         <h6>{props.id}</h6>
         <Link to={`/detail/${props.id}`}><h2>{props.name}</h2></Link>         
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt={props.name} />
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      addPersonage: (id) => dispatch(addPersonage(id)),
      deletePersonage: (id) => dispatch(deletePersonage(id))
   }
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
}
}
 
 export default connect(mapStateToProps, mapDispatchToProps)(Card);
