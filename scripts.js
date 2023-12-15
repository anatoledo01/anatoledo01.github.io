const button = document.querySelector('.add-task')
const input = document.querySelector('.input-task')
const listaComp = document.querySelector('.list')

let minhaLista = []


function addTarefa() {
    const novaTarefa = input.value.trim();

    if (novaTarefa !== '') {
        minhaLista.push({
            tarefa: novaTarefa,
            concluida: false,
        });

        input.value = '';
        mostrarTarefa();
    } else {
        alert("Não é possível adicionar uma tarefa vazia.");
    }
}

function mostrarTarefa() { 

    let novaLi = ''

    minhaLista.forEach( (item, index) => {

        novaLi = novaLi + 
        `
        <li class="task class ${item.concluida && 'done'}">
                <img src="./img/checked.png" alt="check na tarefa" onclick= "concluir (${index})">
                    <p>${item.tarefa}</p>
                    <img src="./img/trash.png" alt="tarefa para o lixo" onclick=" deletar(${index})">
            </li>
                `
        
        
    })

    listaComp.innerHTML = novaLi

    localStorage.setItem('Lista1', JSON.stringify (minhaLista))

}
 
function concluir(index){
            minhaLista[index].concluida =   !minhaLista[index].concluida
            mostrarTarefa()
}


function deletar(index){

    minhaLista.splice(index, 1)
    mostrarTarefa()
    
}
function recarregar(){
        const tarefasStorege = localStorage.getItem('Lista1')

        if(tarefasStorege){
        minhaLista = JSON.parse(tarefasStorege)
        }
        mostrarTarefa()
}

recarregar()
 button.addEventListener('click', addTarefa)

