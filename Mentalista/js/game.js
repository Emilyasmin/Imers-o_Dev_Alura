let nome = document.getElementById("player");
let form = document.querySelector('form');
let input = document.querySelector('input');
let reposta = document.getElementById('resposta');

function game() {
  var numeroSecreto = parseInt(Math.random() * 1001);
  var chute = parseInt(document.querySelector('input').value);
  var section = document.querySelector('section');
  var iterador = 0;
  console.log(numeroSecreto);

  while (chute != numeroSecreto) {
    if (iterador != 0) {
      section.innerHTML = section.innerHTML + '<h1 id="reposta">Você já fez' + iterador + 'tentativas!</h1>';
    }

    if (chute < numeroSecreto) {
      section.innerHTML = section.innerHTML + '<h1 id="reposta">Quase lá! O número secreto é maior que ' + chute + '</h1>';
    } else if (chute > numeroSecreto) {
      section.innerHTML = section.innerHTML + '<h1 id="reposta">Quase lá! O número secreto é menor que ' + chute + '</h1>';
    }
    iterador += 1;
    break
  }
  if (chute == numeroSecreto) {
    document.h1.innerHTML = " ";
    section.innerHTML = section.innerHTML + '<h1 id="reposta">Acertou!!!!</h1>';
  }
}

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






// var numeroSecreto = parseInt(Math.random() * (1001 - 1) + 1);
// var iterador = 0;
// console.log(numeroSecreto);
// while (chute != numeroSecreto) {

//   if (iterador != 0) {
//     alert('Você já fez' + iterador + 'tentativas!')
//   }

//   var chute = prompt('Digite um número entre 1 e 1000');

//   if (chute == numeroSecreto) {
//     alert('Acertou!');
//   } else if (chute > numeroSecreto) {
//     alert('O número secreto é menor que ' + chute);
//   } else if (chute < numeroSecreto) {
//     alert('O número secreto é maior que ' + chute);
//   }

//   iterador += 1;
// }
