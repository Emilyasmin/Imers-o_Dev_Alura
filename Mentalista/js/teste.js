let nome = document.getElementById("player");
let input = document.getElementById('chute');
var button = document.getElementById("button")
var todosChutes = [];


function valida_input() {
  if (input.value.length < 0) {
    alert('Por favor, preencha o campo input');
    input.focus();
    return false
  }
}

button.onclick = async function armazena_chute() {
  todosChutes.unshift(input.value)
  console.log(todosChutes)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 100)
  })
}

async function game() {
  await armazena_chute()
  // var numeroSecreto = parseInt(Math.random() * (1001 - 1) + 1)
  // var iterador = 0
  // var section = document.querySelector('section')
  // chute = todosChutes[0]
  // console.log(numeroSecreto)

  // while (chute != numeroSecreto) {
  //   if (iterador != 0) {
  //     section.innerHTML = section.innerHTML + '<h1 id="reposta">Você já fez' + iterador + 'tentativas!</h1>';
  //   }
  //   if (chute == numeroSecreto) {
  //     section.innerHTML = section.innerHTML + '<h1 id="reposta">Acertou!!!!</h1>';
  //   } else if (chute < numeroSecreto) {
  //     section.innerHTML = section.innerHTML + '<h1 id="reposta">Quase lá! O número secreto é maior que ' + chute + '</h1>';
  //   } else if (chute > numeroSecreto) {
  //     section.innerHTML = section.innerHTML + '<h1 id="reposta">Quase lá! O número secreto é menor que ' + chute + '</h1>';
  //   }
  //   iterador += 1;
  // }
  console.log("iep")
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
  game()
};















// function game(){
//   var numeroSecreto = parseInt(Math.random() * (1001 - 1) + 1)
//   var iterador = 0
//   var section = document.querySelector('section')
//   chute = todosChutes[0]
//   console.log(numeroSecreto)

//   while (chute != numeroSecreto) {
//     if (iterador != 0) {
//       section.innerHTML = section.innerHTML + '<h1 id="reposta">Você já fez' + iterador + 'tentativas!</h1>';
//     }
//     if (chute == numeroSecreto) {
//       section.innerHTML = section.innerHTML + '<h1 id="reposta">Acertou!!!!</h1>';
//     }else if (chute < numeroSecreto) {
//       section.innerHTML = section.innerHTML + '<h1 id="reposta">Quase lá! O número secreto é maior que ' + chute + '</h1>';
//     } else if (chute > numeroSecreto) {
//       section.innerHTML = section.innerHTML + '<h1 id="reposta">Quase lá! O número secreto é menor que ' + chute + '</h1>';
//     }
//     iterador += 1;
//   }
// }
