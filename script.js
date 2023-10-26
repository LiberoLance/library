//Dom selectors
const library = ["a", "b", "c"];
const display = document.getElementById("display");
const bookc = document.getElementById("bookc");

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
display.addEventListener("click", function() {
  for(let book of library) {
  }
});

//functions
function addBook(title, author, pages, read) {
  const thisBook = new Book(title, author, pages, read);
  library.push(thisBook);
}

function newBook() {
  
}
