let blocPrincipal = document.querySelector('.blocPrincipal');
console.log(blocPrincipal);
blocPrincipal.addEventListener('click', function(e){
    if (e.target.className.include == 'btnDelete') {
        console.log('Ok');
    }
})

let taskCard = document.querySelector('.taskCard')
console.log(taskCard);

let btnDelete = document.querySelector('.btnDelete')
console.log(btnDelete);