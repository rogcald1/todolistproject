//doing this so task lines have a specific selector if needed
let listNum = 0;
let taskCount = 0;

//adding task to the list, along with the checkbox and trashcan img
function addTask() {
    listNum += 1;
    let task = prompt('what is your task?');
    //checkbox
    let newItem = document.createElement('input');
    newItem.type = "checkbox";
    newItem.setAttribute("id",`item${listNum}`);
    newItem.setAttribute("class",'aCheckbox');
    newItem.setAttribute("onclick",`crossTask("item${listNum}")`)
    document.querySelector(`#tasklist`).appendChild(newItem);
    //text
    let newLabel = document.createElement('p');
    newLabel.setAttribute("id",`inditem${listNum}`);
    newLabel.setAttribute("class",'aTask');
    newLabel.textContent = `${task}`;
    document.querySelector('#tasklist').appendChild(newLabel);
    //trash
    let newTrash = document.createElement('img');
    newTrash.setAttribute("src","img/2021_01_20_0gu_Kleki.png");
    newTrash.setAttribute("id",`trashitem${listNum}`);
    newTrash.setAttribute("onclick",`removeTask("item${listNum}")`);
    document.querySelector('#tasklist').appendChild(newTrash);
    //line breaks that also need to be removed later on when trash is clicked
    let newBreak = document.createElement('br');
    newBreak.setAttribute("id",`britem${listNum}`);
    document.querySelector('#tasklist').appendChild(newBreak);

    taskCount += 1;
    taskCheck();
}

//crosses out the task once checkbox is completed
function crossTask(task) {
    //selects the tasks and if it has the name attribute, assigns it to sQues
    let indTask = document.getElementById(`ind${task}`);
    let sQues = indTask.hasAttribute("name");
    //checks if name attribute exists. if so, remove it so strikethrough goes away, otherwise, add it. CSS takes care of the striking.
    if (sQues === true){
        indTask.removeAttribute("name");
    }
    else {
        indTask.setAttribute("name","striken");
    }
}

//removes task once trashcan is clicked
function removeTask(task) {
    let indTask = document.getElementById(`ind${task}`);
    let indBox = document.getElementById(`${task}`);
    let indTrash = document.getElementById(`trash${task}`);
    let indBreak = document.getElementById(`br${task}`);
    
    indTask.remove()
    indBox.remove()
    indTrash.remove()
    indBreak.remove()

    taskCount -= 1;
    taskCheck();
}

function taskCheck() {
    if (taskCount > 0) {
        let fText = document.getElementById('frontText');
        if (fText === null) {
            return;
        } else {
            fText.remove();
        }
    } else {
        let fText = document.createElement('p');
        fText.textContent = "no tasks :D";
        fText.setAttribute("id","frontText");
        document.querySelector("#tasklist").appendChild(fText);
    }
}

