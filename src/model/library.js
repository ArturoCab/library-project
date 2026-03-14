const myLibrary = [];

function Book(title, author) {
  if(!new.target){
    throw Error("You must use the 'new' operator");
  }
  this.uuid = crypto.randomUUID();
  this.title=title;
  this.author=author;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function getBooks(){
  return myLibrary.slice();
}

export {Book, addBookToLibrary, getBooks}