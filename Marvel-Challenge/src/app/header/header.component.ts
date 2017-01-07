import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() searchTerm = new EventEmitter();
  @Output() mainContent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  search(term:string){
    this.searchTerm.emit(term);
    console.log(`Search: ${term}`);
  }

  viewInMain(component:string){
    this.mainContent.emit(component);
  }




}
