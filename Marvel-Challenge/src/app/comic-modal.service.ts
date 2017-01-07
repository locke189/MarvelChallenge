import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Comic }      from './comic';


@Injectable()
export class ComicModalService {

  constructor() { }

  // Observable string sources
  private comicUrlSource = new Subject<string>();
  private comicSource = new Subject<Comic>();

  comicUrl$ = this.comicUrlSource.asObservable();
  comic$ = this.comicSource.asObservable();

  // Service message commands
  sendUrl(url: string) {
    console.log(`new url ${url}`)
    this.comicUrlSource.next(url);
  }

  sendComic(comic: Comic) {
    console.log(`new comic ${comic.title}`)
    this.comicSource.next(comic);
  }




}
