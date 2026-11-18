// 1. Originalni modul: pregled vraća referencu na privatni objekat
function napraviProfil() {
  let profil = { naziv: "Početni" };
  return {
    pregled: function () { return profil; },
    postaviNaziv: function (n) { profil.naziv = n; }
  };
}

let p1 = napraviProfil();
let pogled1 = p1.pregled();
pogled1.naziv = "Promijenjen izvana";
// Predviđanje: pregled() vraća isti objekat, pa je izmjena vidljiva u modulu
console.log("1.", p1.pregled().naziv); // Promijenjen izvana

// 2. i 3. Popravljen modul: pregled vraća novi objekat s primitivnim vrijednostima,
// a dodano je i primitivno svojstvo brojIzmjena
function napraviSigurniProfil() {
  let profil = { naziv: "Početni", brojIzmjena: 0 };
  return {
    pregled: function () {
      return { naziv: profil.naziv, brojIzmjena: profil.brojIzmjena };
    },
    postaviNaziv: function (n) {
      profil.naziv = n;
      profil.brojIzmjena++;
    }
  };
}

let p2 = napraviSigurniProfil();
let pogled2 = p2.pregled();
pogled2.naziv = "Promijenjen izvana";
pogled2.brojIzmjena = 100;
console.log("2.", p2.pregled()); // { naziv: "Početni", brojIzmjena: 0 }

p2.postaviNaziv("Novi naziv");
console.log("3.", p2.pregled()); // { naziv: "Novi naziv", brojIzmjena: 1 }

// Razlika između privatnosti varijable i izlaganja reference:
// Varijabla profil je privatna jer joj se zbog closure-a ne može pristupiti
// izvan funkcije napraviProfil. Međutim, ako metoda vrati sam objekat na koji
// ta varijabla pokazuje, pozivalac dobija referencu na ISTI objekat i može
// mijenjati njegova svojstva mimo predviđene metode. Privatna je dakle samo
// varijabla (ime), a ne i objekat. Vraćanjem novog objekta s kopiranim
// primitivnim vrijednostima pozivalac dobija samo kopiju, pa izmjene te kopije
// ne utiču na stanje modula.
