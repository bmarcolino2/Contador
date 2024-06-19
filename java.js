 // Estado da aplicação
 let contadorValue = 0;

 // Alteradores de estado da aplicação
 function aumentar() {
     contadorValue++;
     mostrarNaTela();
 }

 function diminuir() {
     contadorValue--;
     mostrarNaTela();
 }

 // Atualizar o valor do contador na tela
 function mostrarNaTela() {
     const contadorElemento = document.querySelector("#contador");
     contadorElemento.textContent = contadorValue;
 } 

 // Chamada inicial para exibir o valor do contador
 mostrarNaTela();