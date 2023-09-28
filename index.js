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
const localURL = 'http://localhost:8000/meals'
const ingredientsUl = document.querySelector("#ingredients-list");
const measurementsUl = document.querySelector("#measurement-list");

// Helper Functions
const fetchData = () => {
  fetch(localURL)
    .then(response => response.json())
    .then(mealArray => {

      // Clear the mealListDiv
      mealListDiv.innerHTML = '';

      // Append to Nav bar
      
      mealArray.forEach(mealObj => appendMealNameToNav(mealObj));
      
      // Display meal info for the first meal in the list
      displayMealInfo(mealArray[0])
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
  measurementsH3.textContent = "Measurements and Ingredients:";
  measurementsUl.append(measurementsH3);
  
  for (let i in mealObj) {
    if (i.startsWith("strMeasure") && mealObj[i].trim() !== "") {
      const ingredientIndex = i.replace("strMeasure", "strIngredient");
      const measurementsLi = document.createElement("li");
      measurementsLi.textContent = `${mealObj[i]} - ${mealObj[ingredientIndex]}`;
      measurementsUl.append(measurementsLi);
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

const addMealToFormPersist = () => {
  // build new meal object from form inputs
  const inputName = document.querySelector(["#new-name"]).value;
  const inputCategory = document.querySelector(["#new-category"]).value;
  const inputInstruction = document.querySelector(["#new-instruction"]).value;
  const inputLocation = document.querySelector(["#new-location"]).value;
  const inputImage = document.querySelector(["#new-image"]).value;

  const newMeal = {
    strMeal: inputName,
    strCategory: inputCategory,
    strInstructions: inputInstruction,
    strArea: inputLocation,
    strMealThumb: inputImage,
  };

  // POST new meal to db
  fetch(localURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newMeal),
  });

  //Invoke the function to add new meal
  displayMealInfo(newMeal);
  //Invoke the function to display the details of the new meal
  appendMealNameToNav(newMeal);
};

// Execute Code
fetchData();

mealForm.addEventListener("submit", e => {
  e.preventDefault();
  addMealToFormPersist();
  e.target.reset();
});

//! Hanna's Section
//Form to add meal

//Global variable
const mealForm = document.querySelector("#form-container");
const modal = document.querySelector("#mealModal");

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
