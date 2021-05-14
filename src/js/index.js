import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "IeQRy8GwrRH2tC18ozyqgLhBwjwzQtO1C30FOcLH";
const query = async function () {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?complexSearch?addRecipeInformation=true&sort=healthiness&apiKey=1e36a4fa47e6498e8d1346724fa2ca66`
    );
    const data = await response.json();
    data.results.forEach((recipes) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="recipe-card">
        <div class="recipe-card-front">
        </div>
        < class="recipe-card-back">
          <h3 class="recipe-card-header">${recipes.original_name}</h3>
          <div class="score-box">
            <p class="health-score">Community Score</p>
            <p class="health-score">${recipes.health_score}</p>
          </div>
          <div class="food-box">
            <p class="food-form">Consistency</p>
            <p class="food-form">${recipes.consistency}</p>
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
