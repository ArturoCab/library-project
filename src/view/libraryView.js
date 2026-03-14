function getInputs(){
    const title = document.querySelector('input[name="title"]').value;
    const author = document.querySelector('input[name="author"]').value;

    return {title,author};
}

function bindAddBook(handler){

    const submitButton=document.querySelector("button");

    submitButton.addEventListener("click",(event) =>{
        event.preventDefault();
        handler();
    });
}

function renderBooks(books){
    
    const container = document.querySelector(".container");

    container.innerHTML="";

    for(b of myLibrary){
    
    const card=document.createElement("div");
    const title=document.createElement("div");
    const author=document.createElement("div");
    const nav= document.createElement("div");
    const trashCan=document.createElement("i");
    const eye= document.createElement("i");
    card.className="card";
    title.className="title";
    author.className="author";
    nav.className="nav";
    title.appendChild(document.createTextNode(b.title));
    author.appendChild(document.createTextNode(b.author));
    trashCan.className="fa-solid fa-trash";
    eye.className="fa-solid fa-eye-slash";

    nav.appendChild(eye);
    nav.appendChild(trashCan);
    /*<i class="fa-solid fa-eye"></i> //abierto es leido
    <i class="fa-solid fa-eye-slash"></i> //cerrad es no leido*/

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(nav);
    
    container.appendChild(card);

  }
}


export {getInputs, bindAddBook, renderBooks};