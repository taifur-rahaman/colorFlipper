const bgColor = document.getElementById("color");
const btn = document.getElementById("btn");

function randomColor() {
  return `#${randomLetter()}${randomNumber()}${randomLetter()}${randomNumber()}${randomLetter()}${randomNumber()}`;
}

function randomLetter() {
  const letter = "abcdef";
  const randomLetter = letter[Math.floor(Math.random() * letter.length)];
  return randomLetter;
}

function randomNumber() {
  return Math.floor(Math.random() * 10);
}
btn.addEventListener("click", () => {
  bgColor.textContent = randomColor();
  document.body.style.backgroundColor = bgColor.textContent;
});
