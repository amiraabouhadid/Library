const newBookButton = document.querySelector('#newBook');
const newForm = document.querySelector('#newForm');
let myLibrary = [];

newBookButton.addEventListener('click', () => {
  newForm.classList.toggle('vis');
});

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.info = function(){
    return `${title} by ${author}, total number of pages: ${pages}`;
  }

}

function addBookToLibrary(b) {
  myLibrary.push(b)
}
