//global variables
const library = [];
let index = 0;

//Dom selectors
const newBook = document.getElementById("new-book");
const bookc = document.getElementById("bookc");
const bookForm = document.getElementById("book-form");
const formInputs = bookForm.elements;
const addBook = document.getElementById("add-book");
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
newBook.addEventListener("click", function() {
  addBookToLibrary();
});

addBook.addEventListener("click", function(e) {
   e.preventDefault();
   if(formInputs.title.value == "" && formInputs.pages.value == "" && formInputs.author.value == "" && formInputs.read.value == "") {
     alert("Missing information, make sure the book's title, author, pages and read status are all filled out, before submitting.");
   }
   else {
     pushBook(formInputs.title.value, formInputs.author.value, formInputs.pages.value, formInputs.read.value)
     index++;
     formInputs.title.value = "";
     formInputs.author.value = "";
     formInputs.pages.value = "";
     formInputs.read.value = "";
     bookForm.style.visibility = "hidden";
   }
});

showBooks.addEventListener("click", function() {
  let div;
  let title;
  let author;
  let pages;
  let read;
  let changeReadStatus;
  let remove;
  
  for(let thisBook of library) {
    div = document.createElement('div');
    div.setAttribute('id', 'book' + index);
    title = document.createElement('p');
    author = document.createElement('p');
    pages = document.createElement('p');
    read = document.createElement('p');
    read.setAttribute('id', 'read');
    changeReadStatus = document.createElement('button');
    changeReadStatus.setAttribute('id', '' + index);
    remove = document.createElement('button');
    remove.setAttribute('id', 'remove');
  
    title.textContent = thisBook.title;
    author.textContent = thisBook.author;
    pages.textContent = thisBook.pages;
    read.textContent = thisBook.read;
    changeReadStatus.textContent = 'Change Read Status';
    remove.textContent = 'Remove Book'; 

    div.append(title);
    div.append(author);
    div.append(pages);
    div.append(read);
    div.append(changeReadStatus);
    div.append(remove);
  
    bookc.append(div);

    changeReadStatus.addEventListener('click', function() {
      console.log(this);
      //thisBook.changeRead();
      //read.textContent = thisBook.read;
    });
    remove.addEventListener('click', function (e) {
      console.log(e);
      library.pop();
      div.remove();
    });
  }
});

//functions
function addBookToLibrary() {
  const title = prompt('Enter the title of the book: ');
  const author = prompt('Enter the book's author: ');
  const pages = prompt('How many pages are there: ');
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
