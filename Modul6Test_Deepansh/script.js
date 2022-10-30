const form = document.getElementById("form");
const buttons = document.querySelectorAll("button");
const username = document.getElementById("username");
const userlastname = document.getElementById("userlastname");
const email = document.getElementById("email");
const mobile = document.getElementById("usermobile");
const country = document.getElementById("country");
var allTrue = false;

buttons[0].addEventListener("click", (e) => {
  e.preventDefault();
  checkInputs();
});
buttons[1].addEventListener("click", (e) => {
  e.preventDefault();
  resetInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const userlastnameValue = userlastname.value.trim();
  const emailValue = email.value.trim();
  const mobileValue = mobile.value.trim();
  const countryValue = country.value;

  if (usernameValue === "") {
    setErrorFor(username, "First name cannot be blank");
    allTrue = false;
  } else if (usernameValue.length < 3) {
    setErrorFor(username, "First length min 3 characters");
    allTrue = false;
  } else if (/[0-9]/.test(usernameValue)) {
    setErrorFor(username, "First can not contain digits");
    allTrue = false;
  } else {
    setSuccessFor(username);
    allTrue = true;
  }

  if (userlastnameValue === "") {
    setErrorFor(userlastname, "Last name cannot be blank");
    allTrue = false;
  } else if (userlastnameValue.length < 3) {
    setErrorFor(userlastname, "First length min 3 characters");
    allTrue = false;
  } else if (/[0-9]/.test(userlastnameValue)) {
    setErrorFor(userlastname, "First can not contain digits");
    allTrue = false;
  } else {
    setSuccessFor(userlastname);
    allTrue = true;
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
    allTrue = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
    allTrue = false;
  } else {
    setSuccessFor(email);
    allTrue = true;
  }

  if (countryValue == "choose..") {
    setErrorFor(country, "Please select a country");
    allTrue = false;
  } else {
    setSuccessFor(country);
    allTrue = true;
  }

  if (/[a-z]/.test(mobileValue)) {
    setErrorFor(mobile, "Mobile cannot contain characters");
    allTrue = false;
  } else if (/[A-Z]/.test(mobileValue)) {
    setErrorFor(mobile, "Mobile cannot contain characters");
    allTrue = false;
  } else if (mobileValue.length < 10 || mobileValue.length > 10) {
    setErrorFor(mobile, "Mobile sholud be exaclty 10 digits");
    allTrue = false;
  } else if (
    mobileValue[0] === "0" ||
    mobileValue[0] === "1" ||
    mobileValue[0] === "2" ||
    mobileValue[0] === "3" ||
    mobileValue[0] === "4" ||
    mobileValue[0] === "5"
  ) {
    setErrorFor(mobile, "Mobile should not start with 0, 1, 2, 3,4 or 5");
    allTrue = false;
  } else {
    setSuccessFor(mobile);
    allTrue = true;
  }

  if (allTrue) {
    alert("Your details have been saved successfully.");
  }
}

function resetInputs() {
  form.reset();
  const form_controls = form.querySelectorAll(".form-control");
  for (let i = 0; i < 6; i++) {
    form_controls[i].classList.remove("error");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
