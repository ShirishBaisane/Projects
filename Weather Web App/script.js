let unix_timestamp = 1549312452
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
let formattedTime = (timestamp) => {
    let date = new Date(timestamp * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    let formattedTime = hours + ':' + minutes.substring(-2) + ':' + seconds.substring(-2);
    return formattedTime;
}
console.log(formattedTime);


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd779c242e0mshea3850672652a6ep1cd6e2jsnc4c992eda203',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = formattedTime(response.sunrise);
            sunset.innerHTML = formattedTime(response.sunset);
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Pune")

// for London

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        cloud_pctLondon.innerHTML = response.cloud_pct
        tempLondon.innerHTML = response.temp
        feels_likeLondon.innerHTML = response.feels_like
        humidityLondon.innerHTML = response.humidity
        wind_speedLondon.innerHTML = response.wind_speed
        sunriseLondon.innerHTML = formattedTime(response.sunrise)
        sunsetLondon.innerHTML = formattedTime(response.sunset)
    })
    .catch(err => console.error(err));

// for New York

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        cloud_pctNewYork.innerHTML = response.cloud_pct
        tempNewYork.innerHTML = response.temp
        feels_likeNewYork.innerHTML = response.feels_like
        humidityNewYork.innerHTML = response.humidity
        wind_speedNewYork.innerHTML = response.wind_speed
        sunriseNewYork.innerHTML = formattedTime(response.sunrise)
        sunsetNewYork.innerHTML = formattedTime(response.sunset)
    })
    .catch(err => console.error(err));

// for Tokyo

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        cloud_pctTokyo.innerHTML = response.cloud_pct
        tempTokyo.innerHTML = response.temp
        feels_likeTokyo.innerHTML = response.feels_like
        humidityTokyo.innerHTML = response.humidity
        wind_speedTokyo.innerHTML = response.wind_speed
        sunriseTokyo.innerHTML = formattedTime(response.sunrise)
        sunsetTokyo.innerHTML = formattedTime(response.sunset)
    })
    .catch(err => console.error(err));

// for Kolkata

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        cloud_pctKolkata.innerHTML = response.cloud_pct
        tempKolkata.innerHTML = response.temp
        feels_likeKolkata.innerHTML = response.feels_like
        humidityKolkata.innerHTML = response.humidity
        wind_speedKolkata.innerHTML = response.wind_speed
        sunriseKolkata.innerHTML = formattedTime(response.sunrise)
        sunsetKolkata.innerHTML = formattedTime(response.sunset)
    })
    .catch(err => console.error(err));

// for Sydney

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sydney', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        cloud_pctSydney.innerHTML = response.cloud_pct
        tempSydney.innerHTML = response.temp
        feels_likeSydney.innerHTML = response.feels_like
        humiditySydney.innerHTML = response.humidity
        wind_speedSydney.innerHTML = response.wind_speed
        sunriseSydney.innerHTML = formattedTime(response.sunrise)
        sunsetSydney.innerHTML = formattedTime(response.sunset)
    })
    .catch(err => console.error(err));

// for Dubai

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        cloud_pctDubai.innerHTML = response.cloud_pct
        tempDubai.innerHTML = response.temp
        feels_likeDubai.innerHTML = response.feels_like
        humidityDubai.innerHTML = response.humidity
        wind_speedDubai.innerHTML = response.wind_speed
        sunriseDubai.innerHTML = formattedTime(response.sunrise)
        sunsetDubai.innerHTML = formattedTime(response.sunset)
    })
    .catch(err => console.error(err));
