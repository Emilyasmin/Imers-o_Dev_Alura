alert("Você só pode tentar 10 vezes");


var numeroSecreto = parseInt(Math.random() * 1001);
var chute = prompt("Mentalize um número de 0 a 1000");

if (chute == numeroSecreto) {

    alert("VOCÊ ACERTOU DE PRIMEIRA, THE BEST MENTALISTA");

}
var contador = 1;
while (chute != numeroSecreto) {

    if (chute > numeroSecreto) {

        alert("Mentalizou errado, o " + chute + " não é o correto, ele é menor");

    }else if (chute < numeroSecreto) {

        alert("Mentalizou errado, o " + chute + " náo é o correto, ele é maior");

    }

    alert("Você tentou " + contador + " vezes");

    if (contador == 10) {

        break;

    }

    contador = contador + 1;


    chute = prompt("Tente novamente meu caro mentalista");

    if (chute == numeroSecreto) {

        alert("Finalmente acertou, " + chute + " é o número certo");
        alert("Você tentou " + contador + " vezes");

    }

}



// var numSecreto = parseInt(Math.random() * 1001);
// var quantChute = 0;
// // se o chute for igual ao numero secreto alert de acertou

// while(chute != numSecreto ){
//   var chute = parseInt(prompt('Digite um número entre 0 e 1000'));
//   var quantMaxima = 15;
  
  
//     if(chute == numSecreto ){
//       alert('acertou!')
      
//     }else if(chute > numSecreto){
//       alert('Errou! O número secreto é menor que ' + chute)
  
      
//     }else if(chute < numSecreto){
//       alert('Errou! o número secreto é maior que ' + chute)
      
//     }
     
 
//     quantChute = quantChute + 1
//     var conta = quantMaxima - quantChute;
      
  
//   if (quantChute == 15){
//     alert ('Você exedeu a quantidade de tentativas! O número era: ' + numSecreto);
//     break
    
//   }else if(quantChute == 10){
//     alert ('Faltam 5 tentativas');
  
//   }else{
//     alert('Você já fez ' + quantChute + ' chutes!' + ' Te restam ' + conta);
//   }
  
// }
