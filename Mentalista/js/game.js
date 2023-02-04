let nome = document.getElementById("player");
let button = document.getElementById("button");


button.onclick = function game(){
let numeroAleatorio = Math.floor(Math.random() * (1001 - 1) + 1);
let tentativasRestantes = 10;

while (tentativasRestantes > 0) {
  let chute = prompt(`Tente adivinhar o número entre 1 e 1000. Você ainda tem ${tentativasRestantes} tentativas.`);

  if (chute == numeroAleatorio) {
    alert(`Você acertou o número em ${tentativasRestantes} tentativas! Parabéns!`);
    break;
  } else if (chute < numeroAleatorio) {
    alert("O número secreto é maior que "+ chute);
  } else {
    alert("O número secreto é menor que" + chute);
  }
  tentativasRestantes--;
}
if (tentativasRestantes === 0) {
  alert(`!GAME OVER!\n\nO número correto era ${numeroAleatorio}.`);
}
}

window.onload = () => {
  nome.innerHTML = 'Olá, ' + localStorage.getItem('player') + '!';
};



