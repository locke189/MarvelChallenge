import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  keyword : string;

  onSearch(term:string){
    console.log(`Searching... ${term}`);
    this.keyword = term;
  }

}
