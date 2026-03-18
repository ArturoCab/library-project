import {Book, addBookToLibrary, getBooks, removeBook, readBook, save, load} from "../model/library.js";
import {getInputs, bindAddBook, bindDeleteBook, renderBooks, bindToggleBook } from "../view/libraryView.js";


function handleReadBook(id){
    readBook(id);
    renderBooks(getBooks());
    save();
}

function handleAddBook(){
    const {title, author} = getInputs();
    const book = new Book(title, author);

    addBookToLibrary(book);
    renderBooks(getBooks());
    save();
}

function handleDeleteBook(id){
    removeBook(id);
    renderBooks(getBooks());
    save();
}

function initController(){
    load();
    bindAddBook(handleAddBook);
    bindDeleteBook(handleDeleteBook);
    bindToggleBook(handleReadBook);
    renderBooks(getBooks());
}

export  {initController};