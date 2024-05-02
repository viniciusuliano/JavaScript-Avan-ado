let inputTarefas = document.getElementById('entrada')
let listaUL = document.getElementById('Lista')


let listaTarefas = JSON.parse(localStorage.getItem("@listadetarefas")) || []
// o comando acima mostra nosso local storage ou caso não tenha nada mostra uma lista vazia
//JSON.parse converte para lista novamente
function renderizarTarefas(){

    listaUL.innerHTML = "";

    listaTarefas.map((todo)=>{
        let liElement = document.createElement("li");
        let tarefasText = document.createTextNode(todo);
        let linkExcluir = document.createElement("a") // criando elementos com a propriedade createElement("")
        linkExcluir.setAttribute('href', '#') // setando um atributo dentro do elemento
        let textLink = document.createTextNode('Excluir')
        liElement.appendChild(tarefasText)

        let posicao = listaTarefas.indexOf(todo)
        linkExcluir.setAttribute("onclick", `deletarTarefa(${posicao})`) // chamando uma função pelo setAttribuite

        listaUL.appendChild(liElement)
        linkExcluir.appendChild(textLink)
        liElement.appendChild(linkExcluir)

    })
    
}

renderizarTarefas()

function adicionarItem(){
    if(inputTarefas.value === ''){
        alert('Digite um valor valido');
        return false
    }else{
        let novaTarefa = inputTarefas.value
        listaTarefas.push(novaTarefa)
        inputTarefas.value = ''
        renderizarTarefas()
        salvarDados()
    }
}

function deletarTarefa(posicao){
    listaTarefas.splice(posicao, 1)
    renderizarTarefas()
    salvarDados()
}   


function salvarDados(){
    localStorage.setItem("@listadetarefas", JSON.stringify(listaTarefas))
}