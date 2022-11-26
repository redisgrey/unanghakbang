console.log('yo!');

let addButton = document.getElementById('addButton');
let deleteButton = document.getElementById('deleteButton');
let taskContainer = document.getElementById('taskContainer');

addButton.addEventListener("click", addToTaskContainer);
deleteButton.addEventListener("click", deleteTask);


function addToTaskContainer(){
    
    let inputTask = document.getElementById('inputTask').value;

    if (inputTask.length > 5){

        let task = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        
        let taskText = document.createTextNode(inputTask);

        task.appendChild(checkbox);

        task.appendChild(taskText);

        taskContainer.appendChild(task);

        document.getElementById("inputTask").value="";

    }else {

        alert("You must enter more than 5 characters");
    }
    
}



function deleteTask(){

    let taskContainer = document.getElementById("taskContainer");

    let task = document.getElementsByTagName("li");

    for (let i = 0; i < task.length; i++){

        if(task[i].firstChild.checked){

            taskContainer.removeChild(task[i]);
            i=i-1;

        }
    }
}