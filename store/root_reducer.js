import {RECEIVE_RESPONSE} from "./action";



const mainReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_RESPONSE:
            newState = action.data;
            return newState;
        default:
            return state;
    }
}

export default mainReducer;