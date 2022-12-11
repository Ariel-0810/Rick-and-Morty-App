import React from 'react';
import { connect } from 'react-redux';
import Card from '../card/Card';
import {useDispatch} from 'react-redux'
import { filterCards, orderCards } from '../../redux/actions';
import styles from './Favorites.css'


function Favorites({myFavorites}){
    const dispatch = useDispatch()

    function handleOrder (e){
        dispatch(orderCards(e.target.value))
    }

    function handleFilter (e){
        dispatch(filterCards(e.target.value))
    }

    return (
        <div className={styles.cardFav}>
            <div >
                <select onChange={handleOrder}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>        
        <div>
        {myFavorites.length > 0 ? myFavorites.map(e =>
            <Card
            id={e.id}
            key={e.id}
            name={e.name}
            gender={e.gender}
            image={e.image}
            />
        ) : <span>No hay personajes favoritos</span>}
        </div>
        </div>
    )
}



    function mapStateToProps(state){
        return {
            myFavorites: state.myFavorites
        }
    }

    export default connect(mapStateToProps)(Favorites)