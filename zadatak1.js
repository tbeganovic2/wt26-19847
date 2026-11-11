let stavke = document.querySelectorAll(".stavka");

// Sažetak se uvijek računa iz stvarnog stanja stavki u DOM-u
function azurirajSazetak() {
  let zavrsene = document.querySelectorAll(".stavka.zavrsena").length;
  document.getElementById("brojZavrsenih").textContent = zavrsene;
  document.getElementById("ukupno").textContent = stavke.length;
}

function postaviStanje(stavka, zavrsena) {
  if (zavrsena) {
    stavka.classList.add("zavrsena");
    stavka.querySelector(".status").textContent = "završeno";
    stavka.querySelector(".promijeni").textContent = "Vrati";
  } else {
    stavka.classList.remove("zavrsena");
    stavka.querySelector(".status").textContent = "nije završeno";
    stavka.querySelector(".promijeni").textContent = "Označi kao završeno";
  }
}

for (let i = 0; i < stavke.length; i++) {
  let stavka = stavke[i];
  stavka.querySelector(".promijeni").addEventListener("click", function () {
    postaviStanje(stavka, !stavka.classList.contains("zavrsena"));
    azurirajSazetak();
  });
}

document.getElementById("resetuj").addEventListener("click", function () {
  for (let i = 0; i < stavke.length; i++) {
    postaviStanje(stavke[i], false);
  }
  azurirajSazetak();
});

azurirajSazetak();
