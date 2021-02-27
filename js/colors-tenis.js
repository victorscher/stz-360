let section5 = document.querySelector(".section-5");

let sec5selectors = section5.querySelectorAll(".select");
let sec5colors = section5.querySelectorAll(".color");
let sec5colorName = section5.querySelector(".product-color span");
let tenis = section5.querySelectorAll(".tenis");

sec5selectors[0].style.transform = "scale(1)";
sec5selectors[1].style.transform = "scale(0)";
sec5selectors[2].style.transform = "scale(0)";
sec5selectors[3].style.transform = "scale(0)";
sec5selectors[4].style.transform = "scale(0)";
sec5selectors[5].style.transform = "scale(0)";
sec5selectors[6].style.transform = "scale(0)";

tenis[0].style.display = "block";

sec5colorName.textContent = "Preto";  

sec5colors[0].onclick = () => {
  sec5selectors[0].style.transform = "scale(1)";
  sec5selectors[1].style.transform = "scale(0)";
  sec5selectors[2].style.transform = "scale(0)";
  sec5selectors[3].style.transform = "scale(0)";
  sec5selectors[4].style.transform = "scale(0)";
  sec5selectors[5].style.transform = "scale(0)";
  sec5selectors[6].style.transform = "scale(0)";

  tenis[0].style.display = "block";
  tenis[1].style.display = "none";
  tenis[2].style.display = "none";
  tenis[3].style.display = "none";
  tenis[4].style.display = "none";
  tenis[5].style.display = "none";
  tenis[6].style.display = "none";

  sec5colorName.textContent = "Preto";
}

sec5colors[1].onclick = () => {
  sec5selectors[1].style.transform = "scale(1)";
  sec5selectors[0].style.transform = "scale(0)";
  sec5selectors[2].style.transform = "scale(0)";
  sec5selectors[3].style.transform = "scale(0)";
  sec5selectors[4].style.transform = "scale(0)";
  sec5selectors[5].style.transform = "scale(0)";
  sec5selectors[6].style.transform = "scale(0)";

  tenis[0].style.display = "none";
  tenis[1].style.display = "block";
  tenis[2].style.display = "none";
  tenis[3].style.display = "none";
  tenis[4].style.display = "none";
  tenis[5].style.display = "none";
  tenis[6].style.display = "none";

  sec5colorName.textContent = "Verde";
}

sec5colors[2].onclick = () => {
  sec5selectors[2].style.transform = "scale(1)";
  sec5selectors[0].style.transform = "scale(0)";
  sec5selectors[1].style.transform = "scale(0)";
  sec5selectors[3].style.transform = "scale(0)";
  sec5selectors[4].style.transform = "scale(0)";
  sec5selectors[5].style.transform = "scale(0)";
  sec5selectors[6].style.transform = "scale(0)";

  tenis[0].style.display = "none";
  tenis[1].style.display = "none";
  tenis[2].style.display = "block";
  tenis[3].style.display = "none";
  tenis[4].style.display = "none";
  tenis[5].style.display = "none";
  tenis[6].style.display = "none";

  sec5colorName.textContent = "Terracota";
}

sec5colors[3].onclick = () => {
  sec5selectors[3].style.transform = "scale(1)";
  sec5selectors[0].style.transform = "scale(0)";
  sec5selectors[1].style.transform = "scale(0)";
  sec5selectors[2].style.transform = "scale(0)";
  sec5selectors[4].style.transform = "scale(0)";
  sec5selectors[5].style.transform = "scale(0)";
  sec5selectors[6].style.transform = "scale(0)";

  tenis[0].style.display = "none";
  tenis[1].style.display = "none";
  tenis[2].style.display = "none";
  tenis[3].style.display = "block";
  tenis[4].style.display = "none";
  tenis[5].style.display = "none";
  tenis[6].style.display = "none";

  sec5colorName.textContent = "Djon";
}

sec5colors[4].onclick = () => {
  sec5selectors[4].style.transform = "scale(1)";
  sec5selectors[0].style.transform = "scale(0)";
  sec5selectors[1].style.transform = "scale(0)";
  sec5selectors[2].style.transform = "scale(0)";
  sec5selectors[3].style.transform = "scale(0)";
  sec5selectors[5].style.transform = "scale(0)";
  sec5selectors[6].style.transform = "scale(0)";

  tenis[0].style.display = "none";
  tenis[1].style.display = "none";
  tenis[2].style.display = "none";
  tenis[3].style.display = "none";
  tenis[4].style.display = "block";
  tenis[5].style.display = "none";
  tenis[6].style.display = "none";

  sec5colorName.textContent = "Azul";
}

sec5colors[5].onclick = () => {
  sec5selectors[5].style.transform = "scale(1)";
  sec5selectors[0].style.transform = "scale(0)";
  sec5selectors[1].style.transform = "scale(0)";
  sec5selectors[2].style.transform = "scale(0)";
  sec5selectors[3].style.transform = "scale(0)";
  sec5selectors[4].style.transform = "scale(0)";
  sec5selectors[6].style.transform = "scale(0)";

  tenis[0].style.display = "none";
  tenis[1].style.display = "none";
  tenis[2].style.display = "none";
  tenis[3].style.display = "none";
  tenis[4].style.display = "none";
  tenis[5].style.display = "block";
  tenis[6].style.display = "none";

  sec5colorName.textContent = "Rosê";
}

sec5colors[6].onclick = () => {
  sec5selectors[6].style.transform = "scale(1)";
  sec5selectors[0].style.transform = "scale(0)";
  sec5selectors[1].style.transform = "scale(0)";
  sec5selectors[2].style.transform = "scale(0)";
  sec5selectors[3].style.transform = "scale(0)";
  sec5selectors[4].style.transform = "scale(0)";
  sec5selectors[5].style.transform = "scale(0)";

  tenis[0].style.display = "none";
  tenis[1].style.display = "none";
  tenis[2].style.display = "none";
  tenis[3].style.display = "none";
  tenis[4].style.display = "none";
  tenis[5].style.display = "none";
  tenis[6].style.display = "block";

  sec5colorName.textContent = "Branco";
}