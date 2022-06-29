function mudaP() {
    let mudaParagrafo = document.getElementsByTagName('p')[1];
    mudaParagrafo.innerHTML = 'Quero estar ganhando bem e trabalhando em uma empresa que valorize seus funcionários';
   }
   mudaP();

    function mudaCor() {
    let mudarCor = document.getElementsByClassName('main-content')[0];
    mudarCor.style.backgroundColor = 'rgb(76, 164, 109)';
   }
   mudaCor();

   function mudaCor2() {
    let mudarCor2 = document.getElementsByClassName('center-content')[0];
    mudarCor2.style.backgroundColor = 'rgb(255, 255, 255)';
   }
   mudaCor2();

   function corrigir(){
    let corrigirTexto = document.getElementsByTagName('h1')[0];
    corrigirTexto.innerText = 'Exercício 5.1 - Java Script';
   }
   corrigir();

   function tudoMaiusculo(){
    let colocarMaiusculo = document.getElementsByTagName('p');
    
    for (let cm of colocarMaiusculo){
        colocarMaiusculo.push(colocarMaiusculo[index]);
        
    }
    colocarMaiusculo.innerHTML = colocarMaiusculo.innerHTML.toUpperCase();}
   
   tudoMaiusculo();

   function exibir(){
    let exibirConteudo = document.getElementsByTagName('p');
    for (let index = 0; index < exibirConteudo.length; index += 1){
    console.log(exibirConteudo[index].innerHTML);}
    }
    exibir();
