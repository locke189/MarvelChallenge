import { Injectable } from '@angular/core';
import { Character } from './character'


@Injectable()
export class ModelService {

  characters : Character[];

  constructor() { }

  addCharacter(char:Character){
    //TODO if character already in list don't add it
    this.characters.push(char);
  }

  getCharacter(search:string){
    //TODO get a list of characters based on the search string
    //TODO if there is no local data, go and fetch from the API
    return this.characters[0];
  }

  searchCharacter(search:string){
    //TODO sends a http request searching for a character
    //TODO adds the new heroes to the character list
  }

  getInitialList(){

  }

}
