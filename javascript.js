// doing this so task lines have a specific selector if needed
let listNum = 0;
let taskCount = 0;

// below lines needed to help with the error message that pops up/disappears depending on user input
let newLabel = document.createElement('p');
newLabel.setAttribute('class','labelForBox');
newLabel.textContent='';
document.querySelector('#labelInput').appendChild(newLabel);
let inputTask = document.getElementById('inputText');

// allowing users to hit enter to add tasks
inputTask.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        addTask();
    }
}) 

//adding task to the list, along with the checkbox and trashcan img
function addTask() {
    listNum += 1;
    let task1 = document.querySelector('.inputText').value;

    //checks if there is a blank value or if the request to input a task was already made
    if ((task1 !== '' && newLabel.textContent === 'please input a task :)') || (task1 !== '' && newLabel.textContent === ''))
    {

    document.querySelector('.inputText').value = '';
    document.querySelector('.labelForBox').textContent = '';
    //checkbox
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id',`divitem${listNum}`);
    newDiv.setAttribute('class',`taskDiv`);
    document.querySelector(`#ultList`).appendChild(newDiv);

    let newItem = document.createElement('input');
    newItem.type = "checkbox";
    newItem.setAttribute("id",`item${listNum}`);
    newItem.setAttribute("class",'aCheckbox');
    newItem.setAttribute("onclick",`crossTask("item${listNum}")`)
    document.querySelector(`#divitem${listNum}`).appendChild(newItem);
    //text
    let newLabel = document.createElement('p');
    newLabel.setAttribute("id",`inditem${listNum}`);
    newLabel.setAttribute("class",'aTask');
    newLabel.textContent = `${task1}`;
    document.querySelector(`#divitem${listNum}`).appendChild(newLabel);
    //trash
    let newTrash = document.createElement('img');
    newTrash.setAttribute("src","img/2021_01_20_0gu_Kleki.png");
    newTrash.setAttribute("id",`trashitem${listNum}`);
    newTrash.setAttribute("class",`aTrashcan`);
    newTrash.setAttribute("onclick",`removeTask("item${listNum}")`);
    document.querySelector(`#divitem${listNum}`).appendChild(newTrash);
    
    taskCount += 1;
    taskCheck();
    } else if ((task1 === '') && (newLabel.textContent === '')) {
        newLabel.textContent = 'please input a task :)';
        document.querySelector('#labelInput').appendChild(newLabel);
    } else if ((task1 === '') && (newLabel.textContent === 'please input a task :)')){
    }
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
    let remTrash = document.querySelector(`#trash${task}`)
    remTrash.removeAttribute('onclick');

    let indTask = document.querySelector(`#div${task}`)
    indTask.classList.add("removed");
    indTask.addEventListener("transitionend", () =>  
        { 
    indTask.remove(); 
    })

    taskCount -= 1;
    taskCheck();
}

function taskCheck() {
    if (taskCount > 0) {
        let fText = document.getElementById('frontText');
        if (fText === null) {
            return;
        } else {
            fText.textContent = "let's get to work!";
        }
    } else if (taskCount <= 0){
        taskCount = 0;
        let fText = document.getElementById('frontText');
        fText.textContent = "no tasks! :D";
        fText.setAttribute("id","frontText");
    }
}

