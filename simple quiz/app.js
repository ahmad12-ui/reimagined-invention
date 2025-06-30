const question=[
    {
        question:"which is largest animal in the world?",
        answer:[
            {text:"shark" , correct: "false"},
            {text:"elephant" , correct: "false"},
            {text:"blue whale" , correct: "true"},
            {text:"giraffa" , correct: "false"}          
         ]
    },
    {
        question:"which is largest continent in the world?",
        answer:[
            {text:"asia" , correct: "false"},
            {text:"arctic" , correct: "false"},
            {text:"africa" , correct: "false"},
            {text:"australia" , correct: "true"}          
         ]
    },
    {
        question:"which is meant by css?",
        answer:[
            {text:"cascading style sheet" , correct: "true"},
            {text:"cascading service sheet" , correct: "false"},
            {text:"coscade  style sheet " , correct: "false"},
            {text:"cascida style sheet" , correct: "false"}          
         ]
    },
    {
        question:"which is sum of first 6 whole number?",
        answer:[
            {text:"50" , correct: "false"},
            {text:"21" , correct: "true"},
            {text:"6" , correct: "false"},
            {text:"15" , correct: "false"}          
         ]
    },
    {
        question:"First vicory of india is ?",
        answer:[
            {text:"lord wavell" , correct: "false"},
            {text:"lord macdonald" , correct: "false"},
            {text:"lord 1" , correct: "false"} ,
            {text:"lord canning" , correct: "true"}         
         ]
    }
] ; 
const questionelement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-button");
const nextbtn = document.getElementById("next-btn");

let currentquestionIndex = 0;
let score = 0;

function startquiz(){
    currentquestionIndex = 0;
    score=0;
    nextbtn.innerHTML = "Next";
    showquestion();
}
function showquestion(){
    resetstate();
    let currentquestion = question[currentquestionIndex];
    let questionNO = currentquestionIndex + 1 ; 
    questionelement.innerHTML = questionNO + "." + currentquestion.question;

    currentquestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectanswer);
    });
}
function resetstate(){
    nextbtn.style.display = "none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}
function selectanswer(e){
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct ==="true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled= true;
    });
    nextbtn.style.display = "block";
}
function showscore(){
    resetstate();
    questionelement.innerHTML = `you scored ${score} out of ${ question.length}!`;
    nextbtn.innerHTML = " play again";
    nextbtn.style.display="block";
}

function handlenextbtn(){
    currentquestionIndex++;
    if(currentquestionIndex < question.length){
        showquestion();
    }else{
        showscore();
    }
}

nextbtn.addEventListener("click", ()=>{
    if(currentquestionIndex < question.length){
        handlenextbtn();
    }else{
        startquiz();
    }
})
startquiz();


 