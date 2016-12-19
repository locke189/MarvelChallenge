import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { FavListComponent } from './fav-list/fav-list.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { CharacterComponent } from './hero-list/character/character.component';
import { ComicComponent } from './fav-list/comic/comic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroListComponent,
    FavListComponent,
    ComicDetailComponent,
    CharacterComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
