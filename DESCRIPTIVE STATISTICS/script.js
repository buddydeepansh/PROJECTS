var submitt = document.querySelector("#submit-1");
var submitt2;
submitt.addEventListener("click", () => {
  localStorage.clear();
  let n = parseInt(document.querySelector("#n-input").value);
  //console.log(n);
  let string1 = "<br>Enter <input type='text'></input>";
  var string2 = "";
  for (let j = 0; j < n; j++) {
    string2 = string2.concat(
      `<br>Enter ${j + 1} value: <input class="paddingg" type='text'></input>`
    );
  }
  string2 = string2.concat(
    `<br/><button type="button" class="paddingg" id="submit-2">Submit</button>`
  );
  //console.log(string2);
  var divv2 = document.querySelector(".div-one");
  localStorage.setItem("divv3", string2);
  divv2.innerHTML = localStorage.getItem("divv3");
  submitt2 = document.querySelector("#submit-2");

  submitt2.addEventListener("click", () => {
    //console.log("this is button 2: " + submitt2.value);
    var value1 = document.querySelectorAll(".div-one input");
    //console.log("This is value 1: " + value1[0].value);
    //console.log(`length of value1 is ${value1.length}`);
    var arr1 = new Array(value1.length);
    for (let i = 0; i < value1.length; i++) {
      arr1[i] = parseInt(value1[i].value);
    }
    arr1.sort();
    //console.log(`${arr1[0]}    ${arr1[1]}`);
    var mean = Calc_mean(arr1);
    var median = Calc_median(arr1);
    var mode = new Array();
    mode = Calc_mode(arr1);
    var min = Calc_min(arr1);
    var max = Calc_max(arr1);
    var range = max - min;
    var sum_data = Calc_sum(arr1);
    //console.log(`the value of modes is: ${mode[0]} ${mode[1]}`);
    var para_two = document.querySelector("#para-two");
    para_two.innerHTML = `THE MEAN OF ABOVE VALUES ARE: ${mean}
       <br/> THE MEDIAN OF ABOVE VALUES ARE: ${median}<br/>
       THE MODE OF ABOVE VALUES ARE: ${mode}
       <br/>The MINIMUM ELEMENT is: ${min}
       <br/>The MAXIMUM ELEMENT is: ${max}
       <br/>The Range is: ${range}
       <br/>The size of dataset is: ${arr1.length}
       <br/> The SUM of dataset is: ${sum_data}`;
  });
});
function Calc_mean(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
    sum += x[i];
  }
  //console.log(sum);
  sum = sum / x.length;
  return sum;
}
function Calc_median(x) {
  let midlle = 0;
  let length = x.length;
  if (length % 2 != 0) {
    midlle = length / 2;
    midlle = Math.floor(midlle);
    return x[midlle];
  } else {
    midlle = length / 2;
    let y = (x[midlle] + x[midlle - 1]) / 2;
    return y;
  }
}
function Calc_mode(arr) {
  const frequencyTable = {};
  arr.forEach((elem) => (frequencyTable[elem] = frequencyTable[elem] + 1 || 1));
  let modes = [];
  let maxFrequency = 0;
  for (const key in frequencyTable) {
    if (frequencyTable[key] > maxFrequency) {
      modes = [Number(key)];
      maxFrequency = frequencyTable[key];
    } else if (frequencyTable[key] === maxFrequency) {
      modes.push(Number(key));
    }
  }
  if (modes.length === Object.keys(frequencyTable).length) modes = [];
  return modes;
}
function Calc_min(x) {
  x.sort();
  return x[0];
}
function Calc_max(x) {
  x.sort();
  return x[x.length - 1];
}
function Calc_sum(x) {
  let sum = 0;
  for (i = 0; i < x.length; i++) {
    sum += x[i];
  }
  return sum;
}
