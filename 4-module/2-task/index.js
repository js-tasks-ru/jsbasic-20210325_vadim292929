function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let rows = table.rows[i];

    let ctd = rows.cells[i];

    ctd.style.backgroundColor = "red";
  }
}
