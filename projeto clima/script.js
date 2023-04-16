const apiKey = "230734b56e88958b69b5cdb56e9251fa";
const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");
const cidade = document.querySelector("#city");
const temperatura = document.querySelector("#temperature span");
const descricao = document.querySelector("#description");
const pais = document.querySelector("#country");
const umidade = document.querySelector("#umidity span");
const vento = document.querySelector("#wind span");
const icon = document.querySelector("#weather-icon");
const containerclima = document.querySelector("#weather-data");

const dadosclima = async (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
  const res = await fetch(URL);
  const dados = await res.json();
  if (dados.cod === "404") {
    alert("Esta cidade não existe, por favor verifique!");
  } else {
    return dados;
  }
};

const clima = async (city) => {
  const dados = await dadosclima(city);
  const apiCountryURL =
    `https://flagsapi.com/` + dados.sys.country + `/flat/64.png`;
  const iconURL =
    `http://openweathermap.org/img/wn/` + dados.weather[0].icon + `.png`;
  cidade.innerText = dados.name;
  temperatura.innerText = parseInt(dados.main.temp);
  descricao.innerText = dados.weather[0].description;
  pais.setAttribute("src", apiCountryURL);
  umidade.innerText = `${dados.main.humidity}%`;
  vento.innerText = `${dados.wind.speed}km/h`;
  icon.setAttribute("src", iconURL);
  containerclima.classList.remove("hide");
};

searchBtn.addEventListener("click", (e) => {
  const city = cityInput.value;
  e.preventDefault();
  clima(city);
});

cityInput.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    const city = e.target.value;
    clima(city);
  }
});
