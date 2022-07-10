const search = document.querySelector("#search");
const submit = document.querySelector("#submit");
const random = document.querySelector("#random");
const mealsEl = document.querySelector("#meals");
const resultHeading = document.querySelector("#result-heading");
const single_mealEl = document.querySelector("#single-meal");

//Functions
function searchMeal(e) {
  e.preventDefault();

  //Clear Single Meal
  single_mealEl.innerHTML = "";

  //Get search term
  const term = search.value;
  //   console.log(term);

  //check for empty search
  if (term.trim()) {
    fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resultHeading.innerHTML = `<h2>Search Results for '${term}':</h2>`;
        if (data.meals === null) {
          resultHeading.innerHTML = `<p>There are no search results for ${term}. Try again!</p>`;
          mealsEl.innerHTML = "";
        } else {
          mealsEl.innerHTML = data.meals
            .map(
              (meal) =>
                `<div class="meal">
                    <img src="${meal.strMealThumb}" alt=${meal.strMeal}/>
                    <div class="meal-info" data-mealID="${meal.idMeal}">
                        <h3>${meal.strMeal}</h3>
                    </div>
                </div>
                `
              //   console.log(meal.strMealThumb);
            )
            .join("");
        }
      });

    //Clear search Text
    search.value = "";
  } else {
    alert("Please Enter a search Value!");
  }
}

//displaying selected meal form list
function getMealByID(mealID) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then((res) => res.json())
    .then((data) => {
      const meal = data.meals[0];
      // console.log(meal);
      addMealtoDom(meal);
    });
}

//fetch random meals
function getRandomMeals(e) {
  //Clear meals and heading
  mealsEl.innerHTML = "";
  resultHeading.innerHTML = "";
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((res) => res.json())
    .then((data) => {
      const meals = data.meals[0];
      addMealtoDom(meals);
    });
}

function addMealtoDom(meal) {
  const ingredients = [];
  for (let i = 1; i < 21; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }
  //   console.log(ingredients);

  single_mealEl.innerHTML = `
    <div class="single-meal">
        <h1>
            ${meal.strMeal}
        </h1>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <div class="single-meal-info">
            ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ""}
            ${meal.strArea ? `<p>${meal.strArea}</p>` : ""}
        </div>
        <div class="main">
            <p>
                ${meal.strInstructions}
            </p>
            <h2>
                Ingredients
            </h2>
            <ul>
                ${ingredients.map((ing) => `<li>${ing}</li>`).join("")}
            </ul>
        </div>
    </div>
    `;
}
//Event Listners

submit.addEventListener("submit", searchMeal);
mealsEl.addEventListener("click", (e) => {
  const mealInfo = e.path.find((item) => {
    if (item.classList) {
      return item.classList.contains("meal-info");
    } else {
      return false;
    }
  });
  // console.log(mealInfo)

  if (mealInfo) {
    const mealID = mealInfo.getAttribute("data-mealID");
    console.log(mealID);
    getMealByID(mealID);
  }
});

random.addEventListener("click", getRandomMeals);
