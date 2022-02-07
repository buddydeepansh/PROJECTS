for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttun = this.innerHTML;
    switchh(buttun);
    btnanimation(buttun);
  });
}
document.addEventListener("keypress", function (event) {
  var buttun = event.key;
  switchh(buttun);
  btnanimation(buttun);
});

function switchh(buttun) {
  switch (buttun) {
    case "w":
      var soundd = new Audio("sounds/crash.mp3");
      soundd.play();
      break;
    case "a":
      var soundd = new Audio("sounds/kick-bass.mp3");
      soundd.play();
      break;
    case "s":
      var soundd = new Audio("sounds/snare.mp3");
      soundd.play();
      break;
    case "d":
      var soundd = new Audio("sounds/tom-1.mp3");
      soundd.play();
      break;
    case "j":
      var soundd = new Audio("sounds/tom-2.mp3");
      soundd.play();
      break;
    case "k":
      var soundd = new Audio("sounds/tom-3.mp3");
      soundd.play();
      break;
    case "l":
      var soundd = new Audio("sounds/tom-4.mp3");
      soundd.play();
      break;
  }
}
function btnanimation(valuee) {
  var activee = document.querySelector("." + valuee);
  activee.classList.add("pressed");
    setTimeout(()=>{ activee.classList.remove("pressed") }, 30);
}
