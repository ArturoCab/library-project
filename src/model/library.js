const myLibrary = [];

function Book(title, author, read=false) {
  if(!new.target){
    throw Error("You must use the 'new' operator");
  }

  if(!title || !author){
    throw Error("No title or author");
  }
  this.uuid = crypto.randomUUID();
  this.title=title;
  this.author=author;
  this.read=read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function getBooks(){
  return myLibrary.slice();
}

function readBook(id){
    const index = myLibrary.findIndex(b=> b.uuid===id);
    if(index!== -1){
        
        
        myLibrary.at(index).read = !myLibrary.at(index).read;
    }

}

function removeBook(id){
    const index = myLibrary.findIndex(b=> b.uuid===id);

    if(index !== -1 ){
        myLibrary.splice(index,1);
    }
}

function save(){
    localStorage.setItem("library", JSON.stringify(myLibrary));
}

function load(){
    const data = JSON.parse(localStorage.getItem("library"))||[];
    myLibrary.length=0;
    myLibrary.push(...data);
}

export {Book, addBookToLibrary, getBooks, removeBook, readBook, save, load}