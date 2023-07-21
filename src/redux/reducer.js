import {ADD_FAVORITES, DELETE_FAVORITE, FILTER, ORDER} from './action-types'

const initialState = {
    myFavorites :[],
    allCharacters : []
}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_FAVORITES:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: state.allCharacters.filter(char => char.id !== action.payload.id)
              };
        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload),
                allCharacters: [...state.allCharacters, state.myFavorites.find(char => char.id === action.payload)]
              };
            
        case FILTER:
            if(action.payload === 'All'){
                return{
                    ...state,
                    myFavorites: state.allCharacters
                }
            }
            return {
                ...state,
                myFavorites: state.allCharacters.filter((char)=>char.gender === action.payload)
            }
        
        case ORDER:
            let sorter;
            if(action.payload === 'A'){
                sorter= (a,b) => a.id - b.id
            } else if(action.payload === 'D'){
                sorter = (a,b) =>b.id -a.id
            } else {
                return {
                    ...state
                }
            }
            const ordered = state.allCharacters.sort(sorter)
            return {
                ...state,
                myFavorites: ordered
            }
        
        default:
            return {
                ...state
            }
    }

}

export default reducer;