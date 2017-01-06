import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../character';
import { ComicDetailComponent } from '../../comic-detail/comic-detail.component';
import { ComicModalService } from '../../comic-modal.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: []
})
export class HeroDetailComponent implements OnInit {
  @Input() char: Character;

  constructor(private comicModalService: ComicModalService) {

  }

  ngOnInit() {
  }

  callModal(url:string){
    this.comicModalService.sendUrl(url);
  }


}
