import { combineReducers } from "redux";

const size = (state = 0, action) => {
    if (action.type === "UPDATE_COUNTER_SIZE") {
        return action.payload;
    }

    return state;
};

const reducers = combineReducers({
    size
});

export default reducers;