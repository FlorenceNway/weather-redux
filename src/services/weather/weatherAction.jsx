import { FETCH_WEATHER } from "./weatherActionTypes";
import axios from "axios";

const API = '803cce861e3e02ceb2620645f0c54ed8';

export const fetchWeather = (city) => {
    const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API}`;
    
    const request = axios.get(ROOT_URL);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}