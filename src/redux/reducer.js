import { ADD_FAV, REMOVE_FAV } from "./action-types"


const initialState = {
    myFavorites : []
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites : [...state.myFavorites, action.payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites : state.myFavorites.filter((character) => character.id !== action.payload)
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