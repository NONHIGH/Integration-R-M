import {ADD_FAVORITES, DELETE_FAVORITE, FILTER, ORDER} from './action-types'

const initialState = {
  myFavorites :[],
  allCharacters : []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FAVORITES:
        console.log('se agrego ->', action.payload);
        return {
          ...state,
          allCharacters: [...state.allCharacters, action.payload],
          myFavorites: [...state.myFavorites, action.payload],
        };
      case DELETE_FAVORITE:
        console.log('se elimino el id ->', action.payload);
        return {
          ...state,
          allCharacters: [...state.allCharacters].filter(char => char.id !== action.payload),
          myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
        };
      case FILTER:
        if (action.payload === 'All') {
          return {
            ...state,
            myFavorites: state.allCharacters,
          };
        }else{
          return {
            ...state,
            myFavorites: [...state.allCharacters].filter((char) => char.gender === action.payload)
          };
        }
  
      case ORDER:
        console.log('se ordenaran por  ->', action.payload);
        if (action.payload === 'D') {
          return {
            ...state,
            myFavorites: [...state.allCharacters].sort((a,b)=> b.id - a.id)
          };
        } else if (action.payload === 'A') {
          return {
            ...state,
            myFavorites: [...state.allCharacters].sort((a,b)=> a.id - b.id)
          };
        } else {
          console.log('no se pudo ordenar o se ordeno por defecto ->', action.payload);
          return {
            ...state,
            myFavorites: [...state.allCharacters]
          };
        }

        
        
  
      default:
        console.log('algo esta pasando->', action);
        return state;
    }
  };
  
  export default reducer;