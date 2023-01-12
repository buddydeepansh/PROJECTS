let userAllData;
async function getUserDetails() {
  const userData = await fetch("https://randomuser.me/api/");
  const userParsedData = await userData.json();
  const data = userParsedData.results[0];
  userAllData = data;
}
function setInitialDetails() {
  const name = document.querySelector("#name");
  const profile = document.querySelector("#userImage");
  name.innerText = `${userAllData.name.title} ${userAllData.name.first} ${userAllData.name.last}`;
  profile.src = userAllData.picture.large;
}
function displayAge() {
  const additionalDetails = document.querySelector(".additionalDetails");
  additionalDetails.innerText = `Age: ${userAllData.dob.age} years`;
}
function displayEmail() {
  const additionalDetails = document.querySelector(".additionalDetails");
  additionalDetails.innerText = `Email: ${userAllData.email}`;
}
function displayPhone() {
  const additionalDetails = document.querySelector(".additionalDetails");
  additionalDetails.innerText = `Phone: ${userAllData.phone} and ${userAllData.cell}`;
}
function newUser() {
  const additionalDetails = document.querySelector(".additionalDetails");
  additionalDetails.innerHTML = "";
  getUserDetails();
  setTimeout(() => {
    // console.log(userAllData);
    setInitialDetails();
  }, 500);
}
newUser();
