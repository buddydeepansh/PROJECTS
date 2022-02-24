function checkk() {
  var uname = document.querySelector("#username").value;
  var upass = document.querySelector("#password").value;
  var uemail = document.querySelector("#useremail").value;
  var upass2 = document.querySelector("#password2").value;
  var utname = String.trim(uname);
  utname = utname.replace(/ +/g, "");
  document.write("uname: " + uname + " utname: " + utname);
}
