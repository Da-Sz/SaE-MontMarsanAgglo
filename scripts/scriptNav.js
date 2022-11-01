


let nav = document.getElementById("nav")
let boutonOuvrir = document.getElementById("openBtn")
let boutonFermer = document.getElementById("closeBtn")

boutonOuvrir.onclick = ouvrirNav
boutonFermer.onclick = fermerNav

function ouvrirNav() {
    nav.style.display = "flex"
    nav.classList.remove('fermetureNav')

}

function fermerNav() {
    nav.classList.add('fermetureNav')
}



  var liste = document.getElementsByClassName("dropdown-content");

  document.getElementById("nav1").addEventListener("click", function () {
    ouvrir("drop1");
  });
  document.getElementById("nav2").addEventListener("click", function () {
    ouvrir("drop2");
  });

  document.getElementById("nav3").addEventListener("click", function () {
    ouvrir("drop3");
  });

  document.getElementById("nav4").addEventListener("click", function () {
    ouvrir("drop4");
  });

  function ouvrir(drop) {
    var dropMenu = document.getElementById(drop);
    if (window.innerWidth < 800) {
      if (dropMenu.classList.contains("responsiveFlex")) {
        dropMenu.classList.remove("responsiveFlex");
      }
      else {
        dropMenu.classList.add("responsiveFlex");
      }
    }
    
    
  }


