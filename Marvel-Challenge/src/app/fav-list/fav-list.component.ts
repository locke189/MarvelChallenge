import { Component, OnInit } from '@angular/core';
import { Comic } from '../comic';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css'],
  providers: [ModelService]
})
export class FavListComponent implements OnInit {
  favouriteComics: Comic[];

  constructor(private modelService: ModelService) { }

  ngOnInit() {
    this.favouriteComics = this.modelService.getFavourites();
  }

}
