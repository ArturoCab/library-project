
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

