function procitajPozitivanCijeliBroj(poruka) {
  let unos = prompt(poruka);

  if (unos === null) {
    alert("Unos je otkazan.");
    return null;
  }
  if (unos.trim() === "") {
    alert("Niste unijeli broj.");
    return null;
  }

  let broj = Number(unos.trim());

  if (isNaN(broj)) {
    alert("Neispravan unos: \"" + unos + "\" nije broj.");
    return null;
  }
  if (!Number.isInteger(broj)) {
    alert("Neispravan unos: broj mora biti cijeli.");
    return null;
  }
  if (broj <= 0) {
    alert("Neispravan unos: broj mora biti pozitivan.");
    return null;
  }
  return broj;
}

function generisiPlan(n, k) {
  let plan = [];
  for (let i = 1; i <= n; i++) {
    plan.push("Serija " + i);
    if (i % k === 0 && i < n) {
      plan.push("Pauza");
    }
  }
  return plan;
}

let n = procitajPozitivanCijeliBroj("Unesite broj serija (n):");
let k = n === null ? null : procitajPozitivanCijeliBroj("Pauza poslije koliko serija (k)?");

if (n !== null && k !== null) {
  let plan = generisiPlan(n, k);
  for (let i = 0; i < plan.length; i++) {
    console.log(plan[i]);
    document.write("<p>" + plan[i] + "</p>");
  }
} else {
  document.write("<p>Plan nije generisan zbog neispravnog unosa.</p>");
}
