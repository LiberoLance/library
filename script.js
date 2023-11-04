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
  
  let index = library.length - 1;
  let thisBook = library[0]; 
  let div = document.createElement('div');
  div.setAttribute('id', 'book');
  let title = document.createElement('p');
  let author = document.createElement('p');
  let pages = document.createElement('p');
  let read = document.createElement('p');
  read.setAttribute('id', 'read');
  let changeReadStatus = document.createElement('button');
  changeReadStatus.setAttribute('id', 'crs');
  let remove = document.createElement('button');
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
    if(library[index].read == "true") {
      library[index].read = 'false';
      read.textContent = 'false';
    }
    else {
      library[index].read = 'true';
      read.textContent = 'true';
    }
  });
  remove.addEventListener('click', function () {
    library.pop();
    div.remove();
  });
});

//functions
function pushBook(title, author, pages, read) {
  const thisBook = new Book(title, author, pages, read);
  library.push(thisBook);
}
