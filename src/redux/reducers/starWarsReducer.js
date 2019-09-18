import axios from "axios";


//initialState
const initialState ={
    characters: [],
    loading: false,
}

//constants

const GET_CHARACTERS = "GET_CHARACTERS";

//action creators

export function getStarWarsCharacters() {
    return {
    type: GET_CHARACTERS,
    payload: axios.get('https://swapi.co/api/people')
    }
}

//reducer

export default function reducer(state= initialState, action) {
    switch(action.type) {
        case `${GET_CHARACTERS}_FULFILLED`:
            return{
                ...state,
                characters: action.payload.data.results,
                loading: false
            }
            case `${GET_CHARACTERS}_PENDING`:
                return{
                    ...state,
                    loading: true
                }
        default: return state;
    }
}