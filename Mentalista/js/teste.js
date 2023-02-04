let nome = document.getElementById("player");
let input = document.getElementById('chute');
var button = document.getElementById("button")
var todosChutes = [];

//Validar se o input não está vazio
function valida_input() {
  if (input.value.length < 0) {
    alert('Por favor, preencha o campo');
    input.focus();
    return false
  }
}
valida_input()

// Armazenar o valor que foi colocado no input dentro de uma array
button.onclick = async function armazena_chute() {
  if (valida_input == true) {
    todosChutes.unshift(input.value)
    console.log(todosChutes)
  }
}

//Coletar o primeiro dado do array e retornar de acordo com as condições
async function game() {
  await armazena_chute()
  console.log("iep")
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
}
game()

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
};




 


//Possivel HTMl para esse cod. em teste
  // <main class="container">
  //       <section class="content">
  //           <h1 id="player"></h1>
  //           <h1>Tente acertar em qual número estou pensando de 0 e 1000.</h1>
  //           <h2>Pense com cuidado, te darei apenas 10 chances!</h2>
  //           <form class="form">
  //               <input id="chute" type="number" placeholder="Tente a sorte!"  required>
  //               <button id="button" type="button" disabled>Tentar</button>
  //           </form>
  //          <h1 id="reposta"></h1> 
  //       </section>
  //   </main>