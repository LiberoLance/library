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
  for(let thisBook of library) {
    console.log(thisBook.title);
  }
});

//functions
function addBookToLibrary() {
  const title = prompt('Enter the title of the book');
  const author = prompt("Enter the book's author");
  const pages = prompt('How many pages are there?');
  let read = prompt('Have you read the book before? y or n');
  
  if(read.toLowerCase() == 'y') {
    read = true;
  }
  else {
    read = false;
  }

  const thisBook = new Book(title, author, pages, read);
  library.push(thisBook);
}
