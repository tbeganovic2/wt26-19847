function dodajDva(broj) {
  return broj + 2;
}

console.log(dodajDva(1));  // 3
console.log(dodajDva(2));  // 4
console.log(dodajDva(10)); // 12

function jednom(callback) {
  let pozvana = false;
  let rezultat;

  return function (...argumenti) {
    if (!pozvana) {
      rezultat = callback(...argumenti);
      pozvana = true;
    }
    return rezultat;
  };
}

const jednomFunkcija = jednom(dodajDva);
console.log(jednomFunkcija(4));    // 6
console.log(jednomFunkcija(10));   // 6
console.log(jednomFunkcija(9001)); // 6
