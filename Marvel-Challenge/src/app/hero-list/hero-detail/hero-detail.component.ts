import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../character';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() char: Character;
  constructor() { }

  ngOnInit() {
  }

}
