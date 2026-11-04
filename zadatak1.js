const P1 = 5;
const P2 = 15;

function procijeniRedZaStudenta(brojLjudi) {
  if (brojLjudi <= P1) return "Kratko čekanje";
  if (brojLjudi <= P2) return "Umjereno čekanje";
  return "Dugo čekanje";
}

let unos = prompt("Koliko ljudi trenutno čeka u redu?");

if (unos === null) {
  alert("Unos je otkazan.");
} else if (unos.trim() === "") {
  alert("Niste unijeli broj.");
} else {
  let brojLjudi = Number(unos.trim());

  if (isNaN(brojLjudi)) {
    alert("Neispravan unos: \"" + unos + "\" nije broj.");
  } else if (brojLjudi < 0) {
    alert("Neispravan unos: broj ljudi ne može biti negativan.");
  } else if (!Number.isInteger(brojLjudi)) {
    alert("Neispravan unos: broj ljudi mora biti cijeli broj.");
  } else {
    let kategorija = procijeniRedZaStudenta(brojLjudi);
    console.log(brojLjudi, kategorija);
    alert("Broj ljudi u redu: " + brojLjudi + " – " + kategorija);
  }
}
