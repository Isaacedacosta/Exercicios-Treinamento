
const input = document.querySelector('#username');
// localizei o input no html e criei uma constante
const h1 = document.querySelector('h1')
// localizei o h1 no html e criei uma constante

input.addEventListener('input', function(){
    //criei uma funcao que escuta o evento input (momento que o formulario ou caixa de inputs recebe um valor)
    if(input.value == ''){h1.innerText = 'Enter Your Username'} 
    //conferi o valor dentro do input, se nao existir valor apresenta a mensagem no h1
    else{
    h1.innerText = `Welcome, ${input.value}`}; 
    //caso tenha sido dada entrada de algum valor no input, pega esse valor e transforma o h1 em uma mensagem pre definida que usa o atributo

});
