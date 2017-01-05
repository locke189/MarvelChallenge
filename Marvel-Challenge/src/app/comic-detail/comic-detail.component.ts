import { Component, OnInit } from '@angular/core';
import { Comic } from '../comic';
import { ModelService } from '../model.service';
import { HttpService } from '../http.service';
import { Response }          from '@angular/http';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css'],
  providers: [ModelService, HttpService]
})
export class ComicDetailComponent implements OnInit {
  comic: Comic;

  constructor(private modelService: ModelService, private httpService: HttpService) { }

  ngOnInit() {
  }

  getComicByUrl(url:string){
    console.log('Comic Request');
    this.httpService.getComicDataFromUrl(url).subscribe(
      ( data: Response ) => {
        this.comic = data.json().data.results.map( (object) => {
          const comic: Comic = new Comic(object);
          return comic;
        });
    });
  }

  toggleModal(){
    $('#ComicModal').modal('toggle');
  }

}
