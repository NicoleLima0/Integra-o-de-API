function verificar() {
  const url = "https://economia.awesomeapi.com.br/last/";
  const moedaSelecionada = document.getElementById("cotacaomoeda").value;
  const tipo_moeda = moedaSelecionada;

  fetch(url + tipo_moeda)
    .then(function verificar(response) {
      return response.json();
    })
    .then(function verificar(data) {
      debugger
      let estaData = new Date(data[moedaSelecionada].create_date);
      document.getElementById("cotacaomoeda").innerHTML = moedaSelecionada.name;
      document.getElementById("thisdate").innerHTML = estaData.toLocaleString();
      document.getElementById("maxvalue").innerHTML = parseFloat(
        data[moedaSelecionada].high
      ).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
      document.getElementById("minvalue").innerHTML = parseFloat(
        data[moedaSelecionada].high
      ).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    });
} 
