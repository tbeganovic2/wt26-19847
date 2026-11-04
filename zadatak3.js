function tablicaMnozenja() {
  document.write("<table>");

  // Zaglavlje kolona
  document.write("<tr><th>X</th>");
  for (let j = 1; j <= 10; j++) {
    document.write("<th>" + j + "</th>");
  }
  document.write("</tr>");

  // Redovi tablice; parni redovi dobijaju klasu "paran" (žućkasta pozadina)
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      document.write("<tr class=\"paran\">");
    } else {
      document.write("<tr>");
    }
    document.write("<th>" + i + "</th>");
    for (let j = 1; j <= 10; j++) {
      document.write("<td>" + i * j + "</td>");
    }
    document.write("</tr>");
  }

  document.write("</table>");
}

tablicaMnozenja();
