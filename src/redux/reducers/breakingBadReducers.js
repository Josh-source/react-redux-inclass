import axios from 'axios';

const initialState = {
    characters: [],
    loading: false
}

const GET_BBCHARACTERS = "GET_BBCHARACTERS";

export function getBreakingBadCharacters() {
    return {
        type: GET_BBCHARACTERS,
        payload: axios.get("https://breakingbadapi.com/api/characters")
    }
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case `${GET_BBCHARACTERS}_FULFILLED`:
            return{
                ...state,
                characters:action.payload.data,
                loading:false
            }
            case `${GET_BBCHARACTERS}_PENDING`:
                return{
                    ...state,
                    loading: true
                }
            default: return state;
    }
}