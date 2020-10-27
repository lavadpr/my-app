import { combineReducers } from "redux";

const size = (state = 0, action) => {
    if (action.type === "UPDATE_COUNTER_SIZE") {
        return action.payload;
    }

    return state;
};

export default combineReducers({
    size
});