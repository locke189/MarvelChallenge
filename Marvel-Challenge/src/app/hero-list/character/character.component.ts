import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../character';
import { ComicModalService } from '../../comic-modal.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() char: Character;

  constructor(private comicModalService: ComicModalService) { }

  ngOnInit() {

  }

  clickOnComic(url:string){
    this.comicModalService.sendUrl(url);
  }



}
