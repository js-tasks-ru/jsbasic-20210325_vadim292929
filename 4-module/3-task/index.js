function highlight(table) {
  let rows = table.rows;


  for (const t of table.tBodies) {
    let trows = t.rows;

    for (const i of trows) {

      let st = i;

      let el = st.lastElementChild;

      if (el.getAttribute("data-available") == "true") {
        st.classList.add("available");

      }
      if (el.getAttribute("data-available") == "false") {
        st.classList.add("unavailable");

      }
      if (el.hasAttribute("data-available") == false) {
        st.setAttribute("hidden", "");

      }

      for (const el of i.children) {
        if (el.innerHTML == "m") {
          st.classList.add("male");
        }
        if (el.innerHTML == "f") {
          st.classList.add("female");
        }
        if (el.innerHTML < "18") {
          st.style.textDecoration = "line-through";
        }

      }
    }
  }
}
