export class Character {
  id : string;
  name : string;
  thumbnail: string;
  description: string;
  allComics: any[];
  comicList: any[];

  constructor(object:any){
    this.name = object.name;
    this.id = object.id;
    this.thumbnail = `${object.thumbnail.path}.${object.thumbnail.extension}`;
    this.description = object.description;
    this.allComics = object.comics.items;
    this.comicList = this.getRandomComicList(4);

    if(this.description === ""){
      this.description = "Description not available"
    }
  }


  getRandomComicList(size: number = 4){
    let list = [];
    if (this.allComics.length){
      for(let i = 0; i < size ; i++ ){
        list.push(this.allComics[Math.floor(Math.random() * this.allComics.length)]);
       }
    }
    return list;
  }

}
