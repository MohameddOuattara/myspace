let blocPrincipal = document.querySelector('.blocPrincipal');
let mainParent = document.querySelectorAll('.mainParent');
let taskCard = document.querySelectorAll('.taskCard');
let btnDelete = document.querySelectorAll('.btnDelete');


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
console.log(blocPrincipal.innerText);

if (blocPrincipal.innerText < 'Task name delete') {
    console.log(blocPrincipal);
    document.querySelector('.isolate').removeChild(blocPrincipal);
}