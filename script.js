//global variables
const library = [];
let index = 0;

//Dom selectors
const addBook = document.getElementById("add-book");
const bookc = document.getElementById("bookc");
const showBooks = document.getElementById("show-books");

//objects
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  changeRead() {
    if(this.read == 'true') {
      this.read = 'false';
    }
    else {
      this.read = 'true';
    }
  }
}

//event listeners
addBook.addEventListener("click", function() {
  addBookToLibrary();
});

showBooks.addEventListener("click", function() {
  const bookContainer = document.querySelector('#bookc');
  let div;
  let title;
  let author;
  let pages;
  let read;
  let changeReadBtn;
  let removeBtn;

  function changeReadStatus() {
    if(this.previousSibling.textContent == 'true') {
      this.previousSibling.textContent = 'false';
    }
    else {
      this.previousSibling.textContent = 'true';
    }
  }

  function remove(){
    const div = this.parentNode;
    const title = this.parentNode.childNodes[0].textContent;
    let theBook;
    for(let book of library) {
      if(book.title == title) {
        theBook = book;
        break;
      }
    }
    const i = library.indexOf(theBook);
    if(i > -1) {
      library.splice(i, 1);
    }
    div.remove();
    index--;
    console.log(library);
  }

  for(; index < library.length; index++) {
    div = document.createElement('div');
    title = document.createElement('p');
    author = document.createElement('p');
    pages = document.createElement('p');
    read = document.createElement('p');
    changeReadBtn = document.createElement('button');
    changeReadBtn.setAttribute('id', index);
    removeBtn = document.createElement('button');
    removeBtn.setAttribute('id', index);

    title.textContent = library[index].title;
    author.textContent = library[index].author;
    pages.textContent = library[index].pages;
    read.textContent = library[index].read;
    changeReadBtn.textContent = 'Change Read Status';
    changeReadBtn.addEventListener('click', changeReadStatus);
    removeBtn.textContent = 'Remove Book';
    removeBtn.addEventListener('click', remove);    

    div.append(title, author, pages, read, changeReadBtn, removeBtn);
    bookContainer.append(div);
  }

});

//functions
function addBookToLibrary() {
  const title = prompt('Enter the title of the book');
  const author = prompt("Enter the book's author");
  const pages = prompt('How many pages are there?');
  let read = prompt('Have you read the book before? y or n');
  
  if(read != null && read.toLowerCase() == 'y') {
    read = true;
  }
  else {
    read = false;
  }

  if(title != null && author != null && pages != null) {
    const thisBook = new Book(title, author, pages, read);
    library.push(thisBook);
  }
  console.log(library);
}
