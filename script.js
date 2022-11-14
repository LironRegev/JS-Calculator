// Variables

const serverUrl = "http://localhost:5050/calc";
let calculate = document.querySelector("#calculate");

// On calculate click

document.addEventListener("click", function (event) {
  if (!event.target.matches("#calculate")) return;
  var firstInput = document.querySelector(".firstInput").value;
  let secondInput = document.querySelector(".secondInput").value;
  let operator = document.querySelector(".operator").value;
  calculateByServer(firstInput, secondInput, operator);
});

// Call to server

async function calculateByServer(first, second, operator) {
  var data = { first, second, operator };
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", serverUrl, false);
  xmlHttp.setRequestHeader("Content-type", "application/json");
  xmlHttp.send(JSON.stringify(data));
  const res = xmlHttp.response;
  const parsedRes = JSON.parse(res);
  console.log(parsedRes);

  const resultElement = document.querySelector(".answer");
  resultElement.innerHTML = `<strong>${parsedRes.num}</strong>`;
  resultElement.style.color = `${parsedRes.color}`;
}
