import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [HttpService]
})
export class HeroListComponent implements OnInit {



  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
      this.httpService.getData('Iron', 'name').subscribe(
        (data: Response) => console.log(data.json())
          );
  }

  getHeroes(){

  }

}
