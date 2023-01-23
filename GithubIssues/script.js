let userData;
let index = 1;
let count = 0;
const getData = async () => {
  const udata = await fetch(
    `https://api.github.com/repositories/1296269/issues?page=${index}&per_page=5`
  );
  const jsonData = await udata.json();
  userData = await jsonData;
};
const printData = async () => {
  await getData();
  setTimeout(() => {
    const list = document.querySelector(".List");
    list.innerHTML = "";
    list.setAttribute("start", count);
    for (let i = 0; i < 5; i++) {
      const li = document.createElement("li");
      console.log(userData);
      li.innerText = `${userData[i].title} - ${userData[i].html_url}`;
      list.appendChild(li);
      count++;
    }
  }, 1000);
};
const nextPage = async () => {
  index++;
  document.querySelector("#currentPage").innerText = `Page ${index}`;
  // await getData();
  await printData();
};
const prevPage = async () => {
  if (index === 1) {
    return;
  }
  index--;
  count = count - 10;
  document.querySelector("#currentPage").innerText = `Page ${index}`;
  // await getData();
  await printData();
};

printData();
