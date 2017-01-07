import { Injectable } from '@angular/core';
import { Comic } from './comic'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModelService {

  favouriteComics : Comic[] = [];
  private favListSource = new Subject<Comic[]>();
  favList$ = this.favListSource.asObservable();

  constructor() { }

  addComic(comic:Comic){
    const existingComic = this.checkComicInListbyId(comic.id);
    if(!existingComic){
      console.log(`comic added to fav list! ${comic.title}`)
      this.favouriteComics.push(comic);
      this.favListSource.next(this.favouriteComics);
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
      this.favListSource.next(this.favouriteComics);
      return true;
    }
    return false;
  }

  getFavourites(){
    return this.favouriteComics;
  }

}
