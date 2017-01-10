import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Response }          from '@angular/http';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { HttpService } from '../http.service';
import { ComicModalService } from '../comic-modal.service';

import { Character } from '../character';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [HttpService]
})
export class HeroListComponent implements OnInit, OnChanges {

  @Input() keyword: string;
  loading: boolean = true;

  characters: Character[];
  page: number = 1;
  pages: number;
  pagerList: string[];
  sortBy: string = 'Sort by  ';
  sortByValue: string = 'name';

  constructor(private httpService: HttpService, private comicModalService: ComicModalService) {
      console.log('onInit');
      this.httpService.getData( this.keyword , this.sortByValue, (10*(this.page-1)) ).subscribe(
        ( data: Response ) => {
          this.loading = false;
          this.setPages(data.json().data.total);
          this.characters = data.json().data.results.map( (object) => {
            const char: Character = new Character(object);
            return char;
          });
        }
      );

  }

  ngOnInit() {


   }


  ngOnChanges(){
      console.log('HTTP Request...');
      this.loading = true;
      this.page = 1;
      this.httpService.getData( this.keyword, this.sortByValue, (10*(this.page-1)) ).subscribe(
        ( data: Response ) => {
          this.loading = false;
          this.setPages(data.json().data.total);
          this.characters = data.json().data.results.map( (object) => {
            const char: Character = new Character(object);
            return char;
          });
        }
      );

  }

  setPages(total){
    this.pages = Math.ceil(total/10);
    this.page = 1;
    this.setPagerList();

  }

  setPagerList(){
    let end = this.pages;
    let start = this.page - 2;

    this.pagerList = [];

    if(start < 1 ) start = 1;
    if( end > (start + 4) ) end = start + 4;
    if(start > 1 ) this.pagerList.push('... ');

    for(let i = start; i <= end; i++ ){
      this.pagerList.push(String(i));
    }

    if(end < this.pages) this.pagerList.push(' ...');

  }

  setPage(page){
    if(page < 1 || page > this.pages) return;
    this.page = page;

    if(page === '... ') this.page = 1;
    if(page === ' ...') this.page = this.pages;

    console.log(`HTTP Request for page: ${page}`);
    this.httpService.getData( this.keyword, this.sortByValue, (10*(this.page-1)) ).subscribe(
      ( data: Response ) => {
        this.characters = data.json().data.results.map( (object) => {
          const char: Character = new Character(object);
          return char;
        });
      }
    );
    this.setPagerList();
  }

  orderBy(field:string){
    console.log('order by')
    if(field === this.sortByValue) return;
    this.sortByValue = field;
    if(field==='name') this.sortBy = 'Name';
    if(field==='modified') this.sortBy = 'Modified';
    this.ngOnChanges();
  }

 onClick(url:string){
  this.comicModalService.sendUrl(url);
 }

}
