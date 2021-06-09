
const newBookButton = document.querySelector('#newBook');
const newForm = document.querySelector('#newForm');
let myLibrary = [];

if (localStorage.getItem('myLibrary') !== null) {
  myLibrary = JSON.parse(window.localStorage.getItem('myLibrary'));
}

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

function saveToLocalStorage() {
  window.localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}
function index(){
  const table = document.getElementById('booksTable');
  myLibrary.forEach((book, i) => {
    const data = `<tr><td>${book.author}</td><td>${book.title}</td><td>${book.pages}</td><td><a href="#" onclick="changeStatus(${i});">${book.read}</a></td><th><a id='deleteButton' onclick="removeBook(${i});" href="#" class="btn btn-danger">Remove</a></th></tr>`
    table.innerHTML += data;
  });
  saveToLocalStorage();
}
index();
document.getElementById('submit-button').addEventListener('click', () => {
  const newAuthor = document.getElementById('author').value;
  const newTitle = document.getElementById('title').value;
  const newPages = document.getElementById('pages').value;
  const newRead = document.getElementById('read').checked;
  const newBook = new Book(newAuthor, newTitle, newPages, newRead);
  addBookToLibrary(newBook);
index();
})
