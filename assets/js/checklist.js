
/*Selectors*/
const checklistInput = document.querySelector(".checklist-input");
const checklistButton = document.querySelector(".checklist-button");
const checklistList = document.querySelector(".checklist-list");
const filterOption = document.querySelector(".filter-checklist");

/*Eventlistener*/
checklistButton.addEventListener('click', addThing);
checklistList.addEventListener('click', deleteThing);

/*Functions*/
function addThing(event){

/*Prevent form from submitting*/
event.preventDefault();

/*Checklist div*/
const checklistDiv = document.createElement('div');
checklistDiv.classList.add('checklist');

/*Create li*/
const newChecklist = document.createElement('li');
newChecklist.innerText = checklistInput.value;
newChecklist.classList.add('checklist-item');
checklistDiv.appendChild(newChecklist);

/*Completed button*/
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check fa-1x"></i>';
completedButton.classList.add("complete-btn");
checklistDiv.appendChild(completedButton);

/*Delete button*/
const deleteButton = document.createElement('button');
deleteButton.innerHTML = '<i class="fas fa-trash fa-1x"></i>';
deleteButton.classList.add("trash-btn");
checklistDiv.appendChild(deleteButton);

/*Append to list*/
checklistList.appendChild(checklistDiv);

/*Clear Checklist Input Value*/
checklistInput.value = "";
}

function deleteThing(e){
const item = e.target;

/*Delete Checklist*/

if(item.classList[0] === 'trash-btn'){
const checklist = item.parentElement;

/*Animation*/ 
checklist.classList.add("fall");
checklist.addEventListener("transitionend",function(){
checklist.remove();

});
}

/*Completed Checklist*/
if(item.classList[0] === 'complete-btn'){
const checklist = item.parentElement;
checklist.classList.toggle('completed'); 
}
}
