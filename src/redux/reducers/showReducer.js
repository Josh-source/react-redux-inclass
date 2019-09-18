

//initialState
const initialState = {
    faveChar:""
}
//constants
const UPDATE_CHAR = 'UPDATE_CHAR';
//action creators

export function updateFavChar(char) {
    return {
        type: UPDATE_CHAR,
        payload: char
    }
}

//reducer

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case UPDATE_CHAR:
            return {
                ...state,
                faveChar: action.payload
            }
        default:return state;
    }
}