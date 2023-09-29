//Global variable
const mealForm = document.querySelector("#form-container");
const modal = document.querySelector("#mealModal");
const mealListDiv = document.querySelector("#meal-list");
const mealInfoDiv = document.querySelector("#meal-info");
const mealNameH1 = document.querySelector("#meal-name");
const mealCategoryH3 = document.querySelector("#meal-category");
const mealInstructionP = document.querySelector("#meal-instructions");
const mealImageImg = document.querySelector("#meal-image");
const mealVideoA = document.querySelector("#meal-video");
const mealAreaH3 = document.querySelector("#meal-area");
const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const localURL = 'http://localhost:3000/meals'
const ingredientsUl = document.querySelector("#ingredients-list");
const measurementsUl = document.querySelector("#measurement-list");
const search = document.querySelector("#search-form-container");

//For the modal
//To open the modal
function openForm() {
  modal.style.display = "block";
}
//To close the modal
function closeForm() {
  modal.style.display = "none";
}

// Helper Functions
const fetchData = () => {
  fetch(localURL)
    .then(response => response.json())
    .then(mealArray => {
      // Clear the mealListDiv
      mealListDiv.innerHTML = '';
      // Append to Nav bar
      mealArray.forEach(mealObj => {
        if (mealObj) {
          appendMealNameToNav(mealObj)
        }
      });
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

// POST new meal to db
const addMealToFormPersist = () => {
// build new meal object from form inputs
  const inputName = document.querySelector("#new-name").value;
  const inputCategory = document.querySelector("#new-category").value;
  const inputInstruction = document.querySelector("#new-instruction").value;
  const inputLocation = document.querySelector("#new-location").value;
  const inputImage = document.querySelector("#new-image").value;
  const measurement1 = document.querySelector('#new-measurements1').value;
  const measurement2 = document.querySelector('#new-measurements2').value;
  const measurement3 = document.querySelector('#new-measurements3').value;
  const measurement4 = document.querySelector('#new-measurements4').value;
  const measurement5 = document.querySelector('#new-measurements5').value;
  const measurement6 = document.querySelector('#new-measurements6').value;
  const measurement7 = document.querySelector('#new-measurements7').value;
  const measurement8 = document.querySelector('#new-measurements8').value;
  const measurement9 = document.querySelector('#new-measurements9').value;
  const measurement10 = document.querySelector('#new-measurements10').value;
  const ingredient1 = document.querySelector('#new-ingredients1').value;
  const ingredient2 = document.querySelector('#new-ingredients2').value;
  const ingredient3 = document.querySelector('#new-ingredients3').value;
  const ingredient4 = document.querySelector('#new-ingredients4').value;
  const ingredient5 = document.querySelector('#new-ingredients5').value;
  const ingredient6 = document.querySelector('#new-ingredients6').value;
  const ingredient7 = document.querySelector('#new-ingredients7').value;
  const ingredient8 = document.querySelector('#new-ingredients8').value;
  const ingredient9 = document.querySelector('#new-ingredients9').value;
  const ingredient10 = document.querySelector('#new-ingredients10').value;

  const newMeal = {
    strMeal: inputName,
    strCategory: inputCategory,
    strInstructions: inputInstruction,
    strArea: inputLocation,
    strMealThumb: inputImage,
    strIngredient1: ingredient1,
    strIngredient2: ingredient2,
    strIngredient3: ingredient3,
    strIngredient4: ingredient4,
    strIngredient5: ingredient5,
    strIngredient6: ingredient6,
    strIngredient7: ingredient7,
    strIngredient8: ingredient8,
    strIngredient9: ingredient9,
    strIngredient10: ingredient10,
    strMeasure1: measurement1,
    strMeasure2: measurement2,
    strMeasure3: measurement3,
    strMeasure4: measurement4,
    strMeasure5: measurement5,
    strMeasure6: measurement6,
    strMeasure7: measurement7,
    strMeasure8: measurement8,
    strMeasure9: measurement9,
    strMeasure10: measurement10,
  };

  // POST new meal to db
  fetch(localURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMeal),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to add meal. Check your server.');
    }
    return response.json();
  })
  .then(data => {
    console.log("Meal added successfully:", data);
    
    displayMealInfo(newMeal);
    appendMealNameToNav(newMeal);
  })
  .catch(error => {
    console.error("Error adding meal:", error);
    // Handle errors or show an error message to the user
  });
};
  
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
      if (mealArr.meals.length) {
        mealArr.meals.forEach(meal => appendMealNameToNav(meal));
      } else {
        fetchData();
        alert("No meals exist with that name")
      }
    });
};

// Execute Code
fetchData();

mealForm.addEventListener("submit", e => {
  e.preventDefault();
  addMealToFormPersist();
  e.target.reset();
});

search.addEventListener("change", searchByName)


