import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class ComicModalService {

  constructor() { }

  // Observable string sources
  private comicUrlSource = new Subject<string>();

  comicUrl$ = this.comicUrlSource.asObservable();

  // Service message commands
  sendUrl(url: string) {
    console.log(`new url ${url}`)
    this.comicUrlSource.next(url);
  }

}
