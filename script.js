//Dom selectors
const library = [];
const newBook = document.getElementById("new-book");
const bookc = document.getElementById("bookc");
const bookForm = document.getElementById("book-form");
const formInputs = bookForm.elements;
const addBook = document.getElementById("add-book");

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
     console.log(library);
   }
});


//functions
function pushBook(title, author, pages, read) {
  const thisBook = new Book(title, author, pages, read);
  library.push(thisBook);
}


