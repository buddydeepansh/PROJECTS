// PEXELS API KEY: 563492ad6f91700001000001d8156c67d4694f8ba9f9fe676a10e947
const auth = "563492ad6f91700001000001d8156c67d4694f8ba9f9fe676a10e947";
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const searchForm = document.querySelector(".search-form");
const more = document.querySelector(".more");
let page = 1;
let fetchLink = "";
let searchValue;
let currentSearch = "";

searchInput.addEventListener("input", updateInput);
more.addEventListener("click", loadMore);
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  currentSearch = searchValue;
  searchPhotos(searchValue);
});

async function curatedPhotos() {
  fetchLink = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const data = await fetchApi(fetchLink);
  generatePictures(data);
}

async function searchPhotos(query) {
  fetchLink = `https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`;
  const data = await fetchApi(fetchLink);
  clear();
  generatePictures(data);
}

function updateInput(e) {
  // console.log(e.target.value);
  searchValue = e.target.value;
}

function clear() {
  gallery.innerHTML = "";
  searchInput.value = "";
}

async function fetchApi(url) {
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth,
    },
  });
  const data = await dataFetch.json();
  return data;
}

function generatePictures(data) {
  data.photos.forEach((photo) => {
    console.log(photo);
    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-image");
    galleryImg.innerHTML = `
    <div class="gallery-info">    
    <p>${photo.photographer}</p>
        <a href="${photo.src.original}" target="_blank">Download</a>
        </div>
        <img src=${photo.src.large}></img>
      `;
    gallery.appendChild(galleryImg);
  });
}

async function loadMore(e) {
  page++;
  if (currentSearch) {
    fetchLink = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`;
  } else {
    fetchLink = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
  }
  const data = await fetchApi(fetchLink);
  generatePictures(data);
}

curatedPhotos();
