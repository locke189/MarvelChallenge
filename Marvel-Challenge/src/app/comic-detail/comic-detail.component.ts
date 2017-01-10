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
  isFavourite: boolean = false;
  loading: boolean = true;

  constructor(private modelService: ModelService, private httpService: HttpService, private comicModalService: ComicModalService) {
        this.comicModalService.comicUrl$.subscribe(
      url  => {
        this.loading = false;
        console.log(`new url! ${url}`)
        this.getComicByUrl(url);
        console.log(this.comic);
        this.openModal();
      },
      err => {
        console.log(err);
      });

        this.comicModalService.comic$.subscribe(
      comic  => {
        console.log(`new comic! ${comic.title}`)
        this.loading = false;
        this.comic = comic;
        this.checkIfFavourite();
        this.openModal();
      },
      err => {
        console.log(err);
      });

  }

  ngOnInit() {

  }

  getComicByUrl(url:string){
    this.loading = true;
    console.log('Comic Request');
    this.httpService.getComicDataFromUrl(url).subscribe(
      ( data: Response ) => {
        this.loading = false;
        const comics = data.json().data.results.map( (object) => {
          const comic: Comic = new Comic(object);
          return comic;
        });
        this.comic = comics[0];
        this.checkIfFavourite();
        console.log(this.comic.title);
    });
  }

  openModal(){
    console.log('opening modal');
    document.getElementById("openModalButton").click();
  }

  addToFavs(){
    this.modelService.addComic(this.comic);
    this.checkIfFavourite();
  }

  removeFromFavs(){
    this.modelService.eraseComicFromListbyId(this.comic.id);
    this.checkIfFavourite();
  }

  checkIfFavourite(){
        const existingComic = this.modelService.checkComicInListbyId(this.comic.id);
        if(existingComic){
          this.isFavourite = true;
        } else {
          this.isFavourite = false;
        }
  }

  setFavouriteClasses(){
    const classes =  {
      "hidden": !this.isFavourite,
    };
    return classes;
  }

  setAddToFavouriteClasses(){
    const classes =  {
      "hidden": this.isFavourite,
    };
    return classes;
  }
}
