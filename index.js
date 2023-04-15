// seleciona os botões
let botaoEsconder = document.getElementById("esconder");
let botaoMostrar = document.getElementById("mostrar");

// adiciona eventos de clique para os botões
botaoEsconder.addEventListener("click", function() {
  if (teste.style.display === "none") {
      teste.style.display = "block";
  } else {
    teste.style.display = "none";
  }
});

