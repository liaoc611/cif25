function toggleStyles() {
  button.classList.toggle("buttonOn");

  stylesDisabled = !stylesDisabled;
  stylesheets.forEach(sheet => sheet.disabled = stylesDisabled);
  if (stylesDisabled){
    button.textContent="restore all styling"
  } else{
    button.textContent="remove all styling"
  }
}

let button = document.querySelector(".button");
let stylesheets = document.querySelectorAll('link[rel="stylesheet"], style');
let stylesDisabled = false;

button.addEventListener("click", toggleStyles);



/* is there anything i can do to make the text still be centered even if everything else is disabled? and also hide the images. */ 