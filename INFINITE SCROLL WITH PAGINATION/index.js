const postContainer = document.getElementById("posts-container");
const loader = document.querySelector(".loader");
const filter = document.getElementById("filter");

let limit = 5;
let page = 1;

// fetch post in api
async function getPosts() {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  const data = await response.json();
  return data;
}

// show post in dom
async function showPosts() {
  const posts = await getPosts();
  //   console.log(posts);
  posts.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
      <div class="number" > ${post.id}</div>
      <div class = "post-info">
      <h2 class="post-title">${post.title}</h2>
      <p class="post-body">${post.body}</p>
      </div>
      `;
    postContainer.appendChild(postEl);
  });
}

// show intial posts
showPosts();

// show loader
function showLoading() {
  loader.classList.add("show");
  setTimeout(() => {
    loader.classList.remove("show");
    setTimeout(() => {
      page++;
      showPosts();
    }, 300);
  }, 1000);
}

// scroll functionality
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});

// filter posts by input
function filterPosts(e) {
  const term = e.target.value.toUpperCase();
  const posts = document.querySelectorAll(".post");
  posts.forEach((post) => {
    const title = post.querySelector(".post-title").innerText.toUpperCase();
    const body = post.querySelector(".post-body").innerText;
    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = "flex";
    } else {
      post.style.display = "none";
    }
  });
}

filter.addEventListener("input", filterPosts);
