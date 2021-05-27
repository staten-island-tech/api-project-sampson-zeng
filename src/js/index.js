import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "ebf289106ee24a3580a099e57deeb507";

const query = async function () {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=ebf289106ee24a3580a099e57deeb507`
    );
    const data = await response.json();
    data.results.forEach((recipes) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="recipe-card">
        <div class="recipe-card-front">
        </div>
        <div class="recipe-card-back">
          <h3 class="recipe-card-header">${recipes.title}</h3>
          <div class="score-box">
            <p class="health-score">Community Score</p>
            <p class="health-score">${recipes.health_score}</p>
          </div>
          <div class="food-box">
            <p class="spoon-score">Spoonacular Score</p>
            <p class="spoon-score">${recipes.spoonacular_score}</p>
          </div>
        </div>
      </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("Hey something went wrong");
  }
};

query();
