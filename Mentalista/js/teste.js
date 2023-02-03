let nome = document.getElementById("player");
let input = document.getElementById('chute');

var button  = document.getElementById("button")
var todosChutes = [ ];

button.onclick = function(){
  todosChutes.push(input.value); 
  console.log(todosChutes);
  return todosChutes;
}
  

// var campo = document.querySelector("input")
// var but = document.querySelector("button")
// var medicamentos = [];

// but.onclick = function(){
//     medicamentos.push(campo.value);
//     console.log(medicamentos);
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
}