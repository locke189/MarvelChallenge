import { Injectable } from '@angular/core';
import { URLSearchParams, Http } from "@angular/http";

@Injectable()
export class HttpService {

  constructor(private http:Http) { }

  getData(searchInput:string, orderBy:string){
    const url = "https://gateway.marvel.com//v1/public/characters";
    let params = new URLSearchParams();
    params.set('hash', 'effdd68f568a43ae712240c3ce880e86');
    params.set('apikey', '6e8fd6170783e1ecf8c0e3784c8c00f2');
    params.set('ts', '1');
    params.set('limit', '10');
    if(searchInput) params.set('nameStartsWith', searchInput)
    if(orderBy) params.set('orderBy', orderBy);
    return this.http.get(url, {search: params});
  }

}
