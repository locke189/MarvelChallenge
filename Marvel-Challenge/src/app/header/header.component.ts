import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() searchTerm = new EventEmitter();
  @Output() mainContent = new EventEmitter();
  isCharacter: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  search(term:string){
    this.searchTerm.emit(term);
    console.log(`Search: ${term}`);

  }

  viewInMain(component:string){
    if(component === "characters"){
      this.isCharacter = true;
    } else {
      this.isCharacter = false;
    }
    this.mainContent.emit(component);
  }




}
