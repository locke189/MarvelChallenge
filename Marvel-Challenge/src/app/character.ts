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
    this.allComics = object.comics.items;
    this.description = object.description;
    this.comicList = this.getRandomComicList(4);
  }


  private getRandomComicList(size: number = 4){
    let list = [];
    if (this.allComics.length){
      for(let i = 0; i < size ; i++ ){
        list.push(this.allComics[Math.floor(Math.random() * this.allComics.length)]);
       }
    }
    return list;
  }

}
