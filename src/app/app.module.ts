import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{RouterModule,Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http'; 
import {Location} from '@angular/common';
import {FormsModule} from '@angular/forms';
 


import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BooksViewComponent } from './books-view/books-view.component';
import { CharactersComponent } from './characters/characters.component';
import { CharactersViewComponent } from './characters-view/characters-view.component';
import { HomeComponent } from './home/home.component';
import { HusesComponent } from './huses/huses.component';
import { HousesViewComponent } from './houses-view/houses-view.component';
import { NotComponent } from './not/not.component';
import { GotServiceService } from './got-service.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksViewComponent,
    CharactersComponent,
    CharactersViewComponent,
    HomeComponent,
    HusesComponent,
    HousesViewComponent,
    NotComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path :'home',component:HomeComponent},
      {path:'books',component:BooksComponent},
      {path:'characters',component:CharactersComponent},
      {path:'houses',component:HusesComponent},
      {path:'bookid/:bookid',component:BooksViewComponent},
      {path:'characterid/:characterid',component:CharactersViewComponent},
      {path:'houseid/:houseid',component:HousesViewComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:NotComponent}
      
     
    ])
  ],
  providers: [GotServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
