let section7 = document.querySelector(".section-7");

let sec7selectors = section7.querySelectorAll(".select");
let sec7colors= section7.querySelectorAll(".color");
let sec7colorName = section7.querySelector(".product-color span");
let bolsa = section7.querySelectorAll(".bolsa");

sec7selectors[0].style.transform = "scale(1)";
sec7selectors[1].style.transform = "scale(0)";
sec7selectors[2].style.transform = "scale(0)";
sec7selectors[3].style.transform = "scale(0)";
sec7selectors[4].style.transform = "scale(0)";
sec7selectors[5].style.transform = "scale(0)";
sec7colorName.textContent = "Preto";  

bolsa[0].style.display = "block";

sec7colors[0].onclick = () => {
  sec7selectors[0].style.transform = "scale(1)";
  sec7selectors[1].style.transform = "scale(0)";
  sec7selectors[2].style.transform = "scale(0)";
  sec7selectors[3].style.transform = "scale(0)";
  sec7selectors[4].style.transform = "scale(0)";
  sec7selectors[5].style.transform = "scale(0)";

  bolsa[0].style.display = "block";
  bolsa[1].style.display = "none";
  bolsa[2].style.display = "none";
  bolsa[3].style.display = "none";
  bolsa[4].style.display = "none";
  bolsa[5].style.display = "none";

  sec7colorName.textContent = "Preto";
}

sec7colors[1].onclick = () => {
  sec7selectors[1].style.transform = "scale(1)";
  sec7selectors[0].style.transform = "scale(0)";
  sec7selectors[2].style.transform = "scale(0)";
  sec7selectors[3].style.transform = "scale(0)";
  sec7selectors[4].style.transform = "scale(0)";
  sec7selectors[5].style.transform = "scale(0)";

  bolsa[0].style.display = "none";
  bolsa[1].style.display = "block";
  bolsa[2].style.display = "none";
  bolsa[3].style.display = "none";
  bolsa[4].style.display = "none";
  bolsa[5].style.display = "none";

  sec7colorName.textContent = "Verde";
}

sec7colors[2].onclick = () => {
  sec7selectors[2].style.transform = "scale(1)";
  sec7selectors[0].style.transform = "scale(0)";
  sec7selectors[1].style.transform = "scale(0)";
  sec7selectors[3].style.transform = "scale(0)";
  sec7selectors[4].style.transform = "scale(0)";
  sec7selectors[5].style.transform = "scale(0)";

  bolsa[0].style.display = "none";
  bolsa[1].style.display = "none";
  bolsa[2].style.display = "block";
  bolsa[3].style.display = "none";
  bolsa[4].style.display = "none";
  bolsa[5].style.display = "none";

  sec7colorName.textContent = "Terracota";
}

sec7colors[3].onclick = () => {
  sec7selectors[3].style.transform = "scale(1)";
  sec7selectors[0].style.transform = "scale(0)";
  sec7selectors[1].style.transform = "scale(0)";
  sec7selectors[2].style.transform = "scale(0)";
  sec7selectors[4].style.transform = "scale(0)";
  sec7selectors[5].style.transform = "scale(0)";

  bolsa[0].style.display = "none";
  bolsa[1].style.display = "none";
  bolsa[2].style.display = "none";
  bolsa[3].style.display = "block";
  bolsa[4].style.display = "none";
  bolsa[5].style.display = "none";

  sec7colorName.textContent = "Djon";
}

sec7colors[4].onclick = () => {
  sec7selectors[4].style.transform = "scale(1)";
  sec7selectors[0].style.transform = "scale(0)";
  sec7selectors[1].style.transform = "scale(0)";
  sec7selectors[2].style.transform = "scale(0)";
  sec7selectors[3].style.transform = "scale(0)";
  sec7selectors[5].style.transform = "scale(0)";

  bolsa[0].style.display = "none";
  bolsa[1].style.display = "none";
  bolsa[2].style.display = "none";
  bolsa[3].style.display = "none";
  bolsa[4].style.display = "block";
  bolsa[5].style.display = "none";

  sec7colorName.textContent = "Azul";
}

sec7colors[5].onclick = () => {
  sec7selectors[5].style.transform = "scale(1)";
  sec7selectors[0].style.transform = "scale(0)";
  sec7selectors[1].style.transform = "scale(0)";
  sec7selectors[2].style.transform = "scale(0)";
  sec7selectors[3].style.transform = "scale(0)";
  sec7selectors[4].style.transform = "scale(0)";

  bolsa[0].style.display = "none";
  bolsa[1].style.display = "none";
  bolsa[2].style.display = "none";
  bolsa[3].style.display = "none";
  bolsa[4].style.display = "none";
  bolsa[5].style.display = "block";

  sec7colorName.textContent = "Rosê";
}