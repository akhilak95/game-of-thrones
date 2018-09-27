import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable({
  providedIn: 'root'
})
export class GotServiceService {
  public baseURL = "https://www.anapioficeandfire.com/api";
  public bookimg = [
     { "img":"https://images-na.ssl-images-amazon.com/images/I/51MIF9UAwgL._SX324_BO1,204,203,200_.jpg"},
     { "img":"https://i.pinimg.com/originals/09/09/dd/0909dd3c8cf1f82465d65e2425361220.jpg"},
     { "img":"https://images-na.ssl-images-amazon.com/images/I/51e6nhYq5TL._SX303_BO1,204,203,200_.jpg"},
     { "img":"https://images-na.ssl-images-amazon.com/images/I/51RQjgcJZlL._SX305_BO1,204,203,200_.jpg"},
     { "img":"https://image.bokus.com/images/9780007459476_200x_a-feast-for-crows-hardback-reissue"},
     { "img":"https://img00.deviantart.net/bf42/i/2012/107/c/d/the_sworn_sword_cover_by_teews666-d4wc3oh.png"},
     { "img":"https://images-na.ssl-images-amazon.com/images/I/617Nb05gD0L._SX318_BO1,204,203,200_.jpg"},
     { "img":"https://vignette.wikia.nocookie.net/iceandfire/images/9/93/ADWDUK.jpg/revision/latest?cb=20090615014055"},
     { "img":"https://i.pinimg.com/originals/09/e7/46/09e746e64c1d29bf0be97151dbcccf6b.jpg"},
     { "img":"https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Rogues_2014-1st_ed._cover.jpg/220px-Rogues_2014-1st_ed._cover.jpg"},
   
   ]
   public charimg = [
     { "img":"http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg"},
     { "img":"http://wikiofthrones.com/static/uploads/2016/05/hodor-1.0.jpg"},
     { "img":"http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg"},
     { "img":"http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg"},
     { "img":"http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg"},
     { "img":"http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg"},
     { "img":"http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg"},
     { "img":"http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg"},
     { "img":"http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg"},
     { "img":"http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg"},
   
   ]
   public houseimg = [
     { "img":"https://awoiaf.westeros.org/images/8/88/Algood.png"},
     { "img":"https://vignette.wikia.nocookie.net/ironthronerp/images/0/05/Allyrion.jpeg/revision/latest?cb=20150826105653"},
     { "img":"https://vignette.wikia.nocookie.net/gameofthrones/images/2/2f/House-Umber-Main-Shield.PNG/revision/latest?cb=20161231125826"},
     { "img":"https://vignette.wikia.nocookie.net/iceandfire/images/a/ad/250px-Ambrose.png/revision/latest?cb=20170420030939"},
     { "img":"https://awoiaf.westeros.org/thumb.php?f=House_Appleton.png&width=544"},
     { "img":"https://awoiaf.westeros.org/thumb.php?f=House_Arryn.svg&width=545&lang=en"},
     { "img":"https://vignette.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest?cb=20170101094153"},
     { "img":"https://awoiaf.westeros.org/thumb.php?f=House_Ashford.PNG&width=512"},
     { "img":"https://awoiaf.westeros.org/thumb.php?f=House_Stark.svg&width=545&lang=en"},
     { "img":"https://awoiaf.westeros.org/thumb.php?f=House_Baelish_%28Harrenhal%29.svg&width=545&lang=en"},
   
   ]
 
   constructor(public http:HttpClient) { }
 
   public getallimages(){
     return this.bookimg;
   
   }
   public getallimagchar(){
     return this.charimg;
   
   }
   public getallimageshouse(){
     return this.houseimg;
   }
 public getallBooks(){
   let myresponse = this.http.get(this.baseURL + '/books');
   console.log(myresponse)
   return myresponse;
 }
 
 public getallCharacters(){
   let myresponse = this.http.get(this.baseURL + '/characters');
   console.log(myresponse);
   return myresponse;
 }
 public getallHouses(){
   let myresponse = this.http.get(this.baseURL + '/houses');
   console.log(myresponse);
   return myresponse;
 }
 public getBooksbyid(bookid){
   let myresponse = this.http.get(this.baseURL + '/books/' +bookid,bookid);
   console.log(myresponse);
   return myresponse;
 }
 
 public getCharactersbyid(charid){
   let myresponse = this.http.get(this.baseURL + '/characters/' +charid,charid);
   console.log(myresponse);
   return myresponse;
 }
 public getHousesbyid(houseid){
   let myresponse = this.http.get(this.baseURL + '/houses/' +houseid,houseid);
   console.log(myresponse);
   return myresponse;
 }
 
}
