let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");
import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from "./snake.js";

function main(currentTime){
    
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    //console.log(currentTime);

    if (secondsSinceLastRender < 1/SNAKE_SPEED){
        return
    }

    console.log("RENDER");
    lastRenderTime = currentTime;
    update()
    draw()
}
    

window.requestAnimationFrame(main);

function update(){
    updateSnake();
}

function draw(){
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
}
