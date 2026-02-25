// criando variaveis e pegando os elementos do html
let inputName = document.querySelector(".name-input");
let inputNumber = document.querySelector(".time-input");

// Aqui é o button, qunado o usario clicar nele vai aparecer o resultado
let calcular = document.querySelector(".calcular");

// resultado nada mais é do que o span, aonde vai aparecer o total de xp...
// pode ser span ou qualquer outra fonte de texto..
let resultado = document.querySelector(".resultado");
// Aqui é a logica da coisa toda, peguei o "buttom" e adcionei um evento de clicar
// quando o usario clicar nesse botão roda essa logica abaixo e aparece as informações desse usario

calcular.addEventListener("click", () => {
  // Aqui crei uma variavel dentro de um "função" (pode e deve fazer isso)
  // variavel name pegando o valor que a pessoa digitar dentro do input name, e fazendo o mesmo com hours, pegando o valor que a pessoa digitar dentro do input hours
  // a variavel total de xp, nada mais é que a multiplicação? da quantidade de horas que o usario digitar x 10 que é um numero qualquer
  let name = inputName.value;
  let hours = inputNumber.value;
  let totalXp = hours * 3;

  // Aqui to pegando o "resultado" ou seja o span e trocando o textcontent dele originalmente ele esta setado como 0 days apartir do momento que o usuario clica muda as informações para o total de xp!
  // Isso aqui > `${name}, seu xp foi de ${totalXp}` nada mais é do que uma tamplate string É uma forma de montar strings usando crase ( ) em vez de aspas, permitindo: interpolação de variaveis com ${}, quebra de linha automática e expressões dentro da string ou seja dizer qualquer coisa, vamos colocar assim.

  resultado.textContent = `${name}, seu xp foi de ${totalXp}`;

  // aqui é uma logica de if e else dizendo que se o total de xp for mais que 100 mudar o estilo do resutlado/span para red se for menor mudar para verde.
  if (totalXp > 100) {
    resultado.style.color = "red";
  } else {
    resultado.style.color = "green";
  }

  // para limpar o que o usuario digitou eu passo o value do input como "", fazer uma string vazia
  inputName.value = "";
  inputNumber.value = "";
});

let btnDark = document.querySelector(".btnDark");
btnDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
