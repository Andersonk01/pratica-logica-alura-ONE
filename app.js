alert("Boas vindas ao jogo do número secreto");

let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;

while (numeroSecreto != chute) {
  chute = prompt("Escolha um número entre 1 e 100");

  if (chute == numeroSecreto) {
    break;
  } else {
    tentativas++;
    if (chute > numeroSecreto) {
      console.log("O número secreto é menor que o chute");
    } else {
      console.log("O número secreto é maior que o chute");
    }
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`
);
