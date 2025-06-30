let listcontainer = document.getElementById("list");
let inputBox= document.getElementById("input-box");
let btn=document.getElementById("button")


function addTask(){
    if(inputBox.value == ''){
        alert('Please Enter the Text')
    }
    else{
        let task = document.createElement("li");
        task.textContent = inputBox.value;
        listcontainer.appendChild(task);

        let span =document.createElement('span');
        span.textContent='\u00d7';
        task.appendChild(span);
    }
    inputBox.value = "";
    savedata()
}
listcontainer.addEventListener("click", (el) =>{
    if(el.target.tagName == 'LI'){
        el.target.classList.toggle('checked');
        savedata()
    }
    else if(el.target.tagName == 'SPAN'){
        el.target.parentElement.remove()
        savedata()
    }
})
function savedata(){
    localStorage.setItem("task",listcontainer.innerHTML)
}
function showdata(){
   listcontainer.innerHTML= localStorage.getItem("task")
}
showdata()
