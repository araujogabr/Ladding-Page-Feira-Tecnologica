function toggleLista(id) {
    var conteudo = document.getElementById(id);
    if (conteudo.style.display === "none") {
      conteudo.style.display = "block";
    } else {
      conteudo.style.display = "none";
    }
  }

  function toggleLista(id) {
    var conteudo = document.getElementById(id);
    var seta = document.getElementById("seta-" + id);
    
    if (conteudo.style.display === "none") {
      conteudo.style.display = "block";
      seta.classList.remove("fa-chevron-down");
      seta.classList.add("fa-chevron-up");
    } else {
      conteudo.style.display = "none";
      seta.classList.remove("fa-chevron-up");
      seta.classList.add("fa-chevron-down");
    }
  }


  