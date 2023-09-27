//! Isaac W's Section
// Global Variables
const mealListDiv = document.querySelector("#meal-list");
const mealInfoDiv = document.querySelector("#meal-info");
const mealNameH1 = document.querySelector("#meal-name");
const mealCategoryH3 = document.querySelector("#meal-category");
const mealInstructionP = document.querySelector("#meal-instructions");
const mealImageImg = document.querySelector("#meal-image");
const mealVideoA = document.querySelector("#meal-video");
const mealAreaH3 = document.querySelector("#meal-area");
const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const ingredientsUl = document.querySelector("#ingredients-list");
const measurementsUl = document.querySelector("#measurement-list");

// Helper Functions
const fetchData = () => {
  fetch(URL)
    .then(response => response.json())
    .then(mealArray => {
      // console.log(mealArray.meals)
      const mealsArray = mealArray.meals;
      mealsArray.forEach(mealObj => appendMealNameToNav(mealObj));
      displayMealInfo(mealsArray[0]);
    })
    .catch(error => alert(error));
};

const appendMealNameToNav = mealObj => {
  const mealLi = document.createElement("li");
  mealLi.textContent = mealObj.strMeal;
  mealLi.id = "list-item";
  mealLi.addEventListener("click", () => displayMealInfo(mealObj));
  mealListDiv.append(mealLi);
};

const displayMealInfo = mealObj => {
  mealNameH1.textContent = mealObj.strMeal;
  mealImageImg.src = mealObj.strMealThumb;
  mealImageImg.alt = mealObj.strMeal;
  mealCategoryH3.textContent = `Category: ${mealObj.strCategory}`;
  mealAreaH3.textContent = `Country: ${mealObj.strArea}`;
  // mealVideoA.href = mealObj.strYoutube;
  // mealVideoA.textContent = "YouTube Link";
  mealInstructionP.textContent = mealObj.strInstructions;

  while (measurementsUl.firstChild) {
    measurementsUl.removeChild(measurementsUl.lastChild);
  }

  while (ingredientsUl.firstChild) {
    ingredientsUl.removeChild(ingredientsUl.lastChild);
  }

  const measurementsH3 = document.createElement("h3");
  measurementsH3.textContent = "Measurements";
  measurementsUl.append(measurementsH3);

  for (let i in mealObj) {
    if (i.startsWith("strMeasure") && mealObj[i].trim() !== "") {
      const measurementsLi = document.createElement("li");
      measurementsLi.textContent = mealObj[i];
      measurementsUl.append(measurementsLi);
    }
  }

  const ingredientsH3 = document.createElement("h3");
  ingredientsH3.textContent = "Ingredients";
  ingredientsUl.append(ingredientsH3);

  for (let i in mealObj) {
    if (i.startsWith("strIngredient") && mealObj[i] !== "") {
      const ingredientsLi = document.createElement("li");
      ingredientsLi.textContent = mealObj[i];
      ingredientsUl.append(ingredientsLi);
    }
  }
};

const displayRandomMeal = () => {
  const randomURL = 'https://www.themealdb.com/api/json/v1/1/random.php'
  fetch(randomURL)
  .then(response => response.json())
  .then(mealArray => {
    const mealsArray = mealArray.meals;
    displayMealInfo(mealsArray[0]);
  })
};

// Execute Code
fetchData();

//! Hanna's Section
//Form to add meal

//Global variable
const mealForm = document.querySelector("#form-container");
const modal = document.querySelector("#mealModal");

const addMealToForm = e => {
  //Prevent the page from refreshing
  e.preventDefault();
  //Target HTML elements in the form with texts entered in the inputs
  const inputName = e.target["new-name"].value;
  const inputCategory = e.target["new-category"].value;
  const inputInstruction = e.target["new-instruction"].value;
  const inputLocation = e.target["new-location"].value;
  const inputImage = e.target["new-image"].value;

  //Update/add inputs through HTML elements, which then is added to the database via properties.
  const newMeal = {
    strMeal: inputName,
    strCategory: inputCategory,
    strInstructions: inputInstruction,
    strArea: inputLocation,
    strMealThumb: inputImage,
  };

  //Invoke the function to get new meal on the browser
  displayMealInfo(newMeal);
  //Invoke the function to get new meal to the list
  appendMealNameToNav(newMeal);
  //Reset the form
  e.target.reset();
};
//Invoke the function when the form is submitted
mealForm.addEventListener("submit", addMealToForm);

//For the modal
//To open the modal
function openForm() {
  modal.style.display = "block";
}

//To close the modal
function closeForm() {
  modal.style.display = "none";
}

//! Isaac S's Section
// Global Variables
const search = document.querySelector("#search-form-container");

// Helper Functions
const updateNav = () => {
  while (mealListDiv.firstChild) {
    mealListDiv.removeChild(mealListDiv.lastChild);
  }
};

// Get e.target.value
// Fetch data using e.target.value at the end of our URL
// Remove elements in navbar
// Populate navbar with elements from search query
const searchByName = e => {
  fetch(`${URL}${e.target.value}`)
    .then(resp => resp.json())
    .then(mealArr => {
      updateNav();
      if (mealArr) {
        mealArr.meals.forEach(meal => appendMealNameToNav(meal));
      } else {
        alert("No meals exist with that name");
      }
    });
};

// Execute
search.addEventListener("change", searchByName);
