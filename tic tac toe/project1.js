let boxes=document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container");
let para=document.querySelector("p");
// winpattern
let turno =true; //playerx playero
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
// resetbtn function
let rstbtn=()=>{
    turno=true;
    boxenable();
    msgcontainer.classList.add("hide"); 
}
// game logic
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        // box.innerText = "O";
        if(turno){
            box.innerText = "O";
            turno=false;
        } 
        else{
            box.innerText = "X";
            turno=true;
        }
        box.disabled=true;

        checkwinner();
    })
    // disabled function
        const boxdisabled=()=>{
            for(let box of boxes){
                box.disabled=true;
            }
        } 
    //    showwinner function
        const showwinner= (winner)=>{
            msg.innerText = `congratulation, the  winner is ${winner}`;
            msgcontainer.classList.remove("hide");
            boxdisabled();}       
            // checkwinner function
    const checkwinner =() =>{         
           for(let pattern of winpatterns){  
            let pos1val=boxes[pattern[0]].innerText;
           let pos2val=boxes[pattern[1]].innerText;
           let pos3val=boxes[pattern[2]].innerText;
           
       if(pos1val !="" && pos2val!="" && pos3val!="" ){
           if(pos1val===pos2val && pos2val===pos3val){
               showwinner(pos1val);
            }
            }    
            }
        }
})
const boxenable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


newgamebtn.addEventListener("click",rstbtn);
resetbtn.addEventListener("click",rstbtn);