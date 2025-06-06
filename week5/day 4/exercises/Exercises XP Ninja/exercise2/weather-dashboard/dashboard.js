import readline from "readline";
import { getWeather } from "./weather.js";

export function startDashboard() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("enter a city name (London, Paris, Tokyo, NewYork): ", (city) => {
        getWeather(city.trim());
        rl.close();
    });
}
