function getInputs(){
    const title = document.querySelector('input[name="title"]').value;
    const author = document.querySelector('input[name="author"]').value;

    return {title,author};
}

function bindDeleteBook(handler){
    const container = document.querySelector(".container");
    container.addEventListener("click", (event) =>{
        if(event.target.classList.contains("fa-trash")){
            const id= event.target.dataset.id;
            handler(id);
        }
    })
}

function bindToggleBook(handler){
    
    const container = document.querySelector(".container");
    container.addEventListener("click", (event)=>{
        
        if(event.target.classList.contains("fa-eye") || event.target.classList.contains("fa-eye-slash")){
            const id= event.target.dataset.id;
            handler(id);
        }
    });

   
    
}

function bindAddBook(handler){

    const submitButton=document.querySelector("button");

    submitButton.addEventListener("click",(event) =>{
        event.preventDefault();
        handler();
        const title = document.querySelector('input[name="title"]');
        const author = document.querySelector('input[name="author"]');
        title.value="";
        author.value="";
    });

}

function renderBooks(books){
    
    const container = document.querySelector(".container");

    container.innerHTML="";

    for(const b of books){
    
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
    trashCan.dataset.id= b.uuid;
    
    eye.className=b.read?"fa-solid fa-eye":"fa-solid fa-eye-slash";
    
    eye.dataset.id = b.uuid;

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


export {getInputs, bindAddBook, renderBooks, bindDeleteBook, bindToggleBook};