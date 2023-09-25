//! Isaac W's Section
// Global Variables
const mealListDiv = document.querySelector('#meal-list')
const mealInfoDiv = document.querySelector('#meal-info')
const mealNameH1 = document.querySelector('#meal-name')
const mealCategoryH3 = document.querySelector('#meal-category')
const mealInstructionP = document.querySelector('#meal-instructions')
const mealImageImg = document.querySelector('#meal-image')
const mealVideoA = document.querySelector('#meal-video')
const mealAreaH3 = document.querySelector('#meal-area')
const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s="
const ingredientsUl = document.querySelector('#ingredients-list')
const measurementsUl = document.querySelector('#measurement-list')

// Helper Functions
const fetchData = () => {
    fetch(URL)
    .then(response => response.json())
    .then(mealArray => {
        // console.log(mealArray.meals)
        const mealsArray = mealArray.meals
        mealsArray.forEach(mealObj => appendMealNameToNav(mealObj))
        displayMealInfo(mealsArray[0])
    })
    .catch(error => alert(error))
}

const appendMealNameToNav = (mealObj) => {
    const mealLi = document.createElement('li')
    mealLi.textContent = mealObj.strMeal
    mealLi.addEventListener('click', () => displayMealInfo(mealObj))
    mealListDiv.append(mealLi)
}

const displayMealInfo = (mealObj) => {
    mealNameH1.textContent = mealObj.strMeal
    mealImageImg.src = mealObj.strMealThumb
    mealImageImg.alt = mealObj.strMeal
    mealCategoryH3.textContent = mealObj.strCategory
    mealAreaH3.textContent = mealObj.strArea
    mealVideoA.href = mealObj.strYoutube
    mealVideoA.textContent = 'YouTube Link'
    mealInstructionP.textContent = mealObj.strInstructions

    while (measurementsUl.firstChild) {
        measurementsUl.removeChild(measurementsUl.lastChild)
    }
    
    while (ingredientsUl.firstChild) {
        ingredientsUl.removeChild(ingredientsUl.lastChild)
    }

    const measurementsH3 = document.createElement('h3')
    measurementsH3.textContent = 'Measurements:'
    measurementsUl.append(measurementsH3)

        for(let i in mealObj) {
            if(i.startsWith("strMeasure") && mealObj[i].trim() !== "") {
            const measurementsLi = document.createElement('li')
            measurementsLi.textContent = mealObj[i]
            measurementsUl.append(measurementsLi)
            }
        }

    const ingredientsH3 = document.createElement('h3')
    ingredientsH3.textContent = 'Ingredients:'
    ingredientsUl.append(ingredientsH3)

        for(let i in mealObj) {
            if(i.startsWith("strIngredient") && mealObj[i] !== "") {
            const ingredientsLi = document.createElement('li')
            ingredientsLi.textContent = mealObj[i]
            ingredientsUl.append(ingredientsLi)
            }
        }
    }




// Execute Code
fetchData()
//! Hanna's Section





//! Isaac S's Section