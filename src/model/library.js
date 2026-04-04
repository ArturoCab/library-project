import { Book } from "./book.js";

class Library{
  
  #myLibrary

  constructor(){
    this.#myLibrary=[];
  }

  addBook(book){
    this.#myLibrary.push(book);
  }

  getBooks(){
    return this.#myLibrary.slice();
  }

  findBook(id){
    return this.#myLibrary.find(b=>b.getUuid()===id)||null;
  }

  removeBook(id){
    const index = this.#myLibrary.findIndex(b=> b.uuid===id);

    if(index !== -1 ){
        this.#myLibrary.splice(index,1);
    }
  }

  save(){
    localStorage.setItem("library", JSON.stringify(this.#myLibrary));
  }
  
  load(){
    const data = JSON.parse(localStorage.getItem("library"))||[];
    this.#myLibrary=data.map(b=>{
      const book = new Book(b.title, b.author, b.read);
      book.uuid=b.uuid;
      return book;

    });
    
  }
}

export {Library}