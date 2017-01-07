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
import { HeroDetailComponent } from './hero-list/hero-detail/hero-detail.component';

import { ComicModalService } from './comic-modal.service';
import { ModelService } from './model.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroListComponent,
    FavListComponent,
    ComicDetailComponent,
    CharacterComponent,
    ComicComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ComicModalService, ModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
