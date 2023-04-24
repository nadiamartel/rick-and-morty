import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";
import axios from "axios";

export const addFav = (character) => {
    // return{type: ADD_FAV, payload: character}
    const endpoint = 'http://localhost:3002/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        });
    };
};


export const removeFav = (id) => {
    // return { type: REMOVE_FAV, payload: id }
    const endpoint = 'http://localhost:3002/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.delete(endpoint).then(({ data }) => {
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        });
    };
};

export const filterCards = (gender) => {
    return {
        type: FILTER, payload: gender
    }
}

export const orderCards = (id) => {
    return {
        type: ORDER, payload: id
    }
}
