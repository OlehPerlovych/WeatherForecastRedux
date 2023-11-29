import {api_key, base_url} from "../utils/constants";

export const getWeather = async (city) => {
    const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
    return await response.text();
};
