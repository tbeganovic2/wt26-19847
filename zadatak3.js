let forma = document.getElementById("forma");
let greska = document.getElementById("greska");
let tbody = document.getElementById("stavke");

// Zbir se svaki put ponovo računa iz redova tabele, umjesto da se čuva u
// posebnoj varijabli. Tako zbir uvijek odgovara onome što piše u tabeli,
// a za ovako malu tabelu ponovno sabiranje ne košta ništa.
function azurirajZbir() {
  let zbir = 0;
  for (let i = 0; i < tbody.rows.length; i++) {
    zbir += Number(tbody.rows[i].cells[1].textContent);
  }
  document.getElementById("zbir").textContent = zbir.toFixed(2);
  document.getElementById("brojStavki").textContent = tbody.rows.length;
}

forma.addEventListener("submit", function (ev) {
  ev.preventDefault();

  let naziv = document.getElementById("naziv").value.trim();
  let iznosTekst = document.getElementById("iznos").value.trim();
  let iznos = Number(iznosTekst);

  if (naziv === "") {
    greska.textContent = "Naziv ne smije biti prazan.";
    return;
  }
  if (iznosTekst === "" ) {
    greska.textContent = "Iznos mora biti broj.";
    return;
  }
  if (iznos < 0) {
    greska.textContent = "Iznos ne smije biti negativan.";
    return;
  }

  greska.textContent = "";

  // tbody se nalazi ispred tfoot-a, pa novi red ide neposredno prije reda sa zbirom
  let red = tbody.insertRow(-1);
  red.insertCell(0).textContent = naziv;
  let celijaIznos = red.insertCell(1);
  celijaIznos.textContent = iznos.toFixed(2);
  celijaIznos.className = "iznos";

  forma.reset();
  azurirajZbir();
});

azurirajZbir();
