//Funcion para ir hacia la parte superior de la pagina
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function cambioAFormacion() {
  if (document.getElementById("formacion")) {
    if (document.getElementById("formacion").style.display == "none") {
      document.getElementById("formacion").style.display = "block";
      document.getElementById("experiencia").style.display = "none";
    } else {
      document.getElementById("formacion").style.display = "none";
      document.getElementById("experiencia").style.display = "block";
    }
  }
}

function cambioAExperiencia() {
  if (document.getElementById("experiencia")) {
    if (document.getElementById("experiencia").style.display == "none") {
      document.getElementById("experiencia").style.display = "block";
      document.getElementById("formacion").style.display = "none";
    } else {
      document.getElementById("experiencia").style.display = "none";
      document.getElementById("formacion").style.display = "block";
    }
  }
}

//Boton ir a top
mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 0) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}