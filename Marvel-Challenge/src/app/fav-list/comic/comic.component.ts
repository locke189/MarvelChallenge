import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '../../comic';
import { ModelService } from '../../model.service';
import { ComicModalService } from '../../comic-modal.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  @Input() comic: Comic;
  constructor(private modelService: ModelService, private comicModalService: ComicModalService) { }

  ngOnInit() {
  }

  comicDetail(){
    console.log("comic modal poping up");
    this.comicModalService.sendComic(this.comic);
  }

  deleteComic(){
    console.log("erasing comic from list");
    this.modelService.eraseComicFromListbyId(this.comic.id);
  }

}
