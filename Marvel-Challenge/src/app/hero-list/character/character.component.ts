import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() char: Character;

  constructor() { }

  ngOnInit() {

  }





}
