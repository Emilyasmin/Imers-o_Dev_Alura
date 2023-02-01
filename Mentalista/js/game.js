let input = document.getElementById('chute');
let button = document.getElementById('button');
let reposta = document.getElementById('resposta');
let form = document.querySelector('form');
let nome = document.getElementById("player");

let numeroSecreto = parseInt(Math.random() * 1001);
let tentativasPossiveis = 10;
let ContadorTentativas = 1;


// while(chute != numeroSecreto) {
//   var chute = input.value;

//   if (chute == numeroSecreto) {
//     alert('Acertou!')
//   } else if (chute > numeroSecreto) {
//     alert('Quase lá... o número secreto é menor que ' + chute + '\n Você já tentou ' + ContadorTentativas + ' vezes')
//   } else if (chute < numeroSecreto) {
//     alert('Quase lá... o número secreto é maior que ' + chute + '\n Você já tentou ' + ContadorTentativas + ' vezes')
//   }

//   if (ContadorTentativas == tentativasPossiveis){
//     alert('!GAME OVER! \n' + 'O número que pensei foi ... ' + numeroSecreto)
//     break
//   }
//   ContadorTentativas ++
// }






const validateInput = ({ target }) => {
  if (target.value.length > 0) {
    button.removeAttribute('disabled');
  }else{
    button.setAttribute('disabled', '');
  } 
}
input.addEventListener('input', validateInput);


