// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');

form.addEventListener('submit', function (eve){
    eve.preventDefault();
     //previne o envio do formulario

    const produto = this.elements.product.value;
    const quantidade = this.elements.qty.value;
    //coleta dos dados inseridos no formulario

    const novoItem = document.createElement('li');
    novoItem.innerHTML = `${quantidade} - ${produto}`;
    //cria um novo elemento LI, altera o valor dele para mostrar as informacoes coletadas

    document.querySelector('#list').appendChild(novoItem);
    //adiciona a LI criada por novoItem na UL que tem id = list
    
    this.elements.product.value = ' ';
    this.elements.qty.value = ' ';
    //localiza os valores nos formularios e zera eles. 
    //obs. Nao da para usar a constante criada, ela é apenas um ponteiro e nao a informacao do arquivo.

    // console.log(produto);
    // console.log(quantidade);
    // alert('tudo certo');
   
   
} );