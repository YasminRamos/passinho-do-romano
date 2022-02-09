//função para aparecer o campo incremento, quando selecionado o césar

function incremento(obj){
    const op = document.getElementById("incremento");
    op.style.visibility = (select.value == "cesar")? "visible":"hidden";
}

//tem que "chamar" em variáveis TUDO que vai usar de DOM/html
//basicamente: fazer uma var no JS para todo ID do html
//esses var é que serão utilizados aqui e não direto os codigos DOM

var botao = document.getElementById("enviar");
let incre = parseInt(document.getElementById("incremento").value);
var select = document.getElementById("criptografia");
const texto = document.getElementById("texto").value;



//colocar um botão, que quando clicado, ele diz a opção escolhida, entre as 4opções/combinações

botao.onclick = function(event){
    event.preventDefault(); //serve para não recaregar a pag quando aperta no botão
    
    //tem que colocar as variáveis aqui dentro, se não pega os dados de fora (antes de ter clicado no botão)
    var select = document.getElementById("criptografia");
    var codificacao = document.getElementById("codificacao");
    var decodificacao = document.getElementById("decodificacao");
    var procedimento = select.options[select.selectedIndex].value;
    const texto = document.getElementById("texto").value;
    
    
    if(codificacao.checked){
        //codificar - cesár ou base64
        codificar()
        
    }
    else if(decodificacao.checked){
        //decodificar - césar ou base64
        decodificar()

    }
    else{
        alert("selecione um procedimento")
    }  
}

function codificar(texto){
    
    var select = document.getElementById("criptografia");
    var codificacao = document.getElementById("codificacao");
    var decodificacao = document.getElementById("decodificacao");
    var procedimento = select.options[select.selectedIndex].value;
    const incre = parseInt(document.getElementById("incremento").value); 
    const opcao = document.getElementById("criptografia");
    const resultado = document.getElementById("traduzido");
    texto = document.getElementById("texto").value;
    
    
    if(procedimento == "cesar"){
        texto = texto.split("");
        console.log(texto);
        let index = texto.map((i) => i.charCodeAt());          
        console.log(index);
        console.log(typeof index);
        console.log(typeof index[0]);
        console.log(typeof incre);
        let indexNovo = index.map((i) => i+incre);
        console.log(indexNovo);
        let textoNovo = indexNovo.map((i) => String.fromCharCode(i)).join("");
        console.log(textoNovo);
        resultado.innerText=textoNovo;  // quero adc esse texto no #traduzido  
    }
    
    else if (procedimento == "base64"){
        resultado.innerText = btoa(texto);
    }
    else{
        alert("selecione uma linguagem")
    }

}

function decodificar(texto){
    var select = document.getElementById("criptografia");
    var codificacao = document.getElementById("codificacao");
    var decodificacao = document.getElementById("decodificacao");
    var procedimento = select.options[select.selectedIndex].value;
    const incre = parseInt(document.getElementById("incremento").value);
    const opcao = document.getElementById("criptografia");
    const resultado = document.getElementById("traduzido");
    texto = document.getElementById("texto").value;
     
    
    if(procedimento == "cesar"){
        texto = texto.split("");
        let index = texto.map((i) => i.charCodeAt());
        let indexNovo = index.map((i) => i-incre);
        let textoNovo = indexNovo.map((i) => String.fromCharCode(i)).join("");
        resultado.innerText=textoNovo;

    }
    else if(procedimento == "base64"){
        resultado.innerText = atob(texto);

    }
    else{
        alert("selecione uma linguagem")
    }


}



