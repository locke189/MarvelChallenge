import { Component, OnInit } from '@angular/core';
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
export class HeroListComponent implements OnInit {

  characters: Character[];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
      this.httpService.getData( 'Iron', 'modified' ).subscribe(
        ( data: Response ) => {
          this.characters = data.json().data.results.map( (object) => {
            const char: Character = new Character(object);
            return char;
          });
        }
      );
  }
}
