function toggleText() {
  let btn = document.querySelector(".toggle-text-button");
  let texthid = document.querySelector("#text");
  btn.addEventListener("click", function () {


    texthid.toggleAttribute("hidden");


  });

}
