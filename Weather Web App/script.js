const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd779c242e0mshea3850672652a6ep1cd6e2jsnc4c992eda203',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Nashik', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));