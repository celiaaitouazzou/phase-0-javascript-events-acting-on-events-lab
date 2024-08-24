// Your code here

const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#000000";

dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "0px";
dodger.style.left = "100px";

document.addEventListener("keydown", function (event) {

    
    console.log(event);

    if(event.key === "ArrowLeft"){

        moveDodgerLeft();

    }else if(event.key === "ArrowUp" ){

        move(dodger,"up");

    }else if(event.key === "ArrowRight")
    {
        moveDodgerRight();

    }else if(event.key === "ArrowDown")
    {
        move(dodger,"down");
    }
});

function moveDodgerLeft()
{
    move(dodger,"left");
}

function moveDodgerRight(){
    move(dodger,"right");
}

function move(dodger,direction)
{
    const leftPos = dodger.style.left.replace("px", "");
    const intLeftPos = parseInt(leftPos, 10);
    const bottomPos = dodger.style.bottom.replace("px", "");
    const intBottomPos = parseInt(bottomPos, 10);
    let lPos = intLeftPos;
    let bPos = intBottomPos;

    if(direction === "right"){
        lPos+=1;
    }else if(direction === "left"){
        lPos-=1;
    }else if(direction === "up")
    {
        bPos+=1;
    }else{
        bPos-=1
    }
    dodger.style.left = `${lPos}px`;
    dodger.style.bottom = `${bPos}px`;
}