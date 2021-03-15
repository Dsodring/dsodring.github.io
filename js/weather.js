const weatherConditionEl = document.querySelector("#weather-condition");
const playlistEl = document.querySelector("#playlist");

function myFunction(selTag) {
	const city = selTag.options[selTag.selectedIndex].value;

	const location = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=44eaaeeb2804d3347067dce35bb5299e`;

	async function getWeather() {
		const response = await fetch(location);
		const data = await response.json();

		const temp = data.main.temp;
		const sky = data.weather[0].description;
		const country = data.sys.country;
		const place = data.name;

		document.getElementById(
			"forecast"
		).textContent = `It is currently ${sky} with a temperature of ${temp}C in ${place}, ${country}.`;

		const weather = data.weather[0].main;

		if (weather == "Clear") {
			weatherConditionEl.textContent =
				"Seeing as the sun is out, here is a playlist to enjoy the nice weather!";
			playlistEl.src =
				"https://open.spotify.com/embed/playlist/37i9dQZF1DX1gRalH1mWrP";
		} else if (weather == "Clouds") {
			weatherConditionEl.textContent =
				"Seeing as it is cloudy outside, here is a playlist to get you through the boring weather.";
			playlistEl.src =
				"https://open.spotify.com/embed/playlist/3oh3NmpgHy2leLcu7oobAr";
		} else if (weather == "Snow") {
			weatherConditionEl.textContent =
				"Brrr, it's snowing outside. Here's a playlist to keep you warm and cozy!";
			playlistEl.src =
				"https://open.spotify.com/embed/playlist/37i9dQZF1DX4H7FFUM2osB";
		} else {
			weatherConditionEl.textContent =
				"Better stay inside in this weather! Enjoy this playlist while drinking a nice cup of tea.";
			playlistEl.src =
				"https://open.spotify.com/embed/playlist/37i9dQZF1DXbvABJXBIyiY";
		}
	}

	getWeather();
}
