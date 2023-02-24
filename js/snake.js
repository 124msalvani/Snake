import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 0.5


const snakeBody = [
    {x: 11, y: 11},
]

var snakeHead = snakeBody [0];

let newSegments = 0;
export function update() {
    addSegments();
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]}
    }
    
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y

   console.log(inputDirection.x)
   if (inputDirection.x == 1){
        document.getElementById("head").classList.add("movingdown");
   }
   console.log(inputDirection.y)
}

export function draw(gameBoard) {
    // console.log('draw snake')
    
    snakeBody.forEach((segment,index) => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        if(index == 0)
        {
            snakeElement.setAttribute('id', 'head')
        }
        gameBoard.appendChild(snakeElement)
    });

    function snakeHeadTest(){
        console.log(snakeHead);
        // document.getElementById("head").style.backgroundColor = "yellow";
        
    };
    
    snakeHeadTest();
};

export function expandSnake(amount){
    newSegments += amount;
};

export function onSnake(position, {ignoreHead = false} = {}){
    return snakeBody.some((segment,index) => {
        if (ignoreHead && index ===0) return false;
        return equalPostions (segment,position)
    })
};

export function getSnakeHead(){
    return snakeHead;
}

export function snakeIntersection(){
    return onSnake(snakeHead, {ignoreHead:true});
}

function equalPostions (pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments(){
    for (let i = 0; i < newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length + 1]})
    };

    newSegments = 0;
    
}