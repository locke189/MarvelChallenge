import { Injectable } from '@angular/core';
import { Comic } from './comic'
import { Storage } from './storage';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModelService {

  favouriteComics : Comic[] = [];
  private favListSource = new Subject<Comic[]>();
  favList$ = this.favListSource.asObservable();

  storage: Storage = new Storage("marvelChallengeLocalStorage");

  constructor() {
    const data = this.storage.getFromStorage();
    if(data){
      console.log('data loaded from storage');
      this.favouriteComics = data;
      this.favListSource.next(this.favouriteComics);
    }
  }

  addComic(comic:Comic){
    const existingComic = this.checkComicInListbyId(comic.id);
    if(!existingComic){
      console.log(`comic added to fav list! ${comic.title}`)
      this.favouriteComics.unshift(comic);
      this.storage.saveToStorage(this.favouriteComics);
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
      this.storage.saveToStorage(this.favouriteComics);
      this.favListSource.next(this.favouriteComics);
      return true;
    }
    return false;
  }

  getFavourites(){
    return this.favouriteComics;
  }

}
