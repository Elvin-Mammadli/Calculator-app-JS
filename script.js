let screen = document.querySelector("#result");
let buttons = document.getElementsByClassName("btn");

for (let i = 0; i < buttons.length; i++) {
  if (
    buttons[i].innerHTML !== "C" &&
    buttons[i].innerHTML !== "=" &&
    buttons[i].innerHTML !== "CE" &&
    buttons[i].innerHTML !== "+/-"
  ) {
    buttons[i].addEventListener("click", function () {
      screen.innerText += this.innerText;
    });
  }
  else if (buttons[i].innerHTML === "CE") {
    buttons[i].addEventListener("click", function (event) {
      let x = screen.innerText;
      screen.innerText = x.substr(0, x.length - 1);
    })
  }
}

clear.addEventListener("click", function () {
  screen.innerText = "";
});

function indexOfAll(str, keys = []) {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    let index = str.indexOf(key);
    if (index >= 0) return index;
  }
  return -1;
}

equal.addEventListener("click", function () {
  let a = screen.innerText;
  let operator = indexOfAll(a, ["+", "-", "x", "÷", "%"]);
  let operand1 = Number(a.slice(0, operator));
  let operand2 = Number(a.slice(operator + 1));
  let result = 0;
  switch (a[operator]) {
    case "+":
      result = operand1 + operand2;
      break;

    case "-":
      result = operand1 - operand2;
      break;

    case "x":
      result = operand1 * operand2;
      break;

    case "÷":
      result = operand1 / operand2;
      break;

    case "%":
      result = operand1 % operand2;
      break;

    default:
      result = "NaN";
      break;
  }
  screen.innerText = result;
});