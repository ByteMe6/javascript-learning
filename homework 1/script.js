// переменные

// input

const inputN1 = document.querySelector(".slider__input");
// image
const imgN1 = document.querySelector(".slider__image");

// checking changes
inputN1.addEventListener("input", alwaysConsole);

function alwaysConsole() {
  console.log(inputN1.value);
}

// real code
function resizeImg(size) {
  imgN1.style.width = size*3 + "px";
  imgN1.style.height = size*3 + "px";
}

function resizeImgSize() {
  resizeImg(inputN1.value);
}

inputN1.addEventListener("input", _.debounce(resizeImgSize, 50));
