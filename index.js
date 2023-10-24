let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((element) => {
  //adding event listener for buttons
  element.addEventListener("click", (e) => {
    //accessing Equal's button
    if (e.target.innerText == "=") {
      string = String(eval(string));
      inputBox.value = string;
    }
    //accessing "AC" button
    else if (e.target.innerText == "AC") {
      string = "";
      inputBox.value = string;
    }
    //accessing "C" button
    else if (e.target.innerText == "C") {
      string = string.substring(0, string.length - 1);
      inputBox.value = string;
    }
    //accessing all buttons
    else {
      string += e.target.innerText;
      inputBox.value = string;
    }
  });
});
