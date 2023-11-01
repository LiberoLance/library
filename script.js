//Dom selectors
const library = [];
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

  read() {
    if(this.read) {
      this.read = false;
    }
    else {
      this.read = true;
    }
  }
}

//event listeners
newBook.addEventListener("click", function() {
  bookForm.style.visibility = "visible";
});

addBook.addEventListener("click", function(e) {
   e.preventDefault();
   if(formInputs.title.value == "" && formInputs.pages.value == "" && formInputs.author.value == "" && formInputs.read.value == "") {
     alert("Missing information, make sure the book's title, author, pages and read status are all filled out, before submitting.");
   }
   else {
     pushBook(formInputs.title.value, formInputs.author.value, formInputs.pages.value, formInputs.read.value)
     formInputs.title.value = "";
     formInputs.author.value = "";
     formInputs.pages.value = "";
     formInputs.read.value = "";
     bookForm.style.visibility = "hidden";
   }
});

showBooks.addEventListener("click", function() {
  
  const thisBook = library[0]; 
  const div = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('p');
  const changeReadStatus = document.createElement('button');
  const remove = document.createElement('button');

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
});

//functions
function pushBook(title, author, pages, read) {
  const thisBook = new Book(title, author, pages, read);
  library.push(thisBook);
}


