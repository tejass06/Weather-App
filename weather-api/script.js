async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = " your api key";
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  const res = await fetch(url);
  const data = await res.json();

  const result = document.getElementById("result");

  if (data.success === false || !data.current) {
    result.innerHTML = `<div class="alert alert-danger">City not found or API error.</div>`;
  } else {
    result.innerHTML = `
      <h4>${data.location.name}, ${data.location.country}</h4>
      <p><strong>🌡️ ${data.current.temperature} °C</strong></p>
      <p>${data.current.weather_descriptions[0]}</p>
      <img src="${data.current.weather_icons[0]}" alt="Weather Icon" />
    `;
  }
}