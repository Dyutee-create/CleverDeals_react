import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loginReducer from "./reducer";

const rootReducer = combineReducers({
    travelersLogin: loginReducer,
    form: formReducer
});

export default rootReducer;
