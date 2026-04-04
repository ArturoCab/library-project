import {Library} from "../model/library.js";
import { Book } from "../model/book.js";
import {getInputs, bindAddBook, bindDeleteBook, renderBooks, bindToggleBook } from "../view/libraryView.js";

//#region accessible
const library=new Library();
//#endregion accessible

function handleReadBook(id){
    const book = library.findBook(id)
    if(!book) return;
    book.readBook();
    renderBooks(library.getBooks());
    library.save();
}

function handleAddBook(){
    const {title, author} = getInputs();
    if(!title) {
        console.error("need title");
        return;
    }
    const book = new Book(title, author);

    library.addBook(book);
    renderBooks(library.getBooks());
    library.save();
}

function handleDeleteBook(id){
    library.removeBook(id);
    renderBooks(library.getBooks());
    library.save();
}

function initController(){
    library.load();
    bindAddBook(handleAddBook);
    bindDeleteBook(handleDeleteBook);
    bindToggleBook(handleReadBook);
    renderBooks(library.getBooks());
}

export  {initController};