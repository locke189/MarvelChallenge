import { Component, OnInit } from '@angular/core';
import { Comic } from '../comic';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css'],
  providers: []
})
export class FavListComponent implements OnInit {
  favouriteComics: Comic[];

  constructor(private modelService: ModelService) {
    this.modelService.favList$.subscribe(
      (favList) => {
        console.log("fav list updated!")
        this.favouriteComics = favList;
      }
    );
  }

  ngOnInit() {

  }

}
