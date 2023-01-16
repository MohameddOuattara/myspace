let blocPrincipal = document.querySelectorAll('.blocPrincipal');
let mainParent = document.querySelector('#mainParent');
let taskCard = document.querySelectorAll('.taskCard');
let btnDelete = document.querySelectorAll('.btnDelete');
let addTaskForms = document.forms;
let addTaskInput = document.querySelectorAll('.addTaskInput');



blocPrincipal.forEach(function (task) {
    task.addEventListener('click', function(e) {
        // console.log(e.target);
        if (e.target.className == 'btnDelete px-5 material-symbols-outlined') {
            let parent = e.target.parentElement.parentElement.parentElement.parentElement;
            let child = e.target.parentElement.parentElement.parentElement;
            parent.removeChild(child);
        }
        if (mainParent.innerHTML == false) {
            mainParent.style.display = "none";
        }
    })
})

addTaskForms[1].addEventListener('submit', function(e){
    e.preventDefault();
    let taskTitle = addTaskForms[1].querySelector('input').value;

    let divTaskCard = document.createElement('div')
    let divParentOne = document.createElement('div');
    let divCheckBoxParent = document.createElement('div');
    let checkBox = document.createElement('input');
    let h1Tag = document.createElement('h1');
    let btnTag = document.createElement('button');
    let btnSpan = document.createElement('span');

    divTaskCard.className ='taskCard grid gap-4 rounded-xl bg-gray-900 text-white';
    divParentOne.className = 'flex items-center';
    divCheckBoxParent.className = 'flex w-max p-5';
    checkBox.type = 'checkbox';
    h1Tag.className = 'grow pl-1 text-lg';
    btnSpan.className = 'btnDelete px-5 material-symbols-outlined';

    h1Tag.textContent = taskTitle;
    btnSpan.textContent = 'delete';

    divCheckBoxParent.appendChild(checkBox);
    btnTag.appendChild(btnSpan);
    
    divParentOne.appendChild(divCheckBoxParent);
    divParentOne.appendChild(h1Tag);
    divParentOne.appendChild(btnTag);
    divTaskCard.appendChild(divParentOne)

    mainParent.appendChild(divTaskCard);
});