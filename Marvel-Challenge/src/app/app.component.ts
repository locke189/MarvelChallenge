import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  keyword : string;
  showFavList : boolean = false;

  onSearch(term:string){
    console.log(`Searching... ${term}`);
    this.keyword = term;
  }

  setContentClass(component:string){
    if(component === "favourites"){
      this.showFavList = true;
    }
    else{
      this.showFavList = false;
    }
  }

  setFavListClasses() {
    let classes =  {
      "hidden-xs": !this.showFavList,
    };
    return classes;
  }

  setHeroListClasses(){
    let classes =  {
      "hidden-xs": this.showFavList,
    };
    return classes;
  }
}
