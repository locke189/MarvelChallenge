import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class HttpService {

  constructor(private http:Http) { }

  getData(searchInput:string, orderBy:string){
    let params = ``;
    if( searchInput !== '' )
        params += `nameStartsWith=${searchInput}&`;

    params += `orderBy=${orderBy}`;

    return this.http.get(`https://gateway.marvel.com//v1/public/characters?apikey=6e8fd6170783e1ecf8c0e3784c8c00f2&hash=effdd68f568a43ae712240c3ce880e86&ts=1&limit=10&${params}`);
  }

}
