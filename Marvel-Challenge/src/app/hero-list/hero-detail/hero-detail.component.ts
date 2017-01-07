import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../character';
import { Comic } from '../../comic';
import { ComicDetailComponent } from '../../comic-detail/comic-detail.component';
import { ComicModalService } from '../../comic-modal.service';
import { ModelService } from '../../model.service';
import { HttpService } from '../../http.service';
import { Response }          from '@angular/http';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HttpService]
})
export class HeroDetailComponent implements OnInit {
  @Input() char: Character;


  constructor(private httpService: HttpService, private modelService: ModelService, private comicModalService: ComicModalService) {

  }

  ngOnInit() {
  }

  callModal(url:string){
    this.comicModalService.sendUrl(url);
  }

  addRandomComics(){
    const list = this.char.getRandomComicList(3);
    console.log(list);
    if(list){
      list.forEach((comicItem)=>{
        this.getComicByUrl(comicItem.resourceURI);
      });
    }
  }

  getComicByUrl(url:string){
    console.log('Comic Request');
    this.httpService.getComicDataFromUrl(url).subscribe(
      ( data: Response ) => {
        const comics = data.json().data.results.map( (object) => {
          const comic: Comic = new Comic(object);
          return comic;
        });
        this.modelService.addComic(comics[0]);
    });
  }

}
