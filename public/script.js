let blocPrincipal = document.querySelector('.blocPrincipal');
let mainParent = document.querySelectorAll('.mainParent');
let taskCard = document.querySelectorAll('.taskCard');
let btnDelete = document.querySelectorAll('.btnDelete');
let addTaskForms = document.forms;
let addTaskInput = document.querySelectorAll('.addBookInput');

taskCard.forEach((task) => {
    task.addEventListener('click', function(e) {
        if (e.target.className == 'btnDelete px-5 material-symbols-outlined') {
            let parent = e.target.parentElement.parentElement.parentElement.parentElement;
            let child = e.target.parentElement.parentElement.parentElement;
            parent.removeChild(child)
            // console.log(parent, 'Good');
            // console.log(blocPrincipal.length);
        }
    })
})

console.log(addTaskForms[1]);
addTaskForms[1].addEventListener('submit', function(e){
    e.preventDefault();
    let taskTitle = addTaskForms[1].querySelector('input').value;
    console.log(taskTitle);
})