// Modul za upravljanje ograničenom količinom resursa.
// potrosi vraća true ako je potrošnja izvršena, a false ako je odbijena.
function napraviResurs(pocetnaKolicina) {
  let stanje = (typeof pocetnaKolicina === "number" && pocetnaKolicina >= 0)
    ? pocetnaKolicina
    : 0;

  return {
    potrosi: function (kolicina) {
      if (typeof kolicina !== "number" || isNaN(kolicina) ||
          kolicina < 0 || kolicina > stanje) {
        return false;
      }
      stanje -= kolicina;
      return true;
    },
    preostalo: function () {
      return stanje;
    }
  };
}

let minute = napraviResurs(100);
let papir = napraviResurs(20);

console.log("Minute - potroši 30:", minute.potrosi(30));   // true
console.log("Minute - preostalo:", minute.preostalo());    // 70
console.log("Minute - potroši 80:", minute.potrosi(80));   // false (više od raspoloživog)
console.log("Minute - potroši -5:", minute.potrosi(-5));   // false (negativno)
console.log("Minute - preostalo:", minute.preostalo());    // 70

console.log("Papir - potroši 5:", papir.potrosi(5));       // true
console.log("Papir - preostalo:", papir.preostalo());      // 15
console.log("Papir - potroši 15:", papir.potrosi(15));     // true
console.log("Papir - potroši 1:", papir.potrosi(1));       // false
console.log("Papir - preostalo:", papir.preostalo());      // 0

// Instance su nezavisne: potrošnja papira nije promijenila minute
console.log("Minute nakon potrošnje papira:", minute.preostalo()); // 70

// Stanje se ne može promijeniti direktno izvana
minute.stanje = 1000;
console.log("Minute nakon pokušaja direktne izmjene:", minute.preostalo()); // 70
