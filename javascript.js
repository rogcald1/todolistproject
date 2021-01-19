let listNum = 0;

function addTask() {
    listNum += 1;
    let task = prompt('what is your task?');
    let newItem = document.createElement('input');
    newItem.type = "checkbox";
    newItem.setAttribute("id",`item${listNum}`);
    newItem.setAttribute("class",`aTask`);
    document.querySelector('#tasklist').appendChild(newItem);

    let newLabel = document.createElement('label');
    newLabel.htmlFor = `item${listNum}`
    newLabel.textContent = `${task}`;
    document.querySelector('#tasklist').appendChild(newLabel);

    document.querySelector('#tasklist').appendChild(document.createElement("br"));
}

