import { ADD_FAVORITES, DELETE_FAVORITE, FILTER, ORDER } from './action-types'
import axios from "axios";

export const addFavorites = (character) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return async (dispatch) => {
         const { data } = await axios.post(endpoint, character)
         return dispatch({
            type: ADD_FAVORITES,
            payload: data,
         });
      };
      // eslint-disable-next-line no-unreachable
   } catch (error) {
      return { error: error.message };
   }



}

export const deleteFavorite = (id) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return async (dispatch) => {
         const { data } = await axios.delete(endpoint)
         return dispatch({
            type: DELETE_FAVORITE,
            payload: data,
         });
      };
   } catch (error) {
      return { error: error.message };
   }
}

export const filterCards = (gender) => {
   return {
      type: FILTER,
      payload: gender
   }
}
//se usara un a u o para determinar si sera ascendente o descendente
export const orderCards = (asDes) => {
   return {
      type: ORDER,
      payload: asDes
   }
}