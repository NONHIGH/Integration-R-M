import { ADD_FAVORITES, DELETE_FAVORITE, FILTER, ORDER } from './action-types'

const initialState = {
  myFavorites: [],
  allCharacters: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };

    case DELETE_FAVORITE:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };

    case FILTER:
      if (action.payload === 'All') {
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      } else {
        return {
          ...state,
          myFavorites: [...state.allCharacters].filter((char) => char.gender === action.payload)
        };
      }

    case ORDER:
      if (action.payload === 'D') {
        return {
          ...state,
          myFavorites: [...state.myFavorites].sort((a, b) => b.id - a.id)
        };
      } else if (action.payload === 'A') {
        return {
          ...state,
          myFavorites: [...state.myFavorites].sort((a, b) => a.id - b.id)
        };
      } else {
        return {
          ...state,
          myFavorites: [...state.allCharacters]
        };
      }




    default:
      return state;
  }
};

export default reducer;