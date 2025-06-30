let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const message=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const generatecompchoice= () => {
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random() * 3);
    return options[randidx];
}
const drawgame=()=>{
    // console.log("match was draw");
    message.innerText="game  draw";
    message.style.backgroundColor="#081b31";
}
let showwinner=(userwin,userChoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        message.innerText=`you win.your ${userChoice} beats ${compchoice}`;
        message.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        message.innerText=`you lost. ${compchoice} beats your ${userChoice}`;
        message.style.backgroundColor="red";
    }
}

const playgame= (userChoice) => {
    
    //generate computer choice
    const compchoice=generatecompchoice();
    console.log("comp choice =",compchoice);


    if(userChoice===compchoice){
        drawgame();
    }else {
        let userwin=true;
        if(userChoice==="rock"){
            userwin= compchoice==="paper"?false:true;
        }else if(userChoice==="paper"){
           userwin= compchoice==="scissor"?false:true
        }else{
            userwin= compchoice==="rock"?false:true
        }
        showwinner(userwin,userChoice,compchoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    })
})

