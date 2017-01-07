import { Component, OnInit, Input } from '@angular/core';
import { Comic } from '../comic';
import { ModelService } from '../model.service';
import { HttpService } from '../http.service';
import { ComicModalService } from '../comic-modal.service';
import { Response }          from '@angular/http';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css'],
  providers: [HttpService]
})
export class ComicDetailComponent implements OnInit {
  @Input() comic: Comic;

  constructor(private modelService: ModelService, private httpService: HttpService, private comicModalService: ComicModalService) {
        this.comicModalService.comicUrl$.subscribe(
      url  => {
        console.log(`new url! ${url}`)
        this.getComicByUrl(url);
        this.openModal();
      },
      err => {
        console.log(err);
      });

        this.comicModalService.comic$.subscribe(
      comic  => {
        console.log(`new comic! ${comic.title}`)
        this.comic = comic;
        this.openModal();
      },
      err => {
        console.log(err);
      });

  }

  ngOnInit() {

  }

  getComicByUrl(url:string){
    console.log('Comic Request');
    this.httpService.getComicDataFromUrl(url).subscribe(
      ( data: Response ) => {
        const comics = data.json().data.results.map( (object) => {
          const comic: Comic = new Comic(object);
          return comic;
        });
        this.comic = comics[0];
        console.log(this.comic.title);
    });
  }

  openModal(){
    console.log('opening modal');
    document.getElementById("openModalButton").click();
  }

  addToFavs(){
    this.modelService.addComic(this.comic);
  }

}
