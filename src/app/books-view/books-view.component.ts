import { Component, OnInit } from '@angular/core';
import { GotServiceService } from '../got-service.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css'],
  providers: [Location]
})
export class BooksViewComponent implements OnInit {

  public currentbookid;
  public currentdata;
  public data = 0;
  public bookimg;
  public currentimg
  constructor(public _activateroute: ActivatedRoute, public _route: Router, public httpclient: GotServiceService, public location: Location) { }

  ngOnInit() {
    this.currentbookid = this._activateroute.snapshot.paramMap.get('bookid');
    console.log(this.currentbookid);
    this.currentdata = this.httpclient.getBooksbyid(this.currentbookid).subscribe(
      data => {
        console.log(data);
        this.currentdata = data;
        this.data = 1;

        for (let d in this.currentdata) {
          if (this.currentdata[d] == '') {
            this.currentdata[d] = [d] + ' Not Found';
          }

        }
      },
      error => {
        console.log("error occur");
      }
    )
    this.bookimg = this.httpclient.getallimages();

    for (let img of this.bookimg) {
      if (this.bookimg.indexOf(img) == this.currentbookid - 1) {
        this.currentimg = img;



      }
    }

  }
  public gobacktoprevpage(): any {
    this.location.back();

  }

}
