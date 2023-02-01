const nameTimeZone = document.querySelector("#name");
const lat = document.querySelector("#lat");
const long = document.querySelector("#long");
const std = document.querySelector("#std");
const stdsec = document.querySelector("#stdsec");
const dst = document.querySelector("#dst");
const dstsec = document.querySelector("#dstsec");
const country = document.querySelector("#country");
const postcode = document.querySelector("#postcode");
const city = document.querySelector("#city");

const nameTimeZone2 = document.querySelector("#name2");
const lat2 = document.querySelector("#lat2");
const long2 = document.querySelector("#long2");
const std2 = document.querySelector("#std2");
const stdsec2 = document.querySelector("#stdsec2");
const dst2 = document.querySelector("#dst2");
const dstsec2 = document.querySelector("#dstsec2");
const country2 = document.querySelector("#country2");
const postcode2 = document.querySelector("#postcode2");
const city2 = document.querySelector("#city2");
const addressInput = document.querySelector("#address");
let errorintial = false;
let initialLat = "";
let initialLong = "";

const getInitialLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      initialLat = position.coords.latitude;
      initialLong = position.coords.longitude;
      console.log("Latitude: " + initialLat + ", Longitude: " + initialLong);
      errorintial = false;
      showLocation();
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
    errorintial = true;
  }
};
const showLocation = async () => {
  const apiResult = await fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${initialLat}&lon=${initialLong}&apiKey=7e59c0517302461fb349dbe08b697b53`
  );
  let jsonData = await apiResult.json();
  nameTimeZone.innerHTML = jsonData.features[0].properties.timezone.name;
  lat.innerHTML = jsonData.features[0].properties.lat;
  long.innerHTML = jsonData.features[0].properties.lon;
  std.innerHTML = jsonData.features[0].properties.timezone.offset_STD;
  stdsec.innerHTML =
    jsonData.features[0].properties.timezone.offset_STD_seconds;
  dst.innerHTML = jsonData.features[0].properties.timezone.offset_DST;
  dstsec.innerHTML =
    jsonData.features[0].properties.timezone.offset_DST_seconds;
  country.innerHTML = jsonData.features[0].properties.country;
  city.innerHTML = jsonData.features[0].properties.city;
  postcode.innerHTML = jsonData.features[0].properties.state_code;
  console.log(jsonData.features[0].properties.timezone.name);
};

const searchResults = async () => {
  let addressinputted = addressInput.value.split(" ").join("%20");
  addressinputted = addressinputted.split(",").join("");
  const apiResult = await fetch(
    `https://api.geoapify.com/v1/geocode/search?text=${addressinputted}&apiKey=7e59c0517302461fb349dbe08b697b53`
  );
  let jsonData = await apiResult.json();
  if (apiResult.status === 200 && jsonData.features.length > 0) {
    document.querySelector(".currentzonecontainer2").style.display = "flex";
    document.querySelector("#error").style.display = "none";
    nameTimeZone2.innerHTML = jsonData.features[0].properties.timezone.name;
    lat2.innerHTML = jsonData.features[0].properties.lat;
    long2.innerHTML = jsonData.features[0].properties.lon;
    std2.innerHTML = jsonData.features[0].properties.timezone.offset_STD;
    stdsec2.innerHTML =
      jsonData.features[0].properties.timezone.offset_STD_seconds;
    dst2.innerHTML = jsonData.features[0].properties.timezone.offset_DST;
    dstsec2.innerHTML =
      jsonData.features[0].properties.timezone.offset_DST_seconds;
    country2.innerHTML = jsonData.features[0].properties.country;
    city2.innerHTML = jsonData.features[0].properties.city;
    postcode2.innerHTML = jsonData.features[0].properties.state_code;
    console.log(jsonData.features[0].properties.timezone.name);
  } else {
    document.querySelector(".currentzonecontainer2").style.display = "none";
    document.querySelector("#error").style.display = "inline-block";
  }
};
getInitialLocation();
