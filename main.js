const input = document.getElementById("input-text");
const editBtn = document.getElementById("Edit")
const startBtn = document.getElementById("button") 
const newBtn = document.getElementById("new-button") 
const listCont = document.getElementsByClassName("list-cont")[0]
const resultCont = document.getElementsByClassName("result-container")[0]
const deleteBtn = document.getElementById("delete")
const changeBtn = document.getElementById("change")
const restartBtn = document.getElementById("restart")
const resultName = document.getElementsByClassName("result-name")[0]
const divPart = document.getElementsByClassName("participants")[0]
const participantes = document.getElementById('participants-list')
const inputIndex = document.getElementById("entry")
const changeIndex = document.getElementById("change-text")
const changeFunction = document.getElementsByClassName("change-function")[0]
let names = []

// All the event listeners in the first step of the app
// The input text function
input.addEventListener('keyup', printNames)
// Listeners to the editing list feature
restartBtn.addEventListener('click', restartList)
editBtn.addEventListener('click', showEdit)
deleteBtn.addEventListener("click", deleteEntry)
changeBtn.addEventListener("click", changeEntry)

// All functions needed for interact with the first part of the app
function debug(){
    console.log("click");
    alert("Click")
}

function changeStatus(object){
    if(object.classList.contains("hide")){
        object.classList.replace("hide", "show")
    }else{
        object.classList.replace("show", "hide")
    }
}


function shuffle(array) {
    const newArray = [...array]
    const length = newArray.length
  
    for (let start = 0; start < length; start++) {
      const randomPosition = Math.floor((newArray.length - start) * Math.random())
      const randomItem = newArray.splice(randomPosition, 1)
  
      newArray.push(...randomItem)
    }

    return newArray
}

function printNames(e){
    if(e.keyCode === 13){
        // Enter names into the main array: names[]
        let textInput = input.value
        names.push(textInput)
        console.log(names);
        
        // Clean theinput.value
        input.value = '';

        //  ------- Print Names --------
        const li = document.createElement('li')
        li.setAttribute("class", "item")
        li.textContent = textInput
        participantes.appendChild(li)
    }
}

// Editing list functions
function showEdit(){
    const editOptions = document.getElementsByClassName("edit-options")[0]
    changeStatus(editOptions)
}

function restartList(e){
    location.reload()
}

function changeEntry(e){
    changeStatus(changeFunction)
}

function deleteEntry(e){
    debug()
}


// ----------------- Result ------------------ //


// Event Listeners
startBtn.addEventListener("click", randomFriend)
newBtn.addEventListener("click", newFriend)


// Functions
function randomFriend(e){

    document.body.style.backgroundColor = "#e03f34"
    document.body.style.transition = "1s"
    listCont.classList.replace("show", "hide")
    input.placeholder = "¿Quien eres?"

    startBtn.classList.replace("show", "hide")
    newBtn.classList.replace("hide", "show")

    input.removeEventListener("keyup", printNames)
    input.addEventListener('keyup', showName)
    matches = createSantas()
}

function showName(e){
    if(e.keyCode === 13){
        newFriend()
        displayFriend()
    }
}

function createSantas(e){
    const randomNames = shuffle(names);
    const matches = randomNames.map((name, index) => {
        return {
          santa: name,
          receiver: randomNames[index + 1] || randomNames[0],
        } 
    });

    console.log(matches);
    return matches
}

function displayFriend(){
    let textInput = input.value
    let index
    for(let i = 0; i<matches.length; i++){
        if(matches[i].santa == textInput){
            index = i;
            console.log(index);
            resultName.textContent  = matches[i].receiver
        }
    }

}

function error(){
    alert(input.value + " not found")
}

function newFriend(e){
    let textInput = input.value
    if(names.includes(textInput)){
        if(resultCont.classList.contains("hide")){
            resultCont.classList.replace("hide","show")
        }else{
            resultCont.classList.replace("show","hide")
            input.value = ''
        }
    }else{
        error()
    }
}