import { combineReducers } from "redux";
import documentReducer from './documentReducer';
import contactReducer from './documentReducer';
import educationReducer from './documentReducer';

const rootReducer = combineReducers({
    document: documentReducer,
    contact: contactReducer,
    education: educationReducer
});

export default rootReducer;