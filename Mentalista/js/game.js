let nome = document.getElementById("player");
let form = document.querySelector('form');
let input = document.querySelector('input');
let reposta = document.getElementById('resposta');

function game() {
  var section = document.querySelector('section');
  var numeroSecreto = parseInt(Math.random() * 1001);
  let chute = parseInt(document.querySelector('input').value);
  console.log(chute)
  console.log(numeroSecreto)

  while (chute != numeroSecreto) {
    var ContadorTentativas = 1;
    var tentativasPossiveis = 10;
    if (chute > numeroSecreto) {
      section.innerHTML = section.innerHTML + '<h1 id="reposta">Quase lá! O número secreto é maior que '+chute+'</h1>';
    } else if (chute < numeroSecreto) {
      section.innerHTML = section.innerHTML + '<h1 id="reposta">Quase lá! O número secreto é menor que '+chute+'</h1>';
    } else if (chute == numeroSecreto) {
      section.innerHTML = section.innerHTML + '<h1 id="reposta">Acertou!!!!</h1>';
    }

    if (ContadorTentativas == tentativasPossiveis) {
      section.innerHTML = section.innerHTML + '<h1 id="reposta">!GAME OVER! O número que pensei foi ' + numeroSecreto + '</h1>';
      break
    }
    ContadorTentativas++;
  }
}


const startTimer = () => {

  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 10);

}
// const game = () => {
// let numeroSecreto = parseInt(Math.random() * 1001);
// let tentativasPossiveis = 10;
// let ContadorTentativas = 1;

//   while(chute != numeroSecreto){
//     if (chute == numeroSecreto) {
//       alert('Acertou!')
//     } else if (chute > numeroSecreto) {
//       alert('Quase lá... o número secreto é menor que ' + chute + '\n Você já tentou ' + ContadorTentativas + ' vezes')
//     } else if (chute < numeroSecreto) {
//       alert('Quase lá... o número secreto é maior que ' + chute + '\n Você já tentou ' + ContadorTentativas + ' vezes')
//     }

//     if (ContadorTentativas == tentativasPossiveis) {
//       alert('!GAME OVER! \n' + 'O número que pensei foi ... ' + numeroSecreto)
//       break
//     }
//     ContadorTentativas++
//   }


// }



// const startTimer = () => {

//   this.loop = setInterval(() => {
//     const currentTime = +timer.innerHTML;
//     timer.innerHTML = currentTime + 1;
//   }, 1000);

// }



const validateInput = ({ target }) => {
  if (target.value.length > 0) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
}
input.addEventListener('input', validateInput);

window.onload = () => {
  nome.innerHTML = 'Bem vindo(a), ' + localStorage.getItem('player') + '!';
  game();
}