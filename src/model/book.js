export class Book{
  
  constructor(title, author, read=false){
    this.uuid=crypto.randomUUID();
    this.title=title;
    this.author=author;
    this.read=read;
  }


  readBook(){
    this.read = !this.read;
  }
  getUuid(){
    return this.uuid;
  }
};