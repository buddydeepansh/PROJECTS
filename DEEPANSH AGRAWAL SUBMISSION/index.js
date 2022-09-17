const cards = document.querySelector(".card");
const submit_btn = document.querySelector("#submit_btn");
submit_btn.addEventListener("click", logged);
getCards();
function getCards() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      const data_nine = data.filter((element) => {
        return element.id % 9 == 0;
      });
      const data_nine_not = data.filter((element) => {
        return element.id % 9 != 0;
      });
      console.log(data_nine);
      data_nine_not.forEach((element) => {
        const card = document.createElement("div");
        const heading1 = document.createElement("h5");
        const para = document.createElement("p");
        heading1.innerText = `Title : ${element.id}  ${element.title}`;
        para.innerText = `Body : ${element.body}`;
        card.classList.add("card-body");
        heading1.classList.add("card-title");
        para.classList.add("card-text");
        card.appendChild(heading1);
        card.appendChild(para);
        cards.appendChild(card);
        if (element.id % 2 == 0) {
          card.classList.add("green");
        } else {
          card.classList.add("red");
        }
        if (
          element.title ==
          "asperiores ea ipsam voluptatibus modi minima quia sint"
        ) {
          card.classList.remove("red");
          card.classList.remove("green");
          card.classList.add("yellow");
        }
      });
    });
}

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.querySelector(".table1");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td1 = tr[i].getElementsByTagName("td")[0];
    td2 = tr[i].getElementsByTagName("td")[1];
    if (td1) {
      txtValue = td1.textContent || td1.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function logged(e) {
  e.preventDefault();
  const name = document.querySelector("#name");
  const date = document.querySelector("#date");
  const feedback1 = document.querySelector("#feedback_title");
  const feedback2 = document.querySelector("#feedback_body");
  const ticks = document.querySelectorAll(`input[type="checkbox"]`);
  const radios = document.querySelectorAll(`input[type="radio"]`);
  console.log(`name: ${name.value}`);
  console.log(`Date: ${date.value}`);
  console.log(`Feedback Title: ${feedback1.value}`);
  console.log(`Feedback Body: ${feedback2.value}`);
  ticks.forEach((tick) => {
    if (tick.checked) {
      console.log(tick.value);
    }
  });
  radios.forEach((radio) => {
    if (radio.checked) {
      console.log(`Gender:  ${radio.value}`);
    }
  });
}
