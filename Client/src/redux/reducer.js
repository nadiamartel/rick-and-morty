import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types"


const initialState = {
    myFavorites : [],
    allCharacters : []
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites : [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites : state.myFavorites.filter((character) => character.id !== action.payload)
            }
        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter(character => character.gender === action.payload)
            return{
                ...state,
                myFavorites: allCharactersFiltered
                // myFavorites:
                // action.payload === "allCharacters"
                // ? [...state.allCharacters]
                // : allCharactersFiltered
            }
        case ORDER:
            // const allCharactersCopy = [...state.allCharacters] 
            return{
                ...state,
                myFavorites: action.payload === "A" 
                ? state.allCharacters.sort((a,b) => a.id - b.id)
                : state.allCharacters.sort((a,b) => b.id - a.id)
            }
        
        default:
            return{
                ...state
            }
    }

}

export default reducer; 

//linea 13: me guardo todo lo qur ya tiene el estado myfavorites y le concateno lo que me mandan por payload >> action.payload es un objeto
//linea 18: modifico el array myFavorites, 