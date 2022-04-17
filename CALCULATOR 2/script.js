var n1 = "",
  n2 = "",
  n3 = "",
  n4 = "",
  n5 = "0";
var input = document.getElementById("input");
function display(n3) {
  document.getElementById(n5).classList.remove("purple");
  console.log(n3);
  document.getElementById(n3).classList.add("purple");
  n4 = n1;
  n1 = n1 + n3;
  input.setAttribute("value", n1);
  n5 = n3;
}
function clearr() {
  input.setAttribute("value", "");
  n1 = "";
  n2 = "";
  n3 = "";
  document.getElementById(n5).classList.remove("purple");
}
function calc() {
  if (n1 == "") {
    input.setAttribute("value", "");
  } else {
    n2 = eval(input.getAttribute("value"));
    n1 = n2;
    input.setAttribute("value", n2);
  }
}
document.addEventListener("keypress", function (k) {
  key = k.key.charCodeAt(0);
  console.log(key);
  if ((key >= 45 && key <= 57) || key == 42 || key == 43 || key == 42) {
    display(k.key);
  }
  if (key == 61) {
    calc();
  }
  if (key == 99 || key == 67 || key == 32) {
    clearr();
  }
});
document.addEventListener("keydown", function (k) {
  if (k.which == 8) {
    nl = n1.length;
    nl--;
    input.setAttribute("value", (n1 = n1.slice(0, nl)));
    document.getElementById(n5).classList.remove("purple");
  }
});
