let char = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "u",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "?",
  "+",
  "@",
  "!",
  "&",
  "$",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

const range = document.querySelector(".range");
const pwBoxes = document.querySelectorAll(".pw-box");
const generateBtn = document.querySelector(".generate-btn");
const container = [];

const generatePw = container => {
  for (let i = 0; i < range.value; i++) {
    let randomIdx = Math.floor(Math.random() * char.length);
    container.push(char[randomIdx]);
  }
  return container.join("");
};

function fillPwBoxes() {
  for (let box of pwBoxes) {
    box.value = generatePw(container);
    container.length = 0;
  }
}

generateBtn.addEventListener("click", e => {
  e.preventDefault();
  fillPwBoxes();
});

function copyPw(box) {
  box.select();
  box.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(box.value);
}

btns = document.querySelectorAll(".greet");

for (let btn of btns) {
  btn.addEventListener("click", function() {
    console.log("clicked!");
  });
}

function notify() {
  console.log("clicked");
}
