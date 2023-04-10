function validar() {
  let nome = document.getElementById("nome");
  let descricao_p = document.getElementById("descricao");
  let servico = document.getElementById("servico");
  let tarifa = document.getElementById("tarifa");
  let vencimento = document.getElementById("dt_vencimento");
  let pagamento = document.getElementById("forma_pagamento");

  let payload = {
    idReferencia: nome.value,
    descricao: descricao_p.value,
    dataVencimento: vencimento.value,
    valorServico: Number(servico.value),
    valorTarifa: Number(tarifa.value),
    tipos: [pagamento.value],
    urlRetorno:
      "https://pagtesouro.tesouro.gov.br/api/psp-credenciados/retorno",
    urlNotificacao:
      "https://autenticacao-pagtesouro-epag.estaleiro.serpro.gov.br/api/psp-credenciados/notificacoes",
  };

  let requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    body: JSON.stringify({ payload }),
  };

  // debugger;

  fetch(
    "https://<dominio_sandbox_do_psp>/api/pagtesouro/v1/pagamentos",
    requestOptions
  )
    .then(() => {
      alert("Dados validados com sucesso!");
    })
    .catch(() => {
      alert("Dados inválidos, por favor verifique!");
    });
}
