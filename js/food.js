import { onSnake, expandSnake } from "./snake.js";
import {randomGridPosition} from "./grid.js";
let food = {x:11,y:5};
const  EXPANSION_RATE = 1;
var score = 1


export function update() {
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE);
        var audioEat = document.getElementById("eatAudio");
        audioEat.volume = 0.1;
        audioEat.play();
        food = getRandomFoodPosition();
        document.getElementById("scoreboard").innerHTML = score ++;
        
    }
}

export function draw(gameBoard) {
    // console.log('draw snake')
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    };
    return newFoodPosition
};