let nomeDoJogador = "Elegante";
let horasPorDia = 12;
let diasJogados = 12;
const totalDeHoras = horasPorDia * diasJogados;
let playerName = document.querySelector(".playerName");
let resultado = document.querySelector(".resultado");
let btnDark = document.querySelector(".btnDark");
btnDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

playerName.textContent = `Relatorio deo jogador ${nomeDoJogador}`;

resultado.textContent = `Total de horas jogadas : ${totalDeHoras} horas`;

if (totalDeHoras > 100) {
  resultado.style.color = "red";
} else {
  resultado.style.color = "green";
}
