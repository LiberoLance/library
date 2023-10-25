const library = ["a", "b", "c"];
const display = document.getElementById("display");

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

display.addEventListener("click", function() {
  for(let book of library) {
    console.log(book);
  }
});
