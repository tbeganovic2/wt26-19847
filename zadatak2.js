let forma = document.getElementById("forma");
let greska = document.getElementById("greska");

let naziviKategorija = {
  opce: "Opće obavještenje",
  hitno: "Hitno"
};

forma.addEventListener("submit", function (ev) {
  ev.preventDefault();

  let naslov = document.getElementById("naslov").value.trim();
  let tekst = document.getElementById("tekst").value.trim();
  let kategorija = document.querySelector('#forma input[name="kategorija"]:checked').value;

  // Ako unos nije ispravan, pregled se uopće ne dira
  if (naslov === "" || tekst === "") {
    greska.textContent = "Naslov i tekst obavijesti ne smiju biti prazni.";
    return;
  }

  greska.textContent = "";

  // textContent prikazuje korisnički unos isključivo kao tekst
  document.getElementById("pregledNaslov").textContent = naslov;
  document.getElementById("pregledTekst").textContent = tekst;
  document.getElementById("pregledKategorija").textContent = naziviKategorija[kategorija];
  document.getElementById("pregled").className = "pregled " + kategorija;
});

forma.addEventListener("reset", function () {
  greska.textContent = "";
});

document.getElementById("naslov").addEventListener("input", function (ev) {
  document.getElementById("brojSlova").textContent = ev.target.value.length;
});
