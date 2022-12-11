import { ADD_PERSONAGE, DELETE_PERSONAGE, FILTER_CARDS, ORDER_CARDS } from './actions.js'

const initialState = {
    myFavorites: [],
    allCharacters: [],
 };

 function rootReducer (state = initialState, {type, payload}){
    switch(type){
        case ADD_PERSONAGE:
            return {
                ...state,
                myFavorites:[...state.myFavorites, payload],
                allCharacters:[...state.allCharacters, payload]
            }        
        case DELETE_PERSONAGE:
            const listFiltered = state.myFavorites.filter (ele => ele.id !== payload)
            return {
                ...state,
                myFavorites: listFiltered,
                allCharacters: state.myFavorites,
            }
        case FILTER_CARDS:
            return {
                ...state,
                myFavorites: state.allCharacters.filter((e) => e.gender === payload)
            }
        case ORDER_CARDS:
            if(payload === 'Ascendente'){
            return{
                ...state,
                myFavorites:[...state.myFavorites].sort((a, b) => a.id - b.id)
                }
            } else {
                return {
                ...state,
                myFavorites:[...state.myFavorites].sort((a, b) => b.id - a.id)
                }
            }
        default:
            return state
        };
}

export default rootReducer;