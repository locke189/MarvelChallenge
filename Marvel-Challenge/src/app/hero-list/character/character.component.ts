import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() char: Character;

/*
  char: Character = {
    'id': '1009368',
    'name': 'Iron Man',
    'description': 'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.',
    'thumbnail': 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg',
    'comics': [{'name': 'A+X (2012) #2'}, {'name':  'Adam: Legend of the Blue Marvel (Trade Paperback)'}, {'name': 'All-New, All-Different Avengers (2015) #11'}, {'name': 'All-New, All-Different Avengers (2015) #11'}]
  }
*/


  constructor() { }

  ngOnInit() {

  }





}
