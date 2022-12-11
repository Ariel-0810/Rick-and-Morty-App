

export const ADD_PERSONAGE = 'ADD_PERSONAGE';
export const DELETE_PERSONAGE = 'DELETE_PERSONAGE';
export const FILTER_CARDS = 'FILTER_CARDS';
export const ORDER_CARDS = 'ORDER_CARDS';
//export const GET_STORE_PERSONAGE = 'GET_STORE_PERSONAGE'

export function addPersonage(personage) {
    return {
        type: ADD_PERSONAGE,
        payload: personage,
    }
}

export function deletePersonage(id){
    return {
        type: DELETE_PERSONAGE,
        payload: id,
    }
}

export function filterCards(status){
    return {
        type: FILTER_CARDS,
        payload: status,
}
}

export function orderCards(id){
    return {
        type: ORDER_CARDS,
        payload: id,
    }
}

// export function getStorePersonage(){
//     return function (dispatch){
//     axios
//     .get("http://localhost:3001/store")
//     .then(r => r.data.name)
//     .then(d => dispatch({
//     type:GET_STORE_PERSONAGE,
//     payload: d
//     }))
//     }
// }