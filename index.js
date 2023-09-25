//! Isaac W's Section
// Global Variables
const mealListDiv = document.querySelector('#meal-list')
const mealInfoDiv = document.querySelector('#meal-info')
const mealNameH1 = document.createElement('h1')
const mealCategoryH3 = document.createElement('h3')
const mealInstructionP = document.createElement('p')
const mealImageImg = document.createElement('img')
const mealVideoA = document.createElement('a')
const mealAreaH3 = document.createElement('h3')

// Helper Functions
const displayMealInfo = (mealObj) => {
    mealNameH1.textContent = mealObj.strMeal
    mealImageImg.src = mealObj.strMealThumb
    mealImageImg.alt = mealObj.strMeal
    mealCategoryH3.textContent = mealObj.strCategory
    mealAreaH3.textContent = mealObj.strArea
    mealVideoA.href = mealObj.strYoutube
    mealVideoA.textContent = 'YouTube Link'
    mealInstructionP.textContent = mealObj.strInstructions
}

//! Hanna's Section





//! Isaac S's Section