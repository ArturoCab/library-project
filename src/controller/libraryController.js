import {Book, addBook, getBooks} from "../model/library.js";
import { getInputs, bindAddBook, renderBooks } from "../view/libraryView";

function handleAddBook(){
    const {title, author} = getInputs();
    const book = new Book(title, author);

    addBook(book);

    renderBooks(getBooks());
}

function initController(){
    bindAddBook(handleAddBook);

    renderBooks(getBooks());
}

export  {initController};