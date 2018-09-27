import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { GotServiceService } from '../got-service.service';

@Component({
  selector: 'app-characters-view',
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.css'],
  providers: [Location]
})
export class CharactersViewComponent implements OnInit {

  public cuurentcharacid;
  public currentdata;
  public data = 0;
  public charimg;
  public currentimg;
  constructor(public _activatedroute: ActivatedRoute, _route: Router, public httpclient: GotServiceService, public location: Location) { }

  ngOnInit() {
    this.cuurentcharacid = this._activatedroute.snapshot.paramMap.get("characterid");
    console.log(this.cuurentcharacid);
    this.currentdata = this.httpclient.getCharactersbyid(this.cuurentcharacid).subscribe(
      data => {
        console.log(data);
        this.currentdata = data;
        this.data = 1;
        for (let d in this.currentdata) {
          if (this.currentdata[d] == '') {
            this.currentdata[d] = 'no ' + [d] + ' found'
          }

        }

      },
      error => {
        console.log("error occur");
      }
    )
    this.charimg = this.httpclient.getallimagchar();
    console.log(this.charimg);
    for (let img of this.charimg) {
      if (this.charimg.indexOf(img) == this.cuurentcharacid - 1) {
        this.currentimg = img;


      }
    }
  }
  public gobacktoprevpage(): any {
    this.location.back();

  }



}
