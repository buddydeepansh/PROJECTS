const currencyElement_1 = document.querySelector("#currrency-one");
const currencyElement_2 = document.querySelector("#currrency-two");
const amountElement_1 = document.getElementById("amount-one");
const amountElement_2 = document.querySelector("#amount-two");
const rateEl = document.querySelector("#rate");
const swap = document.querySelector("#swap");
console.log(amountElement_1.value);
// Fetch Exchange Rates & Update the Dom
function calculate() {
  let currency1 = currencyElement_1.value;
  let currency2 = currencyElement_2.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency1}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency2];
      rateEl.innerText = `1 ${currency1} = ${rate} ${currency2}`;
      amountElement_2.value = (amountElement_1.value * rate).toFixed(2);
    });
}

calculate();
currencyElement_1.addEventListener("change", calculate);
currencyElement_2.addEventListener("change", calculate);
amountElement_1.addEventListener("input", calculate);
amountElement_2.addEventListener("input", calculate);
swap.addEventListener("click", () => {
  const temp = currencyElement_1.value;
  currencyElement_1.value = currencyElement_2.value;
  currencyElement_2.value = temp;
  calculate();
});
