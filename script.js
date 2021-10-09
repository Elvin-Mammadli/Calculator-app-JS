let input = document.querySelector("#input");
let percent = document.querySelector("#percent");
let remove = document.querySelector("#remove");
let del = document.querySelector("#del");
let division = document.querySelector("#division");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let multiply = document.querySelector("#multiply");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let subtract = document.querySelector("#subtract");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let addition = document.querySelector("#addition");
let plusMinus = document.querySelector("#plusMinus");
let zero = document.querySelector("#zero");
let point = document.querySelector("#point");
let equal = document.querySelector("#equal");

percent.onclick = function () { clickEventHandler(percent) };
remove.onclick = function () { clickEventRemove(remove) };
del.onclick = function () { clickEventDel(del) };
division.onclick = function () { clickEventHandler(division) };
seven.onclick = function () { clickEventHandler(seven) };
eight.onclick = function () { clickEventHandler(eight) };
nine.onclick = function () { clickEventHandler(nine) };
multiply.onclick = function () { clickEventHandler(multiply) };
four.onclick = function () { clickEventHandler(four) };
five.onclick = function () { clickEventHandler(five) };
six.onclick = function () { clickEventHandler(six) };
subtract.onclick = function () { clickEventHandler(subtract) };
one.onclick = function () { clickEventHandler(one) };
two.onclick = function () { clickEventHandler(two) };
three.onclick = function () { clickEventHandler(three) };
addition.onclick = function () { clickEventHandler(addition) };
plusMinus.onclick = function () { clickEventHandler(plusMinus) };
zero.onclick = function () { clickEventHandler(zero) };
point.onclick = function () { clickEventHandler(point) };
equal.onclick = function () { calculation(arrCalc) };

let arrCalc = [];
input.value = arrCalc.join();


// Asahidaki kod ile niye islemir???
// equal.addEventListener("click", clickEventHandler());


function clickEventHandler(event) {
    arrCalc.push(event.innerText);
    input.value = arrCalc.join(" ");
    console.log(arrCalc);
}

function clickEventRemove() {
    arrCalc.pop();
    input.value = arrCalc.join(" ");
    // Bu funksiya reqemleri sola dogru bir-bir silmelidir ve yerde qalmis value-nu sabit bit deyisene assign etmelidir ki yerde qalan reqem ile hesablama apara bilek.
}

function clickEventDel() {
    arrCalc = [];
    input.value = arrCalc.join(" ");
}



function calculation(arr) {
    temp1 = Number(arr[0])
    temp2 = Number(arr[2])
    result = 0;
    switch (arr[1]) {
        case "+":
            result = (temp1 + temp2);
            break;

        case "-":
            result = (temp1 - temp2);
            break;

        case "X":
            result = (temp1 * temp2);
            break;

        case "/":
            result = (temp1 / temp2);
            break;

        default:
            break;
    }
    input.value = result;
    arr.length = 0;
    arr.push(result);
}