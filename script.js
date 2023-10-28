//Dom selectors
const library = ["a", "b", "c"];
const newBook = document.getElementById("new-book");
const bookc = document.getElementById("bookc");
const bookForm = document.getElementById("book-form");

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

//functions
function addBook(title, author, pages, read) {
  const thisBook = new Book(title, author, pages, read);
  library.push(thisBook);
}

