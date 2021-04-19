function initCarousel() {
  let sliderContainer = document.querySelector(".carousel__inner"); //Слайдер
  let sliderWidth = sliderContainer.offsetWidth; //Ширина Слайдера
  let btnRigth = document.querySelector(".carousel__arrow_right");
  let btnLeft = document.querySelector(".carousel__arrow_left");
  let curwidth = 0;

  let cw = -sliderWidth * 3; //Третий слайдер окончание

  if (0 == curwidth) {
    btnLeft.style.display = "none";
  }

  btnRigth.addEventListener("click", function () {
    curwidth -= sliderWidth;

    sliderContainer.style.transform = 'translateX(' + curwidth + 'px)';
    if (curwidth == cw) {
      btnRigth.style.display = "none";
    }
    if (curwidth < 0) {
      btnLeft.style.display = "flex";
    }
  });

  btnLeft.addEventListener("click", function () {

    if (curwidth == -988) {
      btnLeft.style.display = "none";
    }
    if (curwidth >= cw) {
      btnRigth.style.display = "flex";
    }
    curwidth += sliderWidth;

    sliderContainer.style.transform = 'translateX(' + curwidth + 'px)';
  });
}
