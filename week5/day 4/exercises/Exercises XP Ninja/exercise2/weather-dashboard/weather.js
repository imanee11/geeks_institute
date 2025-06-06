import chalk from "chalk";

const fakeWeatherData = {
    london: { temp: 15, description: "cloudy" },
    paris: { temp: 20, description: "sunny" },
    tokyo: { temp: 25, description: "rainy" },
    newYork: { temp: 18, description: "windy" },
};

export function getWeather(city) {
    const weather = fakeWeatherData[city];
    if (!weather) {
        console.log(chalk.red("sorry, no weather data for that city."));
        return;
    }

    console.log(chalk.blue.bold(`Weather in ${city}:`));
    console.log(chalk.yellow(`Temperature: ${weather.temp}°C`));
    console.log(chalk.green(`Description: ${weather.description}`));
}
