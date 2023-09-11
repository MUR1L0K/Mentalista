var numeroAleatório = parseInt(Math.random() * 11);
var numeroDeTentativas = 3;

function Chutar() {
  var numeroAleatorio = numeroAleatório;
  var chute = document.getElementById("valor");
  var texto = document.getElementById("resultado");

  if (numeroAleatório == chute.value) {
    texto.innerHTML = "Acertouu, o número era " + numeroAleatório + ".<br>";
    document.getElementById("botao").disabled = "true";
  } else if (chute.value >= 11 || chute.value < 0 || chute.value == "") {
    window.alert("[ERROR NÚMERO INVALIDO.]");
  } else if (chute.value < numeroAleatorio) {
    numeroDeTentativas--;
    texto.innerHTML =
      "Você errou, O número aleatório é maior que " +
      chute.value +
      ".<br> Você anida tem mais " +
      numeroDeTentativas +
      " tentativas.<br>";
  } else if (chute.value > numeroAleatório) {
    numeroDeTentativas--;
    texto.innerHTML =
      "Você errou, O número aleatório é menor que " +
      chute.value +
      ".<br> Você anida tem mais " +
      numeroDeTentativas +
      " tentativas.<br>";
  }
  if (numeroDeTentativas == 0) {
    texto.innerHTML =
      "As tentativas acabaram, o número certo era " + numeroAleatorio + ".";
    document.getElementById("botao").disabled = "true";
  }

  chute.value = "";
}
