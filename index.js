let mainContElement = document.getElementById('mainCont');
let numberInputElement = document.getElementById("numberInput");
let valueElement = document.getElementById('value');

let val = "";

function generateNumber(){
    val+=Math.ceil(Math.random()*9).toString();
    val+=Math.ceil(Math.random()*9).toString();
    val+=Math.ceil(Math.random()*9).toString();
    val+=Math.ceil(Math.random()*9).toString();
    valueElement.textContent = val;
}

generateNumber();

let uniqueId = setInterval(function(){
    numberInputElement.value = "";
    val = "";
    generateNumber();
    console.log(val);
},10000);

function checking(a,b){
    return a==b;
}

function successView(){
    mainContElement.removeChild(document.getElementById('mainHead'));
    mainContElement.removeChild(document.getElementById('contentCont'));
    let tick = document.createElement('i');
    tick.classList.add('fa-regular','fa-circle-check','tick');
    mainContElement.appendChild(tick);
}

function failureView(){
    mainContElement.removeChild(document.getElementById('mainHead'));
    mainContElement.removeChild(document.getElementById('contentCont'));
    let wrong = document.createElement('i');
    wrong.classList.add('fa-regular','fa-circle-xmark','wrong');
    mainContElement.appendChild(wrong);
}

let inputVal = "";
function toBeDone(event){
    if(event.key==="Enter"){
        if(checking(inputVal,val)==true){
            successView();
            clearInterval(uniqueId);
        }else{
            failureView();
            clearInterval(uniqueId);
        }
    }else{
        inputVal+=(event.key);
    }
}

numberInputElement.addEventListener("keydown",toBeDone);
