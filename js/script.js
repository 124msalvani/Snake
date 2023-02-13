let lastRenderTime = 0;
import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from "./snake.js";

function main(currentTime){
const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    window.requestAnimationFrame(main);
    
    //console.log(currentTime);
    
    if (secondsSinceLastRender < 1/SNAKE_SPEED){
        return
    }

    console.log("RENDER");
    lastRenderTime = currentTime;
    function update(){
        updateSnake();
    }
    
    function draw(){
        drawSnake();
    }
    
}
window.requestAnimationFrame(main);

