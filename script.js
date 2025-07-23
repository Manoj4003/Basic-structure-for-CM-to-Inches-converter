function convert() {
  let cmValue = Number(document.getElementById("cmInput").value);
  let inches = cmValue / 2.54;
  let result = document.getElementById("result");
  result.innerHTML = inches.toFixed(2) + " Inches";
}

function resetValues() {
  document.getElementById("cmInput").value = "";
  document.getElementById("result").innerHTML = "";
}
