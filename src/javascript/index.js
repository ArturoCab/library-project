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

// myLibrary.push(new Book("Compiladores","Alfred V. Aho"));
// myLibrary.push(new Book("Física","Serway"));

const submitButton = document.querySelector("button");
submitButton.addEventListener("load",(event)=>{
  event.preventDefault();
})
submitButton.addEventListener("click", addBook);


function addBook(event){
  event.preventDefault();
  const title = document.querySelector("input[name=\"title\"]");
  const author = document.querySelector("input[name=\"author\"]");
  addBookToLibrary(new Book(title.value,author.value));
  loadBooks();
  
}


function loadBooks(){
  const container=document.querySelector(".container");

  while(container.firstChild){
    container.removeChild(container.firstChild);
  }

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
