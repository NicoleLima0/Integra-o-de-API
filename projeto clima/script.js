// Variáveis que pegam o valor do HTML e chave da API
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

searchBtn.addEventListener("click", (e) => {
  // Adicionei um evento de clicar no botão para pesquisar, o valor do input é armazenado na const city
  const city = cityInput.value;
  e.preventDefault(); // impede que o evento padrão ocorra (ex.: seguir um link);
  clima(city); // chamei a função clima com o parâmetro city
});

cityInput.addEventListener("keyup", (e) => {
  // Evento adicionado que ao clicar no enter funciona a pesquisa
  if (e.code === "Enter") {
    const city = e.target.value;
    clima(city);
  }
});

const clima = async (city) => {
  const dados = await dadosclima(city);
  const apiCountryURL =
    `https://flagsapi.com/` + dados.sys.country + `/flat/64.png`;
  const iconURL =
    `http://openweathermap.org/img/wn/` + dados.weather[0].icon + `.png`;
  // Setando os dados do javascript para mostrar na tela do usuário
  cidade.innerText = dados.name;
  temperatura.innerText = parseInt(dados.main.temp); // parseInt = retorna a temperatura sem o valor após a vírgula
  descricao.innerText = dados.weather[0].description;
  pais.setAttribute("src", apiCountryURL); // setAttribute() Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico.
  umidade.innerText = `${dados.main.humidity}%`;
  vento.innerText = `${dados.wind.speed}km/h`;
  icon.setAttribute("src", iconURL);
  containerclima.classList.remove("hide");
};

// função utilizando arrow function = sintaxe mais simples
const dadosclima = async (city) => {
  // async = assíncrono, ou seja espera os dados "chegarem" antes de utilizar esse resultado.
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`; // URL de retorno da API
  const res = await fetch(URL); // await = JavaScript vai aguardar até que a Promise finalize (Só é possível usar await em funções declaradas
  const dados = await res.json(); // com a palavra-chave async) Promise = promessa do retorno destes dados.
  if (dados.cod === "404") {
    alert("Esta cidade não existe, por favor verifique!");
  } else {
    return dados;
  }
};
