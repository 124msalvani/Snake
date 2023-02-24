let inputDirection = {x:0, y:0};
let lastInputDirection = {x:0, y:0};

var inputDirectionFace;
window.addEventListener("keydown", e=>{
    switch (e.key){
        case "ArrowUp":
            inputDirectionFace = "up";
            document.getElementById("head").classList.add("movingup")
            if (lastInputDirection.y !==0){
                break;
            }
            inputDirection = {x:0, y:-1};
            break;
        case "ArrowDown":
            inputDirectionFace = "down";
            // document.getElementById("head").style.borderBottomLeftRadius = "25px";
            // document.getElementById("head").style.borderBottomRightRadius = "25px";
            document.getElementById("head").classList.add("movingdown")
            if (lastInputDirection.y !==0){
                break;
            }
            inputDirection = {x:0, y:1};
            break;
        case "ArrowLeft":
            if (lastInputDirection.x !==0){
                break;
            }
            inputDirection = {x:-1, y:0};
            break;
        case "ArrowRight":
            if (lastInputDirection.x !==0){
                break;
            }
            inputDirection = {x:1, y:0};
            break;
        }
})


  
    
export function getInputDirection(){
    lastInputDirection = inputDirection
    return inputDirection;
}