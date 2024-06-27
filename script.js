//Accessing the buttons
let tile=document.querySelectorAll(".box");

//Accessing the reset button
let resetbtn=document.getElementById("res");

//Accessing an empty header
let msg=document.getElementById("wow");

//patterns which is the requirements for winning the game
let winRequirements=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
]

//initiating with x
let turnX=true; 

// using for each loop to acces all the elements in the box
// using addEventListner so that when ever i click on a tile it will react according to the given condition

tile.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX=== true){
            //if there is turn of x then it will return x if not then it will return o by changing turn also
            box.innerText="X";
            turnX=false;
            
        }else{
            box.innerText="O";
            turnX=true;
            
        }
        box.disabled=true;
        //using disabled keyword player will not able to click same tile again
        heroes();
    })
})
// disabling button
const disbtn=()=>{
    for (let box of tile){
        box.disabled=true;
    }
}
//enabling to restart
const enbbtn=()=>{
    for (let box of tile){
        box.disabled=false;
        box.innerText="";
    }
}

// to show winner and using disbtn function to stop the game after win
const showWinner=(winner)=>{
    msg.innerText=`The winner is ${winner}`
    disbtn();

}
    

//to cross check with requirements to win we have to create a function which checks all the winning combination
const heroes=()=>{
    for (let per of winRequirements){
        let idx1=tile[per[0]].innerText;
        let idx2=tile[per[1]].innerText;
        let idx3=tile[per[2]].innerText;
        //accesing the inputs in given tile

        if(idx1!="" && idx2!="" && idx3!=""){
            if(idx1===idx2 && idx2===idx3){
                console.log("winner",idx1)
                showWinner(idx1)
                
            }
            
        }

    }
}
//to reset the game
const resetGame=()=>{
    turnX=true;
    enbbtn();
    msg.innerText="";
}
resetbtn.addEventListener("click",resetGame);