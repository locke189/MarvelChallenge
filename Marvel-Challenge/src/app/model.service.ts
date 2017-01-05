import { Injectable } from '@angular/core';
import { Comic } from './comic'

@Injectable()
export class ModelService {

  favouriteComics : Comic[];

  constructor() { }

  addComic(comic:Comic){
    const existingComic = this.checkComicInListbyId(comic.id);
    if(!existingComic){
      this.favouriteComics.push(comic);
      return true;
    }
    return false
  }

  checkComicInListbyId(id:string){
    if(this.favouriteComics){
      return this.favouriteComics.find((element) => {
        return element.id === id;
      });
    }
  }

  eraseComicFromListbyId(id:string){
    const comic = this.checkComicInListbyId(id);
    const index = this.favouriteComics.indexOf(comic);
    if(index != -1) {
      this.favouriteComics.splice(index, 1);
      return true;
    }
    return false;
  }

  getFavourites(){
    return this.favouriteComics;
  }

}
