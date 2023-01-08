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
let participantes = document.getElementById('participants-list')
let names = []

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



function debug(){
    console.log("click");
}

function printNames(e){
    if(e.keyCode === 13){
        // Ingresar nombres en un arrray
        let textInput = input.value
        names.push(textInput)
        console.log(names);
        
        // Limpiar el input.value
        input.value = '';

        //  ------- Print Names --------
        const li = document.createElement('li')
        li.textContent = textInput
        participantes.appendChild(li)
    }
}

/**
* It is used recomender related products for a specific product
* @param {String} id - Product ID.
* @param {Number} limit -List the number of result
*/
function showEdit(){
    const editOptions = document.getElementsByClassName("edit-options")[0]
    if(editOptions.classList.contains("hide")){
        editOptions.classList.replace("hide", "show")
    }else{
        editOptions.classList.replace("show", "hide")
    }
}

restartBtn.addEventListener('click', (e) => {
    names = [];
    participantes.remove()
    const ol = document.createElement('ol')
    ol.setAttribute("id", "participants-list")
    divPart.appendChild(ol)
})

input.addEventListener('keyup', printNames)
editBtn.addEventListener('click', showEdit)
deleteBtn.addEventListener("click", debug)
changeBtn.addEventListener("click", debug)



// ----------------- Result ------------------ //
startBtn.addEventListener("click", randomFriend)
newBtn.addEventListener("click", newFriend)

function randomFriend(e){

    document.body.style.backgroundColor = "#e03f34"
    document.body.style.transition = "1s"
    listCont.classList.replace("show", "hide")
    // resultCont.classList.replace("hide", "show")
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
    alert("Este nombre no se encuentra en la lista")
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
        alert("Este nombre no se encuentra en la lista")
    }
}