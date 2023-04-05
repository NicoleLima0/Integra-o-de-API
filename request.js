window.onload = function () {
  sendSMS("teste", "(ddd)99999999");
};

function sendSMS(message, number) {
  let APIkey = "787337";
  let baseURL = "https://api.nvoip.com.br/v2/sms";
  let URL = baseURL + "?napikey=" + APIkey;
  var headers = new Headers();
  headers.append("Content-Type", application / json);

  var bodyParameters = {
    numberPhone: number,
    message: message,
    flashSms: false,
  };

  var parameters = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(bodyParameters),
  };

  fetch(URL, parameters)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (err) {
      console.error(err);
    });
}
