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

// Helper Functions
const fetchData = () => {

}

const appendMealNameToNav = (mealObj) => {
    const mealLi = document.createElement('li')
    mealLi.textContent = mealObj.strMeal
    
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
}

//! Hanna's Section





//! Isaac S's Section