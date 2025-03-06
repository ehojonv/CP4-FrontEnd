console.log("Para ver o exercicios de console entre o comando 'exercicios()'")

var listaCompleta = [];

var tarefaAntiga = {
    id:0,
    descricao:"Lavar a louça",
    concluida: true
}

var tarefaNova = {
    ...tarefaAntiga,
    concluida: false
}
listaCompleta.push(tarefaNova)

// Cria uma tarefa na lista, e checa se o valor é válido para adicionar.
function adicionarTarefa() {
  var descTarefa = document.querySelector("#inputTarefa").value.trim();

  if (descTarefa == "") {
    alert("Texto inválido");
    return;
  }

  var tarefa = {
    id: listaCompleta.length,
    descricao: descTarefa,
    concluida: false,
  };

  listaCompleta.push(tarefa);
  document.querySelector("#inputTarefa").value = "";
  alert(`Tarefa ${tarefa.id + 1} adicionada com sucesso!`);
  mostrarNaTela(listaCompleta);
}

//Alterna entre concluida ou não uma determinada tarefa.
function toggleFeita(id) {
  const tarefa = listaCompleta.find((t) => t.id === id);
  tarefa.concluida = !tarefa.concluida;

  mostrarNaTela(listaCompleta);
}

//Exibe as tarefas em forma de lista na tela tambem exibe uma mensagem caso não haja nehuma tarefa.
function mostrarNaTela(lista) {
  var listaFalhas = document.querySelector("#listaTarefas");
  listaFalhas.replaceChildren();

  if (lista.length == 0) {
    var itemDaLista = document.createElement("li");
    itemDaLista.classList.add("mensagem_vazia");

    var textoListaVazia = document.createElement("p");
    textoListaVazia.textContent = "Não há tarefas! Adicione alguma agora.";

    itemDaLista.appendChild(textoListaVazia);
    listaFalhas.appendChild(itemDaLista);
    return;
  }

  lista.forEach(function (tarefa) {
    var itemDaLista = document.createElement("li");
    itemDaLista.classList.add("tarefa");

    var btnTarefa = document.createElement("button");
    btnTarefa.onclick = function () {
      toggleFeita(tarefa.id);
    };

    //Cria a primeira parte do svg para o icone no botão.
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("height", "24px");
    svg.setAttribute("viewBox", "0 -960 960 960");
    svg.setAttribute("width", "24px");
    svg.setAttribute("fill", "#040507");

    //Cria o caminho do svg dependendo se a tarefa for concluida ou não.
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    if (tarefa.concluida) {
      path.setAttribute(
        "d",
        "m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"
      );
    } else {
      path.setAttribute(
        "d",
        "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"
      );
    }
    svg.appendChild(path);

    btnTarefa.appendChild(svg);
    itemDaLista.appendChild(btnTarefa);

    var descricaoTarefa = document.createElement("p");
    descricaoTarefa.textContent = tarefa.descricao;
    itemDaLista.appendChild(descricaoTarefa);

    listaFalhas.appendChild(itemDaLista);
  });
}

//Filtra as tarefas em concluidas ou não.
function filtrarTarefas() {
  var tarefasPendentes = listaCompleta.filter((t) => !t.concluida);
  mostrarNaTela(tarefasPendentes);
}

//Inicia a lista ao entrar no programa.
mostrarNaTela(listaCompleta);

//Exercicios de console
function exercicios() {
    console.log("Exercicio 7")
    const descMaiusculas = listaCompleta.map(tarefa => tarefa.descricao.toUpperCase());
    console.log(descMaiusculas)

    console.log("Exercicio 8")
    const tarefasConcluidas = listaCompleta.reduce((acc, tarefa) => {
        if (tarefa.concluida) {
            acc++
        }
        return acc
    }, 0)
    console.log("Tarefas concluidas: " + tarefasConcluidas)

    console.log("Exercicio 9")
    const {id, descricao, concluida} = listaCompleta[0]
    console.log("Veja o alert.")
    alert(`Falha especifica: ${descricao} - ${concluida}`)

    console.log("Exercicio 10")
    function criarTarefa(descricao) {
        var tarefa = {
            id: listaCompleta.length,
            descricao: descricao,
            concluida: false
        }

        listaCompleta.push(tarefa)
    }
    criarTarefa("Estudar FrontEnd")
    console.log(listaCompleta)
}