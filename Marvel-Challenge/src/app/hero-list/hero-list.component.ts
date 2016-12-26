import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Response }          from '@angular/http';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { HttpService } from '../http.service';
import { Character } from '../character';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [HttpService]
})
export class HeroListComponent implements OnInit, OnChanges {

  @Input() keyword: string;

  characters: Character[];
  page: number;
  pages: number;
  pagerList: string[];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
      console.log('onInit');
      this.httpService.getData( this.keyword , 'modified' ).subscribe(
        ( data: Response ) => {
          this.setPages(data.json().data.total);
          this.characters = data.json().data.results.map( (object) => {
            const char: Character = new Character(object);

            return char;
          });
        }
      );
  }


  ngOnChanges(){
      console.log('HTTP Request...');
      this.httpService.getData( this.keyword, 'modified' ).subscribe(
        ( data: Response ) => {
          this.setPages(data.json().data.total);
          this.characters = data.json().data.results.map( (object) => {
            const char: Character = new Character(object);
            return char;
          });
        }
      );
  }

  setPages(total){
    this.pages = Math.floor(total/10);
    this.page = 1;
    this.setPagerList();

  }

  setPagerList(){
    let end = this.pages;
    let start = this.page - 2;

    this.pagerList = [];

    if(start < 1 ) start = 1;
    if( end > (start + 4) ) end = start + 4;
    if(start > 1 ) this.pagerList.push('...');

    for(let i = start; i <= end; i++ ){
      this.pagerList.push(String(i));
    }

    if(end < this.pages) this.pagerList.push('...');

  }

}
