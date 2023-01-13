//BOOK CONTAINER
let bookContainer = document.querySelector('.Books');
//BOOK LIST
let books = document.querySelectorAll('.Book');
//BOOKS TITLES LIST
let booksTitles = document.querySelectorAll('.bookTitle');
//BUTTONS LIST
let bookDeleteBtns = document.querySelectorAll('.bookDelete');

bookContainer.addEventListener('click', function (e) {
    if (e.target.className == 'bookDelete btn btn-dark') {
        bookContainer.removeChild(e.target.parentElement.parentElement);
    }
})
