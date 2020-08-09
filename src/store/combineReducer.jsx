import { combineReducers } from "redux";
import weatherReducer from "../services/weather/weatherReducer";



const rootReducer = combineReducers({
    weatherReducer
});

export default rootReducer;