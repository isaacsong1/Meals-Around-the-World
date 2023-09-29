# Meals Around the World

Welcome to Meals Around the World. Meals Around the World is a single-page JavaScript web application that uses TheMealDB to fetch meal recipes from its [API](https://www.themealdb.com/api/json/v1/1/search.php?s=). TheMealDB API is an open database focusing on recipes from around the world. This web app is intended for people to access the list of meals from different countries. The users can click on a meal to see the list of meals that displays the name of the meal, its image, what category it is, where it came from, how to make it, its measurements, and more. Furthermore, the web app allows users to type on a search tab to search for a specific meal list. There is a form for a user to input to add a meal with information that is added to the list of meals.

#### Project Developers:

- [Hanna Negash](https://github.com/Hanna-N9)
- [Isaac Song](https://github.com/isaacsong1)
- [Isaac Wilhite](https://github.com/isaacwilhite)

---

## Demo

![Alt text](/phase-1-project-gif.gif)

## Installation

#### 1. Fork this repository

![Alt text](/images/image.png)

#### 2. In terminal, choose or create a folder you want to work in
```shell
mkdir FOLDERNAME
```
---
#### 3. Clone from SSH into your local environment

![Alt text](/images/image-1.png)

```shell
git clone git@github.com:isaacsong1/Meals-Around-the-World.git
```

#### 4. Start local JSON Server. Inside terminal, run

```shell
json-server --watch db.json
```

#### 5. In the terminal, open the file to check in the browser
Mac:
```shell
open index.html
```
Windows:
```shell
explorer.exe index.html
```
---
## Usage

#### Analyze recipe information
* Meal name, category, and country of origin
* Picture of the dish
* Ingredient and measurement list
* Instructions on how to prepare the dish

#### Interact with navigation bar on the left
* View selected meal on the main page by clicking on meal name

#### Search desired meals
* Enter the name of the dish in the search bar then press 'enter'
* Navigation bar on the left should be updated with names including search parameter
* Click on meal name in navigation bar to display information on the main page

#### Add your own meal and display it on the main page once submitted
* Click on 'Open to Add Meal' button
* Enter new meal's information per instructions below
    * Meal's Name (Ex: Chicken Nuggets)
    * Category (Ex: Chicken)
    * Country of Origin (Ex: American)
    * Image URL
    * Measurements and Ingredients items separated by commas (Ex: 3, Chicken Breasts, 1 cup, Bread Crumbs, 1 tbsp, Dried Basil, ...)
    * Directions
* Press 'Submit' button and meal will display on the main page and meal's name will be appended to navigation bar
* Form is cleared, press 'X' to close modal

#### Display a random meal
* Can't figure out what to eat? We have that covered.
* Press the 'Random Meal' button and a meal will appear on the main page with all the information

---
## References

- [TheMealDB API](https://www.themealdb.com/api/json/v1/1/search.php?s=)
- [TheMealDB Main Website](https://www.themealdb.com/api.php)
- [Explore TheMealDB API using JavaScript](https://publicapis.io/the-meal-db-api)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change and we will review them as soon as we can.

Please make sure to update tests as appropriate.

## License

[MIT License](https://choosealicense.com/licenses/mit/)
