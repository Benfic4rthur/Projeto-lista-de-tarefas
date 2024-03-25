let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');
let contador = 0;
function addTarefa() {
  let valorInput = input.value;
  if (valorInput !== '' && valorInput !== null && valorInput !== undefined) {
    contador++;
    let novoItem = ` <div id="${contador}" class="item">
        <div class="item-icone" onclick="clicar(${contador})">
            <i id="icone${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div class="item-nome" onclick="clicar(${contador})">${valorInput}
      </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
        </div>
    </div>`;
    //adiciona o item na div
    main.innerHTML += novoItem;
    //limpa o campo input
    input.value = '';
    //traz o foco para o input
    input.focus();
  } else {
    alert('digite uma tarefa');
  }
}
//adiciona um item ao teclar enter
input.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('btn-add').click();
  }
});

function deletar(id) {
  let tarefa = document.getElementById(id);
  tarefa.remove();
}

function clicar(id) {
  let tarefa = document.getElementById(id);
  let icone = document.getElementById('icone' + id);
  var classe = tarefa.getAttribute('class');
  if (classe === 'item') {
    tarefa.classList.add('clicado');
    icone.classList.remove('mdi-circle-outline');
    icone.classList.add('mdi-check-circle');
    tarefa.parentNode.appendChild(tarefa);
  } else {
    tarefa.classList.remove('clicado');
    icone.classList.remove('mdi-check-circle');
    icone.classList.add('mdi-circle-outline');
  }
}
