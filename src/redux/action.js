import {ADD_FAVORITES, DELETE_FAVORITE, FILTER, ORDER} from './action-types'

export const addFavorites = (character)=>{
    
    return {
        type: ADD_FAVORITES,
        payload: character
    }
}

export const deleteFavorite = (id)=>{
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
}

export const filterCards = (gender)=>{
    console.log('se esta filtrando de manera /',gender);
    return {
        type: FILTER,
        payload: gender
    }
}
//se usara un a u o para determinar si sera ascendente o descendente
export const orderCards = (asDes)=>{
    console.log('se esta ordenando de manera /',asDes);
    return {
        type: ORDER,
        payload: asDes
    }
}